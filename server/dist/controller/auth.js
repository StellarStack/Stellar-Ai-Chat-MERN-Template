import { getGooleOAuthToken, getGoogleUser } from "../service/auth_service.js";
import { user } from "../model/user.js";
import "dotenv/config";
import { jwtSignIn } from "../service/auth_service.js";
import { tokenVerify } from "../helper/tokenVerify.js";
import { getCookieValue } from "../helper/cookieHandler.js";
import jwt from "jsonwebtoken";
var clientRedirectUrl = process.env.CLIENT_REDIRECT_URL;
var accessTokenSecret = process.env.ACCESS_TOKEN_JWT_SECRET;
var refreshTokenSecret = process.env.REFRESH_TOKEN_JWT_SECRET;
var accessTokenExpire = process.env.ACCESS_TOKEN_EXPIRETIME;
var refreshTokenExpire = process.env.REFRESH_TOKEN_EXPIRETIME;
var applicationType = process.env.APPLICATION_TYPE;
var cookieDomain = process.env.COOKIE_DOMAIN || "localhost";
export var googleOauthHandler = function googleOauthHandler(req, res, next) {
  var code = req.query.code;
  var newUserData;
  getGooleOAuthToken(code).then(function (tokenData) {
    var access_token = tokenData.access_token,
      id_token = tokenData.id_token;
    return getGoogleUser(id_token, access_token);
  }).then(function (userData) {
    if (!userData.email_verified) {
      var error = new Error("Email address is not verified");
      error.statusCode = 403;
      throw error;
    }
    newUserData = userData;
    return user.findOne({
      email: newUserData.email
    });
  }).then(function (dbUser) {
    if (!dbUser) {
      req.user.name = newUserData.name;
      req.user.email = newUserData.email;
      req.user.profileImg = newUserData.picture;
      return req.user.save();
    }
    dbUser.name = newUserData.name;
    dbUser.email = newUserData.email;
    dbUser.profileImg = newUserData.picture;
    return dbUser.save();
  }).then(function (result) {
    if (!result) {
      var error = new Error("user data update failed");
      error.statusCode = 500;
      throw error;
    }
    var clientUserAgent = req.headers["user-agent"];
    var tokenUserData = {
      email: newUserData.email,
      name: newUserData.name,
      userAgent: clientUserAgent
    };
    var accessToken = jwtSignIn(tokenUserData, accessTokenSecret, accessTokenExpire);
    var refreshToken = jwtSignIn(tokenUserData, refreshTokenSecret, refreshTokenExpire);
    var accessCookieOption = {
      maxAge: 900000,
      httpOnly: true,
      domain: cookieDomain
    };
    var refreshCookieOption = {
      maxAge: 604800000,
      httpOnly: true,
      domain: cookieDomain
    };
    if (applicationType === "production") {
      accessCookieOption.secure = true;
      accessCookieOption.sameSite = "None";
      refreshCookieOption.secure = true;
      refreshCookieOption.sameSite = "None";
    }
    res.cookie("access_token", accessToken, accessCookieOption);
    res.cookie("refresh_token", refreshToken, refreshCookieOption);
    res.cookie("isLogin", "yes", accessCookieOption);
    res.redirect(clientRedirectUrl);
  })["catch"](function (error) {
    console.log(error);
  });
};
var a = 0;
export var loginValidation = function loginValidation(req, res, next) {
  var cookieSting = req.headers.cookie;
  var cookieName = "access_token";
  var token = getCookieValue(cookieSting, cookieName);
  if (!token) {
    var err = new Error("Invalid Token");
    err.statusCode = 401;
    throw err;
  }
  a += 1;
  console.log("Login Validation ", a);
  tokenVerify(token).then(function (user) {
    if (!user) {
      var error = new Error("user not found");
      error.statusCode = 403;
      throw error;
    }
    res.status(200).json({
      message: "Login Success",
      email: user.email,
      name: user.name,
      profileImg: user.profileImg
    });
  })["catch"](function (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};
export var logoutHandler = function logoutHandler(req, res, next) {
  var cookieSting = req.headers.cookie;
  var acessToken = getCookieValue(cookieSting, "access_token");
  var refresh_token = getCookieValue(cookieSting, "refresh_token");
  req.user.expireAccessToken.push(acessToken);
  req.user.expireRefreshToken.push(refresh_token);
  req.user.save().then(function (result) {
    if (!result) {
      var error = new Error("Token Expire Add Failed");
      error.statusCode = 403;
      throw error;
    }
    var accessCookieOption = {
      maxAge: 900000,
      httpOnly: true,
      domain: cookieDomain
    };
    var refreshCookieOption = {
      maxAge: 604800000,
      httpOnly: true,
      domain: cookieDomain
    };
    if (applicationType === "production") {
      accessCookieOption.secure = true;
      accessCookieOption.sameSite = "None";
      refreshCookieOption.secure = true;
      refreshCookieOption.sameSite = "None";
    }
    res.clearCookie("access_token", accessCookieOption);
    res.clearCookie("refresh_token", refreshCookieOption);
    res.clearCookie("isLogin", accessCookieOption);
    res.status(200).json({
      message: "Logout"
    });
  })["catch"](function (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};
export var refreshToken = function refreshToken(req, res, next) {
  var cookieSting = req.headers.cookie;
  var refreshToken = getCookieValue(cookieSting, "refresh_token");
  var accessToken = getCookieValue(cookieSting, "access_token");
  if (!accessToken) {
    var error = new Error("access token not found");
    error.statusCode = 401;
    return next(error);
  }
  if (!refreshToken) {
    var _error = new Error("Refresh token not found");
    _error.statusCode = 401;
    return next(_error);
  }
  var decodeToken = jwt.verify(refreshToken, refreshTokenSecret);
  if (!decodeToken) {
    var err = new Error("Token Invalid");
    err.statusCode = 401;
    err.data = "invalid token";
    return next(err);
  }
  user.findOne({
    email: decodeToken.email
  }).then(function (userData) {
    if (!userData) {
      var _error2 = new Error("user not found");
      _error2.statusCode = 403;
      throw _error2;
    }
    var isAccessTokenPresent = userData.expireAccessToken.some(function (blockedToken) {
      return blockedToken === accessToken;
    });
    if (isAccessTokenPresent) {
      var _error3 = new Error("invalid access token");
      throw _error3;
    }
    var isRefreshTokenPresent = userData.expireRefreshToken.some(function (blockedToken) {
      return blockedToken === refreshToken;
    });
    if (isRefreshTokenPresent) {
      var _error4 = new Error("invalid refresh token");
      throw _error4;
    }
    var clientUserAgent = req.headers["user-agent"];
    var tokenUserData = {
      email: decodeToken.email,
      name: decodeToken.name,
      userAgent: clientUserAgent
    };
    var newAccessToken = jwtSignIn(tokenUserData, accessTokenSecret, accessTokenExpire);
    var accessCookieOption = {
      maxAge: 900000,
      httpOnly: true,
      domain: cookieDomain
    };
    if (applicationType === "production") {
      accessCookieOption.secure = true;
      accessCookieOption.sameSite = "None";
    }
    res.cookie("access_token", newAccessToken, accessCookieOption);
    res.cookie("isLogin", "yes", accessCookieOption);
    res.status(200).json({
      message: "Token Reset Successful"
    });
  })["catch"](function (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};