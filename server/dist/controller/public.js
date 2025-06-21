function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import { user } from "../model/user.js";
import { chat } from "../model/chat.js";
import { chatHistory } from "../model/chatHistory.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Error } from "mongoose";
export var getGeminiHome = function getGeminiHome(req, res, next) {
  res.status(200).json({
    message: "Welcome to Gemini Ai Api"
  });
};

// post gemini data add to db condition

// if chatHistoryId -> check old chatHistory else create new chatHistory

// if chatHistoryId -> push old chat -> create new chat

// add chat to chatHistory only first one

// add chatHistory to user

var b = 0;
export var postGemini = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res, next) {
    var clientApikey, serverSideClientApiKey, error, query, previousChat, chatHistoryId, history, genAi, model, chats, text, newChatHistoryId, chatId;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          clientApikey = String(req.headers["x-api-key"]);
          serverSideClientApiKey = String(process.env.CLIENT_API_KEY);
          if (!(clientApikey !== serverSideClientApiKey)) {
            _context.n = 1;
            break;
          }
          error = new Error("Invalid Api Key");
          error.statusCode = 401;
          error.data = "Invalid Api Key";
          return _context.a(2, next(error));
        case 1:
          query = String(req.body.userInput);
          previousChat = req.body.previousChat;
          chatHistoryId = req.body.chatHistoryId;
          history = [{
            role: "user",
            parts: "Hello, who are you."
          }, {
            role: "model",
            parts: "I am a large language model, trained by Google."
          }];
          if (previousChat.length > 0) history = [].concat(_toConsumableArray(history), _toConsumableArray(previousChat));
          genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
          model = genAi.getGenerativeModel({
            model: "gemini-1.5-pro"
          });
          chats = model.startChat({
            history: history
          });
          chats.sendMessage(query).then(function (result) {
            return result.response;
          }).then(function (response) {
            text = response.text();
            if (text.length < 5) {
              var _error = new Error("result not found");
              _error.statusCode = 403;
              throw _error;
            }
            if (chatHistoryId.length < 5) {
              var newChatHistory = new chatHistory({
                user: req.user._id,
                title: query
              });
              return newChatHistory.save();
            } else {
              return chatHistory.findById(chatHistoryId);
            }
          }).then(function (chatHistory) {
            if (!chatHistory) {
              var _error2 = new Error("Chat History not found");
              _error2.statusCode = 403;
              throw _error2;
            }
            newChatHistoryId = chatHistory._id;
            if (chatHistoryId.length < 5) {
              var newChat = new chat({
                chatHistory: newChatHistoryId,
                messages: [{
                  sender: req.user._id,
                  message: {
                    user: query,
                    gemini: text
                  }
                }]
              });
              return newChat.save();
            } else {
              return chat.findOne({
                chatHistory: chatHistory._id
              }).then(function (chatData) {
                if (!chatData) {
                  var _error3 = new Error("no chat found");
                  _error3.statusCode = 403;
                  throw _error3;
                }
                chatData.messages.push({
                  sender: req.user._id,
                  message: {
                    user: query,
                    gemini: text
                  }
                });
                return chatData.save();
              });
            }
          }).then(function (result) {
            chatId = result._id;
            if (!result) {
              throw new Error("Server Error");
            }
            if (chatHistoryId.length < 5) {
              return chatHistory.findById(newChatHistoryId).then(function (chatHistory) {
                if (!chatHistory) {
                  var _error4 = new Error("Chat History not found");
                  _error4.statusCode = 403;
                  throw _error4;
                }
                chatHistory.chat = chatId;
                return chatHistory.save();
              });
            } else {
              return true;
            }
          }).then(function (result) {
            if (!result) {
              throw new Error("Server Error");
            }
            return user.findById(req.user._id);
          }).then(function (userData) {
            if (!userData) {
              var _error5 = new Error("No user found");
              _error5.statusCode = 403;
              throw _error5;
            }
            if (chatHistoryId.length < 5) {
              userData.chatHistory.push(newChatHistoryId);
            }
            if (req.auth === "noauth") {
              userData.currentLimit += 1;
            }
            return userData.save();
          }).then(function (result) {
            if (!result) {
              throw new Error("Server Error");
            }
            b += 1;
            console.log("new chat ", b);
            res.status(200).json({
              user: query,
              gemini: text,
              chatHistoryId: newChatHistoryId || chatHistoryId
            });
          })["catch"](function (err) {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          });
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function postGemini(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var c = 0;
export var getChatHistory = function getChatHistory(req, res, next) {
  user.findById(req.user._id).populate({
    path: "chatHistory"
  }).then(function (userData) {
    if (!user) {
      var error = new Error("User Not Found");
      error.statusCode = 403;
      throw error;
    }
    c += 1;
    console.log("chat history", c);
    var chatHistory;
    if (req.auth === "auth") {
      chatHistory = userData.chatHistory.reverse();
    } else {
      chatHistory = userData.chatHistory.reverse().slice(0, 5);
    }
    res.status(200).json({
      chatHistory: chatHistory,
      location: userData.location
    });
  })["catch"](function (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  });
};
var a = 0;
export var postChat = function postChat(req, res, next) {
  var chatHistoryId = req.body.chatHistoryId;
  var userId = req.user._id;
  var isNotAuthUser = req.auth === "noauth";
  var findChatHistory = isNotAuthUser ? chatHistory.find({
    user: userId
  }) : chatHistory.findOne({
    user: userId,
    _id: chatHistoryId
  });
  findChatHistory.sort({
    _id: -1
  }).limit(isNotAuthUser ? 5 : 1).then(function (chatHistories) {
    if (isNotAuthUser) {
      var recentChatHistoryIds = chatHistories.map(function (history) {
        return history._id.toString();
      });
      if (!recentChatHistoryIds.includes(chatHistoryId)) {
        var error = new Error("You are not a auth user");
        error.statusCode = 403;
        throw error;
      }
    }
    return chatHistory.findOne({
      user: userId,
      _id: chatHistoryId
    }).populate({
      path: "chat"
    });
  }).then(function (chatData) {
    if (!chatData) {
      var error = new Error("No Chat history found");
      error.statusCode = 403;
      throw error;
    }
    a += 1;
    console.log("Old chats ", a);
    res.status(200).json({
      chatHistory: chatData._id,
      chats: chatData.chat.messages
    });
  })["catch"](function (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};
var d = 0;
export var updateLocation = function updateLocation(req, res, next) {
  var _req$body$location = req.body.location,
    lat = _req$body$location.lat,
    _long = _req$body$location["long"];
  var apiKey = process.env.LOCATION_API_KEY;
  var url = "https://geocode.maps.co/reverse?lat=".concat(lat, "&lon=").concat(_long, "&api_key=").concat(apiKey);
  var location;
  fetch(url).then(function (response) {
    if (!response) {
      var error = new Error("Location Not Found");
      error.statusCode = 403;
      throw error;
    }
    return response.json();
  }).then(function (data) {
    location = "".concat(data.address.city, ", ").concat(data.address.state, ", ").concat(data.address.country);
    return user.findById(req.user._id);
  }).then(function (user) {
    if (!user) {
      var error = new Error("User Not Found");
      error.statusCode = 403;
      throw error;
    }
    user.location = location;
    return user.save();
  }).then(function (result) {
    if (!result) {
      var error = new Error("No Result");
      error.statusCode = 403;
      throw error;
    }
    d += 1;
    console.log("location", d);
    res.status(200).json({
      location: location
    });
  })["catch"](function (error) {
    if (!res.statusCode) {
      res.statusCode = 500;
    }
    next(error);
  });
};