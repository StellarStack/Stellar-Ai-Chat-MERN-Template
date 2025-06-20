import { getCookieValue } from "../helper/cookieHandler.js";
import { tokenVerify } from "../helper/tokenVerify.js";
import { user } from "../model/user.js";
export var authMiddleware = function authMiddleware(req, res, next) {
  var cookieSting = req.headers.cookie;
  var cookieName = "access_token";
  var token = getCookieValue(cookieSting, cookieName);
  if (token) {
    tokenVerify(token).then(function (userData) {
      req.user = userData;
      req.auth = "auth";
      next();
    })["catch"](function (err) {
      next(err);
    });
  } else {
    var ip = req.clientIp;
    user.findOne({
      ip: ip
    }).then(function (userData) {
      if (userData) {
        req.user = userData;
        req.auth = "noauth";
        return next();
      }
      var ip = req.clientIp;
      var url = "https://api.ipgeolocation.io/ipgeo?apiKey=".concat(process.env.GEO_API_KEY, "&ip=").concat(ip, "&fields=geo");
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var location;
        if (data.city) {
          location = data.city + ", " + data.state_prov + ", " + data.country_name;
        } else {
          location = ip;
        }
        var newUser = new user({
          ip: ip,
          location: location
        });
        return newUser.save().then(function (result) {
          return user.findOne({
            ip: ip
          });
        }).then(function (userData) {
          if (!userData) {
            var error = new Error("User not found");
            error.statusCode = 403;
            throw error;
          }
          req.user = userData;
          req.auth = "noauth";
          return next();
        });
      });
    })["catch"](function (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  }
};