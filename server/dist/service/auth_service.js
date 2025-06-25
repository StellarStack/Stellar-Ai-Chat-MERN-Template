import "dotenv/config";
import jwt from "jsonwebtoken";
export var getGooleOAuthToken = function getGooleOAuthToken(code) {
  var url = "https://oauth2.googleapis.com/token";
  var redirect_url = process.env.GOOGLE_OAUTH_REDIRECT_URL;
  var values = {
    code: code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: redirect_url,
    grant_type: "authorization_code"
  };
  return new Promise(function (res, rej) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(values).toString()
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to fetch Google Oauth Tokens");
      }
      return response.json();
    }).then(function (data) {
      res(data);
    })["catch"](function (err) {
      rej(err);
    });
  });
};
export var getGoogleUser = function getGoogleUser(id_token, access_token) {
  return new Promise(function (res, rej) {
    var url = "https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=".concat(access_token);
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer ".concat(id_token)
      }
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("No User Found");
      }
      return response.json();
    }).then(function (data) {
      res(data);
    })["catch"](function (err) {
      rej(err);
    });
  });
};
export var jwtSignIn = function jwtSignIn(userData, secret, expireTime) {
  var token = jwt.sign(userData, secret, {
    expiresIn: expireTime
  });
  return token;
};