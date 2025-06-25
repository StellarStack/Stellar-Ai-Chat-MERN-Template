import jwt from "jsonwebtoken";
import { user } from "../model/user.js";
export var tokenVerify = function tokenVerify(token) {
  return new Promise(function (res, rej) {
    var secret = process.env.ACCESS_TOKEN_JWT_SECRET;
    var decodeToken = jwt.verify(token, secret);
    if (!decodeToken) {
      var err = new Error("Token Invalid");
      err.statusCode = 401;
      err.data = "invalid token";
      return next(err);
    }
    var userEmail = decodeToken.email;
    user.findOne({
      email: userEmail
    }).then(function (userData) {
      if (!userData) {
        var error = new Error("user not found");
        error.statusCode = 403;
        throw error;
      }
      var isTokenPresent = userData.expireAccessToken.some(function (blockedToken) {
        return blockedToken === token;
      });
      if (isTokenPresent) {
        var _error = new Error("invalid token");
        throw _error;
      }
      res(userData);
    })["catch"](function (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      rej(err);
    });
  });
};