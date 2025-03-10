(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("postRobot", [], factory);
	else if(typeof exports === 'object')
		exports["postRobot"] = factory();
	else
		root["postRobot"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/util.js
function isRegex(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
} // eslint-disable-next-line no-unused-vars

function noop() {// pass
}
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/constants.js
var PROTOCOL = {
  MOCK: 'mock:',
  FILE: 'file:',
  ABOUT: 'about:'
};
var WILDCARD = '*';
var WINDOW_TYPE = {
  IFRAME: 'iframe',
  POPUP: 'popup'
};
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/utils.js
/* eslint max-lines: 0 */


var IE_WIN_ACCESS_ERROR = 'Call was rejected by callee.\r\n';
function isFileProtocol(win) {
  if (win === void 0) {
    win = window;
  }

  return win.location.protocol === PROTOCOL.FILE;
}
function isAboutProtocol(win) {
  if (win === void 0) {
    win = window;
  }

  return win.location.protocol === PROTOCOL.ABOUT;
}
function getParent(win) {
  if (win === void 0) {
    win = window;
  }

  if (!win) {
    return;
  }

  try {
    if (win.parent && win.parent !== win) {
      return win.parent;
    }
  } catch (err) {// pass
  }
}
function getOpener(win) {
  if (win === void 0) {
    win = window;
  }

  if (!win) {
    return;
  } // Make sure we're not actually an iframe which has had window.open() called on us


  if (getParent(win)) {
    return;
  }

  try {
    return win.opener;
  } catch (err) {// pass
  }
}
function canReadFromWindow(win) {
  try {
    // $FlowFixMe
    noop(win && win.location && win.location.href);
    return true;
  } catch (err) {// pass
  }

  return false;
}
function getActualDomain(win) {
  if (win === void 0) {
    win = window;
  }

  var location = win.location;

  if (!location) {
    throw new Error("Can not read window location");
  }

  var protocol = location.protocol;

  if (!protocol) {
    throw new Error("Can not read window protocol");
  }

  if (protocol === PROTOCOL.FILE) {
    return PROTOCOL.FILE + "//";
  }

  if (protocol === PROTOCOL.ABOUT) {
    var parent = getParent(win);

    if (parent && canReadFromWindow(parent)) {
      // $FlowFixMe
      return getActualDomain(parent);
    }

    return PROTOCOL.ABOUT + "//";
  }

  var host = location.host;

  if (!host) {
    throw new Error("Can not read window host");
  }

  return protocol + "//" + host;
}
function getDomain(win) {
  if (win === void 0) {
    win = window;
  }

  var domain = getActualDomain(win);

  if (domain && win.mockDomain && win.mockDomain.indexOf(PROTOCOL.MOCK) === 0) {
    return win.mockDomain;
  }

  return domain;
}
function isBlankDomain(win) {
  try {
    // $FlowFixMe
    if (!win.location.href) {
      return true;
    }

    if (win.location.href === 'about:blank') {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}
function isActuallySameDomain(win) {
  try {
    if (win === window) {
      return true;
    }
  } catch (err) {// pass
  }

  try {
    var desc = Object.getOwnPropertyDescriptor(win, 'location');

    if (desc && desc.enumerable === false) {
      return false;
    }
  } catch (err) {// pass
  }

  try {
    // $FlowFixMe
    if (isAboutProtocol(win) && canReadFromWindow(win)) {
      return true;
    }
  } catch (err) {// pass
  }

  try {
    // $FlowFixMe
    if (getActualDomain(win) === getActualDomain(window)) {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}
function isSameDomain(win) {
  if (!isActuallySameDomain(win)) {
    return false;
  }

  try {
    if (win === window) {
      return true;
    } // $FlowFixMe


    if (isAboutProtocol(win) && canReadFromWindow(win)) {
      return true;
    } // $FlowFixMe


    if (getDomain(window) === getDomain(win)) {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}
function assertSameDomain(win) {
  if (!isSameDomain(win)) {
    throw new Error("Expected window to be same domain");
  } // $FlowFixMe


  return win;
}
function getParents(win) {
  var result = [];

  try {
    while (win.parent !== win) {
      result.push(win.parent);
      win = win.parent;
    }
  } catch (err) {// pass
  }

  return result;
}
function isAncestorParent(parent, child) {
  if (!parent || !child) {
    return false;
  }

  var childParent = getParent(child);

  if (childParent) {
    return childParent === parent;
  }

  if (getParents(child).indexOf(parent) !== -1) {
    return true;
  }

  return false;
}
function getFrames(win) {
  var result = [];
  var frames;

  try {
    frames = win.frames;
  } catch (err) {
    frames = win;
  }

  var len;

  try {
    len = frames.length;
  } catch (err) {// pass
  }

  if (len === 0) {
    return result;
  }

  if (len) {
    for (var i = 0; i < len; i++) {
      var frame = void 0;

      try {
        frame = frames[i];
      } catch (err) {
        continue;
      }

      result.push(frame);
    }

    return result;
  }

  for (var _i = 0; _i < 100; _i++) {
    var _frame = void 0;

    try {
      _frame = frames[_i];
    } catch (err) {
      return result;
    }

    if (!_frame) {
      return result;
    }

    result.push(_frame);
  }

  return result;
}
function getAllChildFrames(win) {
  var result = [];

  for (var _i3 = 0, _getFrames2 = getFrames(win); _i3 < _getFrames2.length; _i3++) {
    var frame = _getFrames2[_i3];
    result.push(frame);

    for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame); _i5 < _getAllChildFrames2.length; _i5++) {
      var childFrame = _getAllChildFrames2[_i5];
      result.push(childFrame);
    }
  }

  return result;
}
function getTop(win) {
  if (win === void 0) {
    win = window;
  }

  try {
    if (win.top) {
      return win.top;
    }
  } catch (err) {// pass
  }

  if (getParent(win) === win) {
    return win;
  }

  try {
    if (isAncestorParent(window, win) && window.top) {
      return window.top;
    }
  } catch (err) {// pass
  }

  try {
    if (isAncestorParent(win, window) && window.top) {
      return window.top;
    }
  } catch (err) {// pass
  }

  for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win); _i7 < _getAllChildFrames4.length; _i7++) {
    var frame = _getAllChildFrames4[_i7];

    try {
      if (frame.top) {
        return frame.top;
      }
    } catch (err) {// pass
    }

    if (getParent(frame) === frame) {
      return frame;
    }
  }
}
function getNextOpener(win) {
  if (win === void 0) {
    win = window;
  }

  return getOpener(getTop(win) || win);
}
function getUltimateTop(win) {
  if (win === void 0) {
    win = window;
  }

  var opener = getNextOpener(win);

  if (opener) {
    return getUltimateTop(opener);
  }

  return top;
}
function getAllFramesInWindow(win) {
  var top = getTop(win);

  if (!top) {
    throw new Error("Can not determine top window");
  }

  return [].concat(getAllChildFrames(top), [top]);
}
function getAllWindows(win) {
  if (win === void 0) {
    win = window;
  }

  var frames = getAllFramesInWindow(win);
  var opener = getNextOpener(win);

  if (opener) {
    return [].concat(getAllWindows(opener), frames);
  } else {
    return frames;
  }
}
function isTop(win) {
  return win === getTop(win);
}
function isFrameWindowClosed(frame) {
  if (!frame.contentWindow) {
    return true;
  }

  if (!frame.parentNode) {
    return true;
  }

  var doc = frame.ownerDocument;

  if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
    return true;
  }

  return false;
}

function safeIndexOf(collection, item) {
  for (var i = 0; i < collection.length; i++) {
    try {
      if (collection[i] === item) {
        return i;
      }
    } catch (err) {// pass
    }
  }

  return -1;
}

var iframeWindows = [];
var iframeFrames = [];
function isWindowClosed(win, allowMock) {
  if (allowMock === void 0) {
    allowMock = true;
  }

  try {
    if (win === window) {
      return false;
    }
  } catch (err) {
    return true;
  }

  try {
    if (!win) {
      return true;
    }
  } catch (err) {
    return true;
  }

  try {
    if (win.closed) {
      return true;
    }
  } catch (err) {
    // I love you so much IE
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return false;
    }

    return true;
  }

  if (allowMock && isSameDomain(win)) {
    try {
      // $FlowFixMe
      if (win.mockclosed) {
        return true;
      }
    } catch (err) {// pass
    }
  } // Mobile safari


  try {
    if (!win.parent || !win.top) {
      return true;
    }
  } catch (err) {} // pass
  // Yes, this actually happens in IE. win === win errors out when the window
  // is from an iframe, and the iframe was removed from the page.


  try {
    noop(win === win); // eslint-disable-line no-self-compare
  } catch (err) {
    return true;
  } // IE orphaned frame


  var iframeIndex = safeIndexOf(iframeWindows, win);

  if (iframeIndex !== -1) {
    var frame = iframeFrames[iframeIndex];

    if (frame && isFrameWindowClosed(frame)) {
      return true;
    }
  }

  return false;
}

function cleanIframes() {
  for (var i = 0; i < iframeWindows.length; i++) {
    var closed = false;

    try {
      closed = iframeWindows[i].closed;
    } catch (err) {// pass
    }

    if (closed) {
      iframeFrames.splice(i, 1);
      iframeWindows.splice(i, 1);
    }
  }
}

function linkFrameWindow(frame) {
  cleanIframes();

  if (frame && frame.contentWindow) {
    try {
      iframeWindows.push(frame.contentWindow);
      iframeFrames.push(frame);
    } catch (err) {// pass
    }
  }
}
function getUserAgent(win) {
  win = win || window;
  return win.navigator.mockUserAgent || win.navigator.userAgent;
}
function getFrameByName(win, name) {
  var winFrames = getFrames(win);

  for (var _i9 = 0; _i9 < winFrames.length; _i9++) {
    var childFrame = winFrames[_i9];

    try {
      // $FlowFixMe
      if (isSameDomain(childFrame) && childFrame.name === name && winFrames.indexOf(childFrame) !== -1) {
        return childFrame;
      }
    } catch (err) {// pass
    }
  }

  try {
    // $FlowFixMe
    if (winFrames.indexOf(win.frames[name]) !== -1) {
      // $FlowFixMe
      return win.frames[name];
    }
  } catch (err) {// pass
  }

  try {
    if (winFrames.indexOf(win[name]) !== -1) {
      return win[name];
    }
  } catch (err) {// pass
  }
}
function findChildFrameByName(win, name) {
  var frame = getFrameByName(win, name);

  if (frame) {
    return frame;
  }

  for (var _i11 = 0, _getFrames4 = getFrames(win); _i11 < _getFrames4.length; _i11++) {
    var childFrame = _getFrames4[_i11];
    var namedFrame = findChildFrameByName(childFrame, name);

    if (namedFrame) {
      return namedFrame;
    }
  }
}
function findFrameByName(win, name) {
  var frame;
  frame = getFrameByName(win, name);

  if (frame) {
    return frame;
  }

  var top = getTop(win) || win;
  return findChildFrameByName(top, name);
}
function isParent(win, frame) {
  var frameParent = getParent(frame);

  if (frameParent) {
    return frameParent === win;
  }

  for (var _i13 = 0, _getFrames6 = getFrames(win); _i13 < _getFrames6.length; _i13++) {
    var childFrame = _getFrames6[_i13];

    if (childFrame === frame) {
      return true;
    }
  }

  return false;
}
function isOpener(parent, child) {
  return parent === getOpener(child);
}
function getAncestor(win) {
  if (win === void 0) {
    win = window;
  }

  win = win || window;
  var opener = getOpener(win);

  if (opener) {
    return opener;
  }

  var parent = getParent(win);

  if (parent) {
    return parent;
  }
}
function getAncestors(win) {
  var results = [];
  var ancestor = win;

  while (ancestor) {
    ancestor = getAncestor(ancestor);

    if (ancestor) {
      results.push(ancestor);
    }
  }

  return results;
}
function isAncestor(parent, child) {
  var actualParent = getAncestor(child);

  if (actualParent) {
    if (actualParent === parent) {
      return true;
    }

    return false;
  }

  if (child === parent) {
    return false;
  }

  if (getTop(child) === child) {
    return false;
  }

  for (var _i15 = 0, _getFrames8 = getFrames(parent); _i15 < _getFrames8.length; _i15++) {
    var frame = _getFrames8[_i15];

    if (frame === child) {
      return true;
    }
  }

  return false;
}
function utils_isPopup(win) {
  if (win === void 0) {
    win = window;
  }

  return Boolean(getOpener(win));
}
function isIframe(win) {
  if (win === void 0) {
    win = window;
  }

  return Boolean(getParent(win));
}
function isFullpage(win) {
  if (win === void 0) {
    win = window;
  }

  return Boolean(!isIframe(win) && !utils_isPopup(win));
}

function anyMatch(collection1, collection2) {
  for (var _i17 = 0; _i17 < collection1.length; _i17++) {
    var item1 = collection1[_i17];

    for (var _i19 = 0; _i19 < collection2.length; _i19++) {
      var item2 = collection2[_i19];

      if (item1 === item2) {
        return true;
      }
    }
  }

  return false;
}

function getDistanceFromTop(win) {
  if (win === void 0) {
    win = window;
  }

  var distance = 0;
  var parent = win;

  while (parent) {
    parent = getParent(parent);

    if (parent) {
      distance += 1;
    }
  }

  return distance;
}
function getNthParent(win, n) {
  if (n === void 0) {
    n = 1;
  }

  var parent = win;

  for (var i = 0; i < n; i++) {
    if (!parent) {
      return;
    }

    parent = getParent(parent);
  }

  return parent;
}
function getNthParentFromTop(win, n) {
  if (n === void 0) {
    n = 1;
  }

  return getNthParent(win, getDistanceFromTop(win) - n);
}
function isSameTopWindow(win1, win2) {
  var top1 = getTop(win1) || win1;
  var top2 = getTop(win2) || win2;

  try {
    if (top1 && top2) {
      if (top1 === top2) {
        return true;
      }

      return false;
    }
  } catch (err) {// pass
  }

  var allFrames1 = getAllFramesInWindow(win1);
  var allFrames2 = getAllFramesInWindow(win2);

  if (anyMatch(allFrames1, allFrames2)) {
    return true;
  }

  var opener1 = getOpener(top1);
  var opener2 = getOpener(top2);

  if (opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2)) {
    return false;
  }

  if (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1)) {
    return false;
  }

  return false;
}
function matchDomain(pattern, origin) {
  if (typeof pattern === 'string') {
    if (typeof origin === 'string') {
      return pattern === WILDCARD || origin === pattern;
    }

    if (isRegex(origin)) {
      return false;
    }

    if (Array.isArray(origin)) {
      return false;
    }
  }

  if (isRegex(pattern)) {
    if (isRegex(origin)) {
      return pattern.toString() === origin.toString();
    }

    if (Array.isArray(origin)) {
      return false;
    } // $FlowFixMe


    return Boolean(origin.match(pattern));
  }

  if (Array.isArray(pattern)) {
    if (Array.isArray(origin)) {
      return JSON.stringify(pattern) === JSON.stringify(origin);
    }

    if (isRegex(origin)) {
      return false;
    }

    return pattern.some(function (subpattern) {
      return matchDomain(subpattern, origin);
    });
  }

  return false;
}
function stringifyDomainPattern(pattern) {
  if (Array.isArray(pattern)) {
    return "(" + pattern.join(' | ') + ")";
  } else if (isRegex(pattern)) {
    return "RegExp(" + pattern.toString();
  } else {
    return pattern.toString();
  }
}
function getDomainFromUrl(url) {
  var domain;

  if (url.match(/^(https?|mock|file):\/\//)) {
    domain = url;
  } else {
    return getDomain();
  }

  domain = domain.split('/').slice(0, 3).join('/');
  return domain;
}
function onCloseWindow(win, callback, delay, maxtime) {
  if (delay === void 0) {
    delay = 1000;
  }

  if (maxtime === void 0) {
    maxtime = Infinity;
  }

  var timeout;

  var check = function check() {
    if (isWindowClosed(win)) {
      if (timeout) {
        clearTimeout(timeout);
      }

      return callback();
    }

    if (maxtime <= 0) {
      clearTimeout(timeout);
    } else {
      maxtime -= delay;
      timeout = setTimeout(check, delay);
    }
  };

  check();
  return {
    cancel: function cancel() {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  };
} // eslint-disable-next-line complexity

function isWindow(obj) {
  try {
    if (obj === window) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (Object.prototype.toString.call(obj) === '[object Window]') {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (window.Window && obj instanceof window.Window) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (obj && obj.self === obj) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (obj && obj.parent === obj) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (obj && obj.top === obj) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (noop(obj === obj) === '__unlikely_value__') {
      // eslint-disable-line no-self-compare
      return false;
    }
  } catch (err) {
    return true;
  }

  try {
    if (obj && obj.__cross_domain_utils_window_check__ === '__unlikely_value__') {
      return false;
    }
  } catch (err) {
    return true;
  }

  return false;
}
function isBrowser() {
  return typeof window !== 'undefined' && typeof window.location !== 'undefined';
}
function isCurrentDomain(domain) {
  if (!isBrowser()) {
    return false;
  }

  return getDomain() === domain;
}
function isMockDomain(domain) {
  return domain.indexOf(PROTOCOL.MOCK) === 0;
}
function normalizeMockUrl(url) {
  if (!isMockDomain(getDomainFromUrl(url))) {
    return url;
  }

  if (true) {
    throw new Error("Mock urls not supported out of test mode");
  }

  return url.replace(/^mock:\/\/[^/]+/, getActualDomain(window));
}
function closeWindow(win) {
  try {
    win.close();
  } catch (err) {// pass
  }
}
function getFrameForWindow(win) {
  if (isSameDomain(win)) {
    return assertSameDomain(win).frameElement;
  }

  for (var _i21 = 0, _document$querySelect2 = document.querySelectorAll('iframe'); _i21 < _document$querySelect2.length; _i21++) {
    var frame = _document$querySelect2[_i21];

    if (frame && frame.contentWindow && frame.contentWindow === win) {
      return frame;
    }
  }
}
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/types.js
// export something to force webpack to see this as an ES module
var TYPES = true;
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/index.js



// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/utils.js
function utils_isPromise(item) {
  try {
    if (!item) {
      return false;
    }

    if (typeof Promise !== 'undefined' && item instanceof Promise) {
      return true;
    }

    if (typeof window !== 'undefined' && typeof window.Window === 'function' && item instanceof window.Window) {
      return false;
    }

    if (typeof window !== 'undefined' && typeof window.constructor === 'function' && item instanceof window.constructor) {
      return false;
    }

    var _toString = {}.toString;

    if (_toString) {
      var name = _toString.call(item);

      if (name === '[object Window]' || name === '[object global]' || name === '[object DOMWindow]') {
        return false;
      }
    }

    if (typeof item.then === 'function') {
      return true;
    }
  } catch (err) {
    return false;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/exceptions.js
var dispatchedErrors = [];
var possiblyUnhandledPromiseHandlers = [];
function dispatchPossiblyUnhandledError(err, promise) {
  if (dispatchedErrors.indexOf(err) !== -1) {
    return;
  }

  dispatchedErrors.push(err);
  setTimeout(function () {
    if (false) {}

    throw err;
  }, 1);

  for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) {
    // $FlowFixMe
    possiblyUnhandledPromiseHandlers[j](err, promise);
  }
}
function exceptions_onPossiblyUnhandledException(handler) {
  possiblyUnhandledPromiseHandlers.push(handler);
  return {
    cancel: function cancel() {
      possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/flush.js
var activeCount = 0;
var flushPromise;

function flushActive() {
  if (!activeCount && flushPromise) {
    var promise = flushPromise;
    flushPromise = null;
    promise.resolve();
  }
}

function startActive() {
  activeCount += 1;
}
function endActive() {
  activeCount -= 1;
  flushActive();
}
function awaitActive(Zalgo) {
  // eslint-disable-line no-undef
  var promise = flushPromise = flushPromise || new Zalgo();
  flushActive();
  return promise;
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/promise.js



var promise_ZalgoPromise =
/*#__PURE__*/
function () {
  function ZalgoPromise(handler) {
    var _this = this;

    this.resolved = void 0;
    this.rejected = void 0;
    this.errorHandled = void 0;
    this.value = void 0;
    this.error = void 0;
    this.handlers = void 0;
    this.dispatching = void 0;
    this.stack = void 0;
    this.resolved = false;
    this.rejected = false;
    this.errorHandled = false;
    this.handlers = [];

    if (handler) {
      var _result;

      var _error;

      var resolved = false;
      var rejected = false;
      var isAsync = false;
      startActive();

      try {
        handler(function (res) {
          if (isAsync) {
            _this.resolve(res);
          } else {
            resolved = true;
            _result = res;
          }
        }, function (err) {
          if (isAsync) {
            _this.reject(err);
          } else {
            rejected = true;
            _error = err;
          }
        });
      } catch (err) {
        endActive();
        this.reject(err);
        return;
      }

      endActive();
      isAsync = true;

      if (resolved) {
        // $FlowFixMe
        this.resolve(_result);
      } else if (rejected) {
        this.reject(_error);
      }
    }

    if (false) {}
  }

  var _proto = ZalgoPromise.prototype;

  _proto.resolve = function resolve(result) {
    if (this.resolved || this.rejected) {
      return this;
    }

    if (utils_isPromise(result)) {
      throw new Error('Can not resolve promise with another promise');
    }

    this.resolved = true;
    this.value = result;
    this.dispatch();
    return this;
  };

  _proto.reject = function reject(error) {
    var _this2 = this;

    if (this.resolved || this.rejected) {
      return this;
    }

    if (utils_isPromise(error)) {
      throw new Error('Can not reject promise with another promise');
    }

    if (!error) {
      // $FlowFixMe
      var _err = error && typeof error.toString === 'function' ? error.toString() : Object.prototype.toString.call(error);

      error = new Error("Expected reject to be called with Error, got " + _err);
    }

    this.rejected = true;
    this.error = error;

    if (!this.errorHandled) {
      setTimeout(function () {
        if (!_this2.errorHandled) {
          dispatchPossiblyUnhandledError(error, _this2);
        }
      }, 1);
    }

    this.dispatch();
    return this;
  };

  _proto.asyncReject = function asyncReject(error) {
    this.errorHandled = true;
    this.reject(error);
    return this;
  };

  _proto.dispatch = function dispatch() {
    var dispatching = this.dispatching,
        resolved = this.resolved,
        rejected = this.rejected,
        handlers = this.handlers;

    if (dispatching) {
      return;
    }

    if (!resolved && !rejected) {
      return;
    }

    this.dispatching = true;
    startActive();

    var chain = function chain(firstPromise, secondPromise) {
      return firstPromise.then(function (res) {
        secondPromise.resolve(res);
      }, function (err) {
        secondPromise.reject(err);
      });
    };

    for (var i = 0; i < handlers.length; i++) {
      var _handlers$i = handlers[i],
          onSuccess = _handlers$i.onSuccess,
          onError = _handlers$i.onError,
          promise = _handlers$i.promise;

      var _result2 = void 0;

      if (resolved) {
        try {
          _result2 = onSuccess ? onSuccess(this.value) : this.value;
        } catch (err) {
          promise.reject(err);
          continue;
        }
      } else if (rejected) {
        if (!onError) {
          promise.reject(this.error);
          continue;
        }

        try {
          _result2 = onError(this.error);
        } catch (err) {
          promise.reject(err);
          continue;
        }
      }

      if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
        if (_result2.resolved) {
          promise.resolve(_result2.value);
        } else {
          promise.reject(_result2.error);
        }

        _result2.errorHandled = true;
      } else if (utils_isPromise(_result2)) {
        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
          if (_result2.resolved) {
            promise.resolve(_result2.value);
          } else {
            promise.reject(_result2.error);
          }
        } else {
          // $FlowFixMe
          chain(_result2, promise);
        }
      } else {
        promise.resolve(_result2);
      }
    }

    handlers.length = 0;
    this.dispatching = false;
    endActive();
  };

  _proto.then = function then(onSuccess, onError) {
    if (onSuccess && typeof onSuccess !== 'function' && !onSuccess.call) {
      throw new Error('Promise.then expected a function for success handler');
    }

    if (onError && typeof onError !== 'function' && !onError.call) {
      throw new Error('Promise.then expected a function for error handler');
    }

    var promise = new ZalgoPromise();
    this.handlers.push({
      promise: promise,
      onSuccess: onSuccess,
      onError: onError
    });
    this.errorHandled = true;
    this.dispatch();
    return promise;
  };

  _proto.catch = function _catch(onError) {
    return this.then(undefined, onError);
  };

  _proto.finally = function _finally(onFinally) {
    if (onFinally && typeof onFinally !== 'function' && !onFinally.call) {
      throw new Error('Promise.finally expected a function');
    }

    return this.then(function (result) {
      return ZalgoPromise.try(onFinally).then(function () {
        return result;
      });
    }, function (err) {
      return ZalgoPromise.try(onFinally).then(function () {
        throw err;
      });
    });
  };

  _proto.timeout = function timeout(time, err) {
    var _this3 = this;

    if (this.resolved || this.rejected) {
      return this;
    }

    var timeout = setTimeout(function () {
      if (_this3.resolved || _this3.rejected) {
        return;
      }

      _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
    }, time);
    return this.then(function (result) {
      clearTimeout(timeout);
      return result;
    });
  } // $FlowFixMe
  ;

  _proto.toPromise = function toPromise() {
    // $FlowFixMe
    if (typeof Promise === 'undefined') {
      throw new TypeError("Could not find Promise");
    } // $FlowFixMe


    return Promise.resolve(this); // eslint-disable-line compat/compat
  };

  ZalgoPromise.resolve = function resolve(value) {
    if (value instanceof ZalgoPromise) {
      return value;
    }

    if (utils_isPromise(value)) {
      // $FlowFixMe
      return new ZalgoPromise(function (resolve, reject) {
        return value.then(resolve, reject);
      });
    }

    return new ZalgoPromise().resolve(value);
  };

  ZalgoPromise.reject = function reject(error) {
    return new ZalgoPromise().reject(error);
  };

  ZalgoPromise.asyncReject = function asyncReject(error) {
    return new ZalgoPromise().asyncReject(error);
  };

  ZalgoPromise.all = function all(promises) {
    // eslint-disable-line no-undef
    var promise = new ZalgoPromise();
    var count = promises.length;
    var results = [];

    if (!count) {
      promise.resolve(results);
      return promise;
    }

    var chain = function chain(i, firstPromise, secondPromise) {
      return firstPromise.then(function (res) {
        results[i] = res;
        count -= 1;

        if (count === 0) {
          promise.resolve(results);
        }
      }, function (err) {
        secondPromise.reject(err);
      });
    };

    for (var i = 0; i < promises.length; i++) {
      var prom = promises[i];

      if (prom instanceof ZalgoPromise) {
        if (prom.resolved) {
          results[i] = prom.value;
          count -= 1;
          continue;
        }
      } else if (!utils_isPromise(prom)) {
        results[i] = prom;
        count -= 1;
        continue;
      }

      chain(i, ZalgoPromise.resolve(prom), promise);
    }

    if (count === 0) {
      promise.resolve(results);
    }

    return promise;
  };

  ZalgoPromise.hash = function hash(promises) {
    // eslint-disable-line no-undef
    var result = {};
    return ZalgoPromise.all(Object.keys(promises).map(function (key) {
      return ZalgoPromise.resolve(promises[key]).then(function (value) {
        result[key] = value;
      });
    })).then(function () {
      return result;
    });
  };

  ZalgoPromise.map = function map(items, method) {
    // $FlowFixMe
    return ZalgoPromise.all(items.map(method));
  };

  ZalgoPromise.onPossiblyUnhandledException = function onPossiblyUnhandledException(handler) {
    return exceptions_onPossiblyUnhandledException(handler);
  };

  ZalgoPromise.try = function _try(method, context, args) {
    if (method && typeof method !== 'function' && !method.call) {
      throw new Error('Promise.try expected a function');
    }

    var result;
    startActive();

    try {
      // $FlowFixMe
      result = method.apply(context, args || []);
    } catch (err) {
      endActive();
      return ZalgoPromise.reject(err);
    }

    endActive();
    return ZalgoPromise.resolve(result);
  };

  ZalgoPromise.delay = function delay(_delay) {
    return new ZalgoPromise(function (resolve) {
      setTimeout(resolve, _delay);
    });
  };

  ZalgoPromise.isPromise = function isPromise(value) {
    if (value && value instanceof ZalgoPromise) {
      return true;
    }

    return utils_isPromise(value);
  };

  ZalgoPromise.flush = function flush() {
    return awaitActive(ZalgoPromise);
  };

  return ZalgoPromise;
}();
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/index.js

// CONCATENATED MODULE: ./node_modules/belter/src/device.js
function device_getUserAgent() {
  return window.navigator.mockUserAgent || window.navigator.userAgent;
}
function isDevice(userAgent) {
  if (userAgent === void 0) {
    userAgent = device_getUserAgent();
  }

  if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)) {
    return true;
  }

  return false;
}
function isWebView() {
  var userAgent = device_getUserAgent();
  return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
}
function isStandAlone() {
  return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
}
function isFacebookWebView(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return ua.indexOf('FBAN') !== -1 || ua.indexOf('FBAV') !== -1;
}
function isFirefoxIOS(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return /FxiOS/i.test(ua);
}
function isEdgeIOS(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return /EdgiOS/i.test(ua);
}
function isOperaMini(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return ua.indexOf('Opera Mini') > -1;
}
function isAndroid(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return /Android/.test(ua);
}
function isIos(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return /iPhone|iPod|iPad/.test(ua);
}
function isGoogleSearchApp(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return /\bGSA\b/.test(ua);
}
function isQQBrowser(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return /QQBrowser/.test(ua);
}
function isIosWebview(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  if (isIos(ua)) {
    if (isGoogleSearchApp(ua)) {
      return true;
    }

    return /.+AppleWebKit(?!.*Safari)/.test(ua);
  }

  return false;
}
function isAndroidWebview(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  if (isAndroid(ua)) {
    return /Version\/[\d.]+/.test(ua) && !isOperaMini(ua);
  }

  return false;
}
function device_isIE() {
  if (window.document.documentMode) {
    return true;
  }

  return Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE|rv:11/i.test(window.navigator.userAgent));
}
function isIECompHeader() {
  var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]');
  var mContent = window.document.querySelector('meta[content="IE=edge"]');

  if (mHttp && mContent) {
    return true;
  }

  return false;
}
function isElectron() {
  if (typeof process !== 'undefined' && process.versions && process.versions.electron) {
    return true;
  }

  return false;
}
function isIEIntranet() {
  // This status check only works for older versions of IE with document.documentMode set
  if (window.document.documentMode) {
    try {
      var status = window.status;
      window.status = 'testIntranetMode';

      if (window.status === 'testIntranetMode') {
        window.status = status;
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  return false;
}
function isMacOsCna() {
  var userAgent = device_getUserAgent();
  return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent);
}
function supportsPopups(ua) {
  if (ua === void 0) {
    ua = device_getUserAgent();
  }

  return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/native.js
function hasNativeWeakMap() {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  if (typeof Object.freeze === 'undefined') {
    return false;
  }

  try {
    var testWeakMap = new WeakMap();
    var testKey = {};
    var testValue = '__testvalue__';
    Object.freeze(testKey);
    testWeakMap.set(testKey, testValue);

    if (testWeakMap.get(testKey) === testValue) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/util.js
function util_safeIndexOf(collection, item) {
  for (var i = 0; i < collection.length; i++) {
    try {
      if (collection[i] === item) {
        return i;
      }
    } catch (err) {// pass
    }
  }

  return -1;
} // eslint-disable-next-line no-unused-vars

function util_noop() {// pass
}
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/weakmap.js



var weakmap_CrossDomainSafeWeakMap =
/*#__PURE__*/
function () {
  function CrossDomainSafeWeakMap() {
    this.name = void 0;
    this.weakmap = void 0;
    this.keys = void 0;
    this.values = void 0;
    // eslint-disable-next-line no-bitwise
    this.name = "__weakmap_" + (Math.random() * 1e9 >>> 0) + "__";

    if (hasNativeWeakMap()) {
      try {
        this.weakmap = new WeakMap();
      } catch (err) {// pass
      }
    }

    this.keys = [];
    this.values = [];
  }

  var _proto = CrossDomainSafeWeakMap.prototype;

  _proto._cleanupClosedWindows = function _cleanupClosedWindows() {
    var weakmap = this.weakmap;
    var keys = this.keys;

    for (var i = 0; i < keys.length; i++) {
      var value = keys[i];

      if (isWindow(value) && isWindowClosed(value)) {
        if (weakmap) {
          try {
            weakmap.delete(value);
          } catch (err) {// pass
          }
        }

        keys.splice(i, 1);
        this.values.splice(i, 1);
        i -= 1;
      }
    }
  };

  _proto.isSafeToReadWrite = function isSafeToReadWrite(key) {
    if (isWindow(key)) {
      return false;
    }

    try {
      util_noop(key && key.self);
      util_noop(key && key[this.name]);
    } catch (err) {
      return false;
    }

    return true;
  };

  _proto.set = function set(key, value) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        weakmap.set(key, value);
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var name = this.name;
        var entry = key[name];

        if (entry && entry[0] === key) {
          entry[1] = value;
        } else {
          Object.defineProperty(key, name, {
            value: [key, value],
            writable: true
          });
        }

        return;
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var keys = this.keys;
    var values = this.values;
    var index = util_safeIndexOf(keys, key);

    if (index === -1) {
      keys.push(key);
      values.push(value);
    } else {
      values[index] = value;
    }
  };

  _proto.get = function get(key) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        if (weakmap.has(key)) {
          return weakmap.get(key);
        }
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var entry = key[this.name];

        if (entry && entry[0] === key) {
          return entry[1];
        }

        return;
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var keys = this.keys;
    var index = util_safeIndexOf(keys, key);

    if (index === -1) {
      return;
    }

    return this.values[index];
  };

  _proto.delete = function _delete(key) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        weakmap.delete(key);
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var entry = key[this.name];

        if (entry && entry[0] === key) {
          entry[0] = entry[1] = undefined;
        }
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var keys = this.keys;
    var index = util_safeIndexOf(keys, key);

    if (index !== -1) {
      keys.splice(index, 1);
      this.values.splice(index, 1);
    }
  };

  _proto.has = function has(key) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        if (weakmap.has(key)) {
          return true;
        }
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var entry = key[this.name];

        if (entry && entry[0] === key) {
          return true;
        }

        return false;
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var index = util_safeIndexOf(this.keys, key);
    return index !== -1;
  };

  _proto.getOrSet = function getOrSet(key, getter) {
    if (this.has(key)) {
      // $FlowFixMe
      return this.get(key);
    }

    var value = getter();
    this.set(key, value);
    return value;
  };

  return CrossDomainSafeWeakMap;
}();
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/index.js

// CONCATENATED MODULE: ./node_modules/belter/src/util.js
/* eslint max-lines: 0 */


function getFunctionName(fn) {
  return fn.name || fn.__name__ || fn.displayName || 'anonymous';
}
function setFunctionName(fn, name) {
  try {
    delete fn.name;
    fn.name = name;
  } catch (err) {// pass
  }

  fn.__name__ = fn.displayName = name;
  return fn;
}
function base64encode(str) {
  if (typeof btoa === 'function') {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (m, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  }

  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'utf8').toString('base64');
  }

  throw new Error("Can not find window.btoa or Buffer");
}
function base64decode(str) {
  if (typeof atob === 'function') {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
      // eslint-disable-next-line prefer-template
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'base64').toString('utf8');
  }

  throw new Error("Can not find window.atob or Buffer");
}
function uniqueID() {
  var chars = '0123456789abcdef';
  var randomID = 'xxxxxxxxxx'.replace(/./g, function () {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  });
  var timeID = base64encode(new Date().toISOString().slice(11, 19).replace('T', '.')).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return randomID + "_" + timeID;
}
function getGlobal() {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error("No global found");
}
var objectIDs;
function getObjectID(obj) {
  objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap();

  if (obj === null || obj === undefined || typeof obj !== 'object' && typeof obj !== 'function') {
    throw new Error("Invalid object");
  }

  var uid = objectIDs.get(obj);

  if (!uid) {
    uid = typeof obj + ":" + uniqueID();
    objectIDs.set(obj, uid);
  }

  return uid;
}

function serializeArgs(args) {
  try {
    return JSON.stringify(Array.prototype.slice.call(args), function (subkey, val) {
      if (typeof val === 'function') {
        return "memoize[" + getObjectID(val) + "]";
      }

      return val;
    });
  } catch (err) {
    throw new Error("Arguments not serializable -- can not be used to memoize");
  }
}

function memoize(method, options) {
  var _this = this;

  if (options === void 0) {
    options = {};
  }

  var cacheMap = new weakmap_CrossDomainSafeWeakMap(); // $FlowFixMe

  var memoizedFunction = function memoizedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var cache = cacheMap.getOrSet(options.thisNamespace ? this : method, function () {
      return {};
    });
    var key = serializeArgs(args);
    var cacheTime = options.time;

    if (cache[key] && cacheTime && Date.now() - cache[key].time < cacheTime) {
      delete cache[key];
    }

    if (cache[key]) {
      return cache[key].value;
    }

    var time = Date.now();
    var value = method.apply(this, arguments);
    cache[key] = {
      time: time,
      value: value
    };
    return cache[key].value;
  };

  memoizedFunction.reset = function () {
    cacheMap.delete(options.thisNamespace ? _this : method);
  };

  return setFunctionName(memoizedFunction, getFunctionName(method) + "::memoized");
}
function promiseIdentity(item) {
  // $FlowFixMe
  return promise_ZalgoPromise.resolve(item);
} // eslint-disable-next-line flowtype/no-weak-types

function memoizePromise(method) {
  var cache = {}; // eslint-disable-next-line flowtype/no-weak-types

  function memoizedPromiseFunction() {
    var _this2 = this,
        _arguments = arguments;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var key = serializeArgs(args);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    cache[key] = promise_ZalgoPromise.try(function () {
      return method.apply(_this2, _arguments);
    }).finally(function () {
      delete cache[key];
    });
    return cache[key];
  }

  memoizedPromiseFunction.reset = function () {
    cache = {};
  };

  return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
} // eslint-disable-next-line flowtype/no-weak-types

function promisify(method, options) {
  if (options === void 0) {
    options = {};
  }

  function promisifiedFunction() {
    return promise_ZalgoPromise.try(method, this, arguments);
  }

  if (options.name) {
    promisifiedFunction.displayName = options.name + ":promisified";
  }

  return setFunctionName(promisifiedFunction, getFunctionName(method) + "::promisified");
} // eslint-disable-next-line flowtype/no-weak-types

function inlineMemoize(method, logic, args) {
  if (args === void 0) {
    args = [];
  }

  // $FlowFixMe
  var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
  var key = serializeArgs(args);

  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  var result = cache[key] = logic.apply(void 0, args);
  return result;
} // eslint-disable-next-line no-unused-vars

function src_util_noop() {// pass
}
function once(method) {
  var called = false;

  var onceFunction = function onceFunction() {
    if (!called) {
      called = true;
      return method.apply(this, arguments);
    }
  };

  return setFunctionName(onceFunction, getFunctionName(method) + "::once");
}
function hashStr(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
  }

  return Math.floor(Math.pow(Math.sqrt(hash), 5));
}
function strHashStr(str) {
  var hash = '';

  for (var i = 0; i < str.length; i++) {
    var total = str[i].charCodeAt(0) * i;

    if (str[i + 1]) {
      total += str[i + 1].charCodeAt(0) * (i - 1);
    }

    hash += String.fromCharCode(97 + Math.abs(total) % 26);
  }

  return hash;
}
function util_match(str, pattern) {
  var regmatch = str.match(pattern);

  if (regmatch) {
    return regmatch[1];
  }
}
function awaitKey(obj, key) {
  return new promise_ZalgoPromise(function (resolve) {
    var value = obj[key];

    if (value) {
      return resolve(value);
    }

    delete obj[key];
    Object.defineProperty(obj, key, {
      configurable: true,
      set: function set(item) {
        value = item;

        if (value) {
          resolve(value);
        }
      },
      get: function get() {
        return value;
      }
    });
  });
}
function stringifyError(err, level) {
  if (level === void 0) {
    level = 1;
  }

  if (level >= 3) {
    return 'stringifyError stack overflow';
  }

  try {
    if (!err) {
      return "<unknown error: " + Object.prototype.toString.call(err) + ">";
    }

    if (typeof err === 'string') {
      return err;
    }

    if (err instanceof Error) {
      var stack = err && err.stack;
      var message = err && err.message;

      if (stack && message) {
        if (stack.indexOf(message) !== -1) {
          return stack;
        } else {
          return message + "\n" + stack;
        }
      } else if (stack) {
        return stack;
      } else if (message) {
        return message;
      }
    }

    if (err && err.toString && typeof err.toString === 'function') {
      // $FlowFixMe
      return err.toString();
    }

    return Object.prototype.toString.call(err);
  } catch (newErr) {
    // eslint-disable-line unicorn/catch-error-name
    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
  }
}
function stringifyErrorMessage(err) {
  var defaultMessage = "<unknown error: " + Object.prototype.toString.call(err) + ">";

  if (!err) {
    return defaultMessage;
  }

  if (err instanceof Error) {
    return err.message || defaultMessage;
  }

  if (typeof err.message === 'string') {
    return err.message || defaultMessage;
  }

  return defaultMessage;
}
function stringify(item) {
  if (typeof item === 'string') {
    return item;
  }

  if (item && item.toString && typeof item.toString === 'function') {
    // $FlowFixMe
    return item.toString();
  }

  return Object.prototype.toString.call(item);
}
function domainMatches(hostname, domain) {
  hostname = hostname.split('://')[1];
  var index = hostname.indexOf(domain);
  return index !== -1 && hostname.slice(index) === domain;
}
function patchMethod(obj, name, handler) {
  var original = obj[name];

  obj[name] = function patchedMethod() {
    var _this3 = this,
        _arguments2 = arguments;

    return handler({
      context: this,
      args: Array.prototype.slice.call(arguments),
      original: original,
      callOriginal: function callOriginal() {
        return original.apply(_this3, _arguments2);
      }
    });
  };
}
function extend(obj, source) {
  if (!source) {
    return obj;
  }

  if (Object.assign) {
    return Object.assign(obj, source);
  }

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      obj[key] = source[key];
    }
  }

  return obj;
}
function util_values(obj) {
  var result = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }

  return result;
}
function perc(pixels, percentage) {
  return Math.round(pixels * percentage / 100);
}
function min() {
  return Math.min.apply(Math, arguments);
}
function max() {
  return Math.max.apply(Math, arguments);
}
function regexMap(str, regexp, handler) {
  var results = []; // $FlowFixMe

  str.replace(regexp, function regexMapMatcher(item) {
    results.push(handler ? handler.apply(null, arguments) : item);
  }); // $FlowFixMe

  return results;
}
function svgToBase64(svg) {
  return "data:image/svg+xml;base64," + base64encode(svg);
}
function objFilter(obj, filter) {
  if (filter === void 0) {
    filter = Boolean;
  }

  var result = {};

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || !filter(obj[key], key)) {
      continue;
    }

    result[key] = obj[key];
  }

  return result;
}
function identity(item) {
  return item;
}
function regexTokenize(text, regexp) {
  var result = [];
  text.replace(regexp, function (token) {
    result.push(token);
    return '';
  });
  return result;
}
function promiseDebounce(method, delay) {
  if (delay === void 0) {
    delay = 50;
  }

  var promise;
  var timeout;

  var promiseDebounced = function promiseDebounced() {
    if (timeout) {
      clearTimeout(timeout);
    }

    var localPromise = promise = promise || new promise_ZalgoPromise();
    timeout = setTimeout(function () {
      promise = null;
      timeout = null;
      promise_ZalgoPromise.try(method).then(function (result) {
        localPromise.resolve(result);
      }, function (err) {
        localPromise.reject(err);
      });
    }, delay);
    return localPromise;
  };

  return setFunctionName(promiseDebounced, getFunctionName(method) + "::promiseDebounced");
}
function safeInterval(method, time) {
  var timeout;

  function loop() {
    timeout = setTimeout(function () {
      method();
      loop();
    }, time);
  }

  loop();
  return {
    cancel: function cancel() {
      clearTimeout(timeout);
    }
  };
}
function isInteger(str) {
  return Boolean(str.match(/^[0-9]+$/));
}
function isFloat(str) {
  return Boolean(str.match(/^[0-9]+\.[0-9]+$/));
}
function serializePrimitive(value) {
  return value.toString();
}
function deserializePrimitive(value) {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else if (isInteger(value)) {
    return parseInt(value, 10);
  } else if (isFloat(value)) {
    return parseFloat(value);
  } else {
    return value;
  }
}
function dotify(obj, prefix, newobj) {
  if (prefix === void 0) {
    prefix = '';
  }

  if (newobj === void 0) {
    newobj = {};
  }

  prefix = prefix ? prefix + "." : prefix;

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || obj[key] === undefined || obj[key] === null || typeof obj[key] === 'function') {
      continue;
    } else if (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every(function (val) {
      return typeof val !== 'object';
    })) {
      newobj["" + prefix + key + "[]"] = obj[key].join(',');
    } else if (obj[key] && typeof obj[key] === 'object') {
      newobj = dotify(obj[key], "" + prefix + key, newobj);
    } else {
      newobj["" + prefix + key] = serializePrimitive(obj[key]);
    }
  }

  return newobj;
}
function undotify(obj) {
  var result = {};

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || typeof obj[key] !== 'string') {
      continue;
    }

    var value = obj[key];

    if (key.match(/^.+\[\]$/)) {
      key = key.slice(0, key.length - 2);
      value = value.split(',').map(deserializePrimitive);
    } else {
      value = deserializePrimitive(value);
    }

    var keyResult = result;
    var parts = key.split('.');

    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      var isLast = i + 1 === parts.length;
      var isIndex = !isLast && isInteger(parts[i + 1]);

      if (part === 'constructor' || part === 'prototype' || part === '__proto__') {
        throw new Error("Disallowed key: " + part);
      }

      if (isLast) {
        // $FlowFixMe
        keyResult[part] = value;
      } else {
        // $FlowFixMe
        keyResult = keyResult[part] = keyResult[part] || (isIndex ? [] : {});
      }
    }
  }

  return result;
}
function eventEmitter() {
  var triggered = {};
  var handlers = {};
  return {
    on: function on(eventName, handler) {
      var handlerList = handlers[eventName] = handlers[eventName] || [];
      handlerList.push(handler);
      var cancelled = false;
      return {
        cancel: function cancel() {
          if (!cancelled) {
            cancelled = true;
            handlerList.splice(handlerList.indexOf(handler), 1);
          }
        }
      };
    },
    once: function once(eventName, handler) {
      var listener = this.on(eventName, function () {
        listener.cancel();
        handler();
      });
      return listener;
    },
    trigger: function trigger(eventName) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var handlerList = handlers[eventName];
      var promises = [];

      if (handlerList) {
        var _loop = function _loop(_i2) {
          var handler = handlerList[_i2];
          promises.push(promise_ZalgoPromise.try(function () {
            return handler.apply(void 0, args);
          }));
        };

        for (var _i2 = 0; _i2 < handlerList.length; _i2++) {
          _loop(_i2);
        }
      }

      return promise_ZalgoPromise.all(promises).then(src_util_noop);
    },
    triggerOnce: function triggerOnce(eventName) {
      if (triggered[eventName]) {
        return promise_ZalgoPromise.resolve();
      }

      triggered[eventName] = true;

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return this.trigger.apply(this, [eventName].concat(args));
    }
  };
}
function camelToDasherize(string) {
  return string.replace(/([A-Z])/g, function (g) {
    return "-" + g.toLowerCase();
  });
}
function dasherizeToCamel(string) {
  return string.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function util_get(item, path, def) {
  if (!path) {
    return def;
  }

  var pathParts = path.split('.'); // Loop through each section of our key path

  for (var i = 0; i < pathParts.length; i++) {
    // If we have an object, we can get the key
    if (typeof item === 'object' && item !== null) {
      item = item[pathParts[i]]; // Otherwise, we should return the default (undefined if not provided)
    } else {
      return def;
    }
  } // If our final result is undefined, we should return the default


  return item === undefined ? def : item;
}
function safeTimeout(method, time) {
  var interval = safeInterval(function () {
    time -= 100;

    if (time <= 0) {
      interval.cancel();
      method();
    }
  }, 100);
}
function defineLazyProp(obj, key, getter) {
  if (Array.isArray(obj)) {
    if (typeof key !== 'number') {
      throw new TypeError("Array key must be number");
    }
  } else if (typeof obj === 'object' && obj !== null) {
    if (typeof key !== 'string') {
      throw new TypeError("Object key must be string");
    }
  }

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function get() {
      // $FlowFixMe
      delete obj[key];
      var value = getter(); // $FlowFixMe

      obj[key] = value;
      return value;
    },
    set: function set(value) {
      // $FlowFixMe
      delete obj[key]; // $FlowFixMe

      obj[key] = value;
    }
  });
}
function arrayFrom(item) {
  // eslint-disable-line no-undef
  return Array.prototype.slice.call(item);
}
function isObject(item) {
  return typeof item === 'object' && item !== null;
}
function isObjectObject(obj) {
  return isObject(obj) && Object.prototype.toString.call(obj) === '[object Object]';
}
function isPlainObject(obj) {
  if (!isObjectObject(obj)) {
    return false;
  } // $FlowFixMe


  var constructor = obj.constructor;

  if (typeof constructor !== 'function') {
    return false;
  }

  var prototype = constructor.prototype;

  if (!isObjectObject(prototype)) {
    return false;
  }

  if (!prototype.hasOwnProperty('isPrototypeOf')) {
    return false;
  }

  return true;
}
function replaceObject(item, replacer, fullKey) {
  if (fullKey === void 0) {
    fullKey = '';
  }

  if (Array.isArray(item)) {
    var length = item.length;
    var result = [];

    var _loop2 = function _loop2(i) {
      defineLazyProp(result, i, function () {
        var itemKey = fullKey ? fullKey + "." + i : "" + i;
        var el = item[i];
        var child = replacer(el, i, itemKey);

        if (isPlainObject(child) || Array.isArray(child)) {
          // $FlowFixMe
          child = replaceObject(child, replacer, itemKey);
        }

        return child;
      });
    };

    for (var i = 0; i < length; i++) {
      _loop2(i);
    } // $FlowFixMe


    return result;
  } else if (isPlainObject(item)) {
    var _result = {};

    var _loop3 = function _loop3(key) {
      if (!item.hasOwnProperty(key)) {
        return "continue";
      }

      defineLazyProp(_result, key, function () {
        var itemKey = fullKey ? fullKey + "." + key : "" + key; // $FlowFixMe

        var el = item[key];
        var child = replacer(el, key, itemKey);

        if (isPlainObject(child) || Array.isArray(child)) {
          // $FlowFixMe
          child = replaceObject(child, replacer, itemKey);
        }

        return child;
      });
    };

    for (var key in item) {
      var _ret = _loop3(key);

      if (_ret === "continue") continue;
    } // $FlowFixMe


    return _result;
  } else {
    throw new Error("Pass an object or array");
  }
}
function copyProp(source, target, name, def) {
  if (source.hasOwnProperty(name)) {
    var descriptor = Object.getOwnPropertyDescriptor(source, name); // $FlowFixMe

    Object.defineProperty(target, name, descriptor);
  } else {
    target[name] = def;
  }
}
function util_regex(pattern, string, start) {
  if (start === void 0) {
    start = 0;
  }

  if (typeof pattern === 'string') {
    // eslint-disable-next-line security/detect-non-literal-regexp
    pattern = new RegExp(pattern);
  }

  var result = string.slice(start).match(pattern);

  if (!result) {
    return;
  } // $FlowFixMe


  var index = result.index;
  var regmatch = result[0];
  return {
    text: regmatch,
    groups: result.slice(1),
    start: start + index,
    end: start + index + regmatch.length,
    length: regmatch.length,
    replace: function replace(text) {
      if (!regmatch) {
        return '';
      }

      return "" + regmatch.slice(0, start + index) + text + regmatch.slice(index + regmatch.length);
    }
  };
}
function regexAll(pattern, string) {
  var matches = [];
  var start = 0; // eslint-disable-next-line no-constant-condition

  while (true) {
    var regmatch = util_regex(pattern, string, start);

    if (!regmatch) {
      break;
    }

    matches.push(regmatch);
    start = util_match.end;
  }

  return matches;
}
function isDefined(value) {
  return value !== null && value !== undefined;
}
function cycle(method) {
  return promise_ZalgoPromise.try(method).then(function () {
    return cycle(method);
  });
}
function debounce(method, time) {
  if (time === void 0) {
    time = 100;
  }

  var timeout;

  var debounceWrapper = function debounceWrapper() {
    var _this4 = this,
        _arguments3 = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return method.apply(_this4, _arguments3);
    }, time);
  };

  return setFunctionName(debounceWrapper, getFunctionName(method) + "::debounced");
}
function util_isRegex(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
}
// eslint-disable-next-line flowtype/no-weak-types
var util_weakMapMemoize = function weakMapMemoize(method) {
  var weakmap = new weakmap_CrossDomainSafeWeakMap(); // eslint-disable-next-line flowtype/no-weak-types

  return function weakmapMemoized(arg) {
    var _this5 = this;

    return weakmap.getOrSet(arg, function () {
      return method.call(_this5, arg);
    });
  };
};
// eslint-disable-next-line flowtype/no-weak-types
var util_weakMapMemoizePromise = function weakMapMemoizePromise(method) {
  var weakmap = new weakmap_CrossDomainSafeWeakMap(); // eslint-disable-next-line flowtype/no-weak-types

  return function weakmapMemoizedPromise(arg) {
    var _this6 = this;

    return weakmap.getOrSet(arg, function () {
      return method.call(_this6, arg).finally(function () {
        weakmap.delete(arg);
      });
    });
  };
};
function util_getOrSet(obj, key, getter) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  var val = getter();
  obj[key] = val;
  return val;
}
function cleanup(obj) {
  var tasks = [];
  var cleaned = false;
  return {
    set: function set(name, item) {
      if (!cleaned) {
        obj[name] = item;
        this.register(function () {
          delete obj[name];
        });
      }

      return item;
    },
    register: function register(method) {
      if (cleaned) {
        method();
      } else {
        tasks.push(once(method));
      }
    },
    all: function all() {
      var results = [];
      cleaned = true;

      while (tasks.length) {
        var task = tasks.pop();
        results.push(task());
      }

      return promise_ZalgoPromise.all(results).then(src_util_noop);
    }
  };
}
function tryCatch(fn) {
  var result;
  var error;

  try {
    result = fn();
  } catch (err) {
    error = err;
  } // $FlowFixMe


  return {
    result: result,
    error: error
  };
}
function removeFromArray(arr, item) {
  var index = arr.indexOf(item);

  if (index !== -1) {
    arr.splice(index, 1);
  }
}
function assertExists(name, thing) {
  if (thing === null || typeof thing === 'undefined') {
    throw new Error("Expected " + name + " to be present");
  }

  return thing;
}
function unique(arr) {
  var result = {};

  for (var _i4 = 0; _i4 < arr.length; _i4++) {
    var item = arr[_i4];
    // eslint-disable-next-line const-immutable/no-mutation
    result[item] = true;
  }

  return Object.keys(result);
}
// CONCATENATED MODULE: ./node_modules/belter/src/constants.js
var KEY_CODES = {
  ENTER: 13
};
// CONCATENATED MODULE: ./node_modules/belter/src/dom.js


/* eslint max-lines: off */






function isDocumentReady() {
  return Boolean(document.body) && document.readyState === 'complete';
}
function urlEncode(str) {
  return str.replace(/\?/g, '%3F').replace(/&/g, '%26').replace(/#/g, '%23').replace(/\+/g, '%2B');
}
function waitForWindowReady() {
  return inlineMemoize(waitForWindowReady, function () {
    return new promise_ZalgoPromise(function (resolve) {
      if (isDocumentReady()) {
        resolve();
      }

      window.addEventListener('load', function () {
        return resolve();
      });
    });
  });
}
function waitForDocumentReady() {
  return inlineMemoize(waitForDocumentReady, function () {
    return new promise_ZalgoPromise(function (resolve) {
      if (isDocumentReady()) {
        return resolve();
      }

      var interval = setInterval(function () {
        if (isDocumentReady()) {
          clearInterval(interval);
          return resolve();
        }
      }, 10);
    });
  });
}
function waitForDocumentBody() {
  return waitForDocumentReady().then(function () {
    if (document.body) {
      return document.body;
    }

    throw new Error('Document ready but document.body not present');
  });
}
function parseQuery(queryString) {
  return inlineMemoize(parseQuery, function () {
    var params = {};

    if (!queryString) {
      return params;
    }

    if (queryString.indexOf('=') === -1) {
      return params;
    }

    for (var _i2 = 0, _queryString$split2 = queryString.split('&'); _i2 < _queryString$split2.length; _i2++) {
      var pair = _queryString$split2[_i2];
      pair = pair.split('=');

      if (pair[0] && pair[1]) {
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
    }

    return params;
  }, [queryString]);
}
function getQueryParam(name) {
  return parseQuery(window.location.search.slice(1))[name];
}
function urlWillRedirectPage(url) {
  if (url.indexOf('#') === -1) {
    return true;
  }

  if (url.indexOf('#') === 0) {
    return false;
  }

  if (url.split('#')[0] === window.location.href.split('#')[0]) {
    return false;
  }

  return true;
}
function formatQuery(obj) {
  if (obj === void 0) {
    obj = {};
  }

  return Object.keys(obj).filter(function (key) {
    return typeof obj[key] === 'string';
  }).map(function (key) {
    return urlEncode(key) + "=" + urlEncode(obj[key]);
  }).join('&');
}
function extendQuery(originalQuery, props) {
  if (props === void 0) {
    props = {};
  }

  if (!props || !Object.keys(props).length) {
    return originalQuery;
  }

  return formatQuery(_extends({}, parseQuery(originalQuery), {}, props));
}
function extendUrl(url, options) {
  if (options === void 0) {
    options = {};
  }

  var query = options.query || {};
  var hash = options.hash || {};
  var originalUrl;
  var originalQuery;
  var originalHash;

  var _url$split = url.split('#');

  originalUrl = _url$split[0];
  originalHash = _url$split[1];

  var _originalUrl$split = originalUrl.split('?');

  originalUrl = _originalUrl$split[0];
  originalQuery = _originalUrl$split[1];
  var queryString = extendQuery(originalQuery, query);
  var hashString = extendQuery(originalHash, hash);

  if (queryString) {
    originalUrl = originalUrl + "?" + queryString;
  }

  if (hashString) {
    originalUrl = originalUrl + "#" + hashString;
  }

  return originalUrl;
}
function redirect(url, win) {
  if (win === void 0) {
    win = window;
  }

  return new promise_ZalgoPromise(function (resolve) {
    win.location = url;

    if (!urlWillRedirectPage(url)) {
      resolve();
    }
  });
}
function hasMetaViewPort() {
  var meta = document.querySelector('meta[name=viewport]');

  if (isDevice() && window.screen.width < 660 && !meta) {
    return false;
  }

  return true;
}
function isElementVisible(el) {
  return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}
function enablePerformance() {
  return inlineMemoize(enablePerformance, function () {
    /* eslint-disable compat/compat */
    return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1000 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0);
    /* eslint-enable compat/compat */
  });
}
function getPageRenderTime() {
  return waitForDocumentReady().then(function () {
    if (!enablePerformance()) {
      return;
    }

    var timing = window.performance.timing;

    if (timing.connectEnd && timing.domInteractive) {
      return timing.domInteractive - timing.connectEnd;
    }
  });
}
function htmlEncode(html) {
  if (html === void 0) {
    html = '';
  }

  return html.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\//g, '&#x2F;');
}
function dom_isBrowser() {
  return typeof window !== 'undefined';
}
function querySelectorAll(selector, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  return Array.prototype.slice.call(doc.querySelectorAll(selector));
}
function onClick(element, handler) {
  element.addEventListener('touchstart', src_util_noop);
  element.addEventListener('click', handler);
  element.addEventListener('keypress', function (event) {
    // $FlowFixMe
    if (event.keyCode === KEY_CODES.ENTER) {
      return handler(event);
    }
  });
}
function getScript(_ref) {
  var _ref$host = _ref.host,
      host = _ref$host === void 0 ? window.location.host : _ref$host,
      path = _ref.path;
  return inlineMemoize(getScript, function () {
    var url = "" + host + path;
    var scripts = Array.prototype.slice.call(document.getElementsByTagName('script'));

    for (var _i4 = 0; _i4 < scripts.length; _i4++) {
      var script = scripts[_i4];

      if (!script.src) {
        continue;
      }

      var src = script.src.replace(/^https?:\/\//, '').split('?')[0];

      if (src === url) {
        return script;
      }
    }
  }, [path]);
}
function isLocalStorageEnabled() {
  return inlineMemoize(isLocalStorageEnabled, function () {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      if (window.localStorage) {
        var value = Math.random().toString();
        window.localStorage.setItem('__test__localStorage__', value);
        var result = window.localStorage.getItem('__test__localStorage__');
        window.localStorage.removeItem('__test__localStorage__');

        if (value === result) {
          return true;
        }
      }
    } catch (err) {// pass
    }

    return false;
  });
}
function getBrowserLocales() {
  var nav = window.navigator;
  var locales = nav.languages ? Array.prototype.slice.apply(nav.languages) : [];

  if (nav.language) {
    locales.push(nav.language);
  }

  if (nav.userLanguage) {
    locales.push(nav.userLanguage);
  }

  return locales.map(function (locale) {
    if (locale && locale.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
      var _locale$split = locale.split(/[-_]/),
          lang = _locale$split[0],
          country = _locale$split[1];

      return {
        country: country,
        lang: lang
      };
    }

    if (locale && locale.match(/^[a-z]{2}$/)) {
      return {
        lang: locale
      };
    }

    return null;
  }).filter(Boolean);
}
function appendChild(container, child) {
  container.appendChild(child);
}
function isElement(element) {
  if (element instanceof window.Element) {
    return true;
  }

  if (element !== null && typeof element === 'object' && element.nodeType === 1 && typeof element.style === 'object' && typeof element.ownerDocument === 'object') {
    return true;
  }

  return false;
}
function getElementSafe(id, doc) {
  if (doc === void 0) {
    doc = document;
  }

  if (isElement(id)) {
    // $FlowFixMe
    return id;
  }

  if (typeof id === 'string') {
    return doc.querySelector(id);
  }
}
function getElement(id, doc) {
  if (doc === void 0) {
    doc = document;
  }

  var element = getElementSafe(id, doc);

  if (element) {
    return element;
  }

  throw new Error("Can not find element: " + stringify(id));
}
function elementReady(id) {
  return new promise_ZalgoPromise(function (resolve, reject) {
    var name = stringify(id);
    var el = getElementSafe(id);

    if (el) {
      return resolve(el);
    }

    if (isDocumentReady()) {
      return reject(new Error("Document is ready and element " + name + " does not exist"));
    }

    var interval = setInterval(function () {
      el = getElementSafe(id);

      if (el) {
        clearInterval(interval);
        return resolve(el);
      }

      if (isDocumentReady()) {
        clearInterval(interval);
        return reject(new Error("Document is ready and element " + name + " does not exist"));
      }
    }, 10);
  });
}
function PopupOpenError(message) {
  this.message = message;
}
PopupOpenError.prototype = Object.create(Error.prototype);
function popup(url, options) {
  // $FlowFixMe
  options = options || {};
  var _options = options,
      width = _options.width,
      height = _options.height;
  var top = 0;
  var left = 0;

  if (width) {
    if (window.outerWidth) {
      left = Math.round((window.outerWidth - width) / 2) + window.screenX;
    } else if (window.screen.width) {
      left = Math.round((window.screen.width - width) / 2);
    }
  }

  if (height) {
    if (window.outerHeight) {
      top = Math.round((window.outerHeight - height) / 2) + window.screenY;
    } else if (window.screen.height) {
      top = Math.round((window.screen.height - height) / 2);
    }
  }

  if (width && height) {
    options = _extends({
      top: top,
      left: left,
      width: width,
      height: height,
      status: 1,
      toolbar: 0,
      menubar: 0,
      resizable: 1,
      scrollbars: 1
    }, options);
  }

  var name = options.name || '';
  delete options.name; // eslint-disable-next-line array-callback-return

  var params = Object.keys(options).map(function (key) {
    // $FlowFixMe
    if (options[key] !== null && options[key] !== undefined) {
      return key + "=" + stringify(options[key]);
    }
  }).filter(Boolean).join(',');
  var win;

  try {
    win = window.open(url, name, params, true);
  } catch (err) {
    throw new PopupOpenError("Can not open popup window - " + (err.stack || err.message));
  }

  if (isWindowClosed(win)) {
    var err = new PopupOpenError("Can not open popup window - blocked");
    throw err;
  }

  window.addEventListener('unload', function () {
    return win.close();
  });
  return win;
}
function writeToWindow(win, html) {
  try {
    win.document.open();
    win.document.write(html);
    win.document.close();
  } catch (err) {
    try {
      win.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
    } catch (err2) {// pass
    }
  }
}
function writeElementToWindow(win, el) {
  var tag = el.tagName.toLowerCase();

  if (tag !== 'html') {
    throw new Error("Expected element to be html, got " + tag);
  }

  var documentElement = win.document.documentElement;

  for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) {
    var child = _arrayFrom2[_i6];
    documentElement.removeChild(child);
  }

  for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) {
    var _child = _arrayFrom4[_i8];
    documentElement.appendChild(_child);
  }
}
function setStyle(el, styleText, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  // $FlowFixMe
  if (el.styleSheet) {
    // $FlowFixMe
    el.styleSheet.cssText = styleText;
  } else {
    el.appendChild(doc.createTextNode(styleText));
  }
}
var awaitFrameLoadPromises;
function awaitFrameLoad(frame) {
  awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap();

  if (awaitFrameLoadPromises.has(frame)) {
    var _promise = awaitFrameLoadPromises.get(frame);

    if (_promise) {
      return _promise;
    }
  }

  var promise = new promise_ZalgoPromise(function (resolve, reject) {
    frame.addEventListener('load', function () {
      linkFrameWindow(frame);
      resolve(frame);
    });
    frame.addEventListener('error', function (err) {
      if (frame.contentWindow) {
        resolve(frame);
      } else {
        reject(err);
      }
    });
  });
  awaitFrameLoadPromises.set(frame, promise);
  return promise;
}
function awaitFrameWindow(frame) {
  return awaitFrameLoad(frame).then(function (loadedFrame) {
    if (!loadedFrame.contentWindow) {
      throw new Error("Could not find window in iframe");
    }

    return loadedFrame.contentWindow;
  });
}
function createElement(tag, options, container) {
  if (tag === void 0) {
    tag = 'div';
  }

  if (options === void 0) {
    options = {};
  }

  tag = tag.toLowerCase();
  var element = document.createElement(tag);

  if (options.style) {
    extend(element.style, options.style);
  }

  if (options.class) {
    element.className = options.class.join(' ');
  }

  if (options.id) {
    element.setAttribute('id', options.id);
  }

  if (options.attributes) {
    for (var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++) {
      var key = _Object$keys2[_i10];
      element.setAttribute(key, options.attributes[key]);
    }
  }

  if (options.styleSheet) {
    setStyle(element, options.styleSheet);
  }

  if (container) {
    appendChild(container, element);
  }

  if (options.html) {
    if (tag === 'iframe') {
      // $FlowFixMe
      if (!container || !element.contentWindow) {
        throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
      } // $FlowFixMe


      writeToWindow(element.contentWindow, options.html);
    } else {
      element.innerHTML = options.html;
    }
  }

  return element;
}
function dom_iframe(options, container) {
  if (options === void 0) {
    options = {};
  }

  var attributes = options.attributes || {};
  var style = options.style || {};
  var frame = createElement('iframe', {
    attributes: _extends({
      allowTransparency: 'true'
    }, attributes),
    style: _extends({
      backgroundColor: 'transparent',
      border: 'none'
    }, style),
    html: options.html,
    class: options.class
  });
  var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);

  if (!frame.hasAttribute('id')) {
    frame.setAttribute('id', uniqueID());
  } // $FlowFixMe


  awaitFrameLoad(frame);

  if (container) {
    var el = getElement(container);
    el.appendChild(frame);
  }

  if (options.url || isIE) {
    frame.setAttribute('src', options.url || 'about:blank');
  } // $FlowFixMe


  return frame;
}
function addEventListener(obj, event, handler) {
  obj.addEventListener(event, handler);
  return {
    cancel: function cancel() {
      obj.removeEventListener(event, handler);
    }
  };
}
function bindEvents(element, eventNames, handler) {
  handler = once(handler);

  for (var _i12 = 0; _i12 < eventNames.length; _i12++) {
    var eventName = eventNames[_i12];
    element.addEventListener(eventName, handler);
  }

  return {
    cancel: once(function () {
      for (var _i14 = 0; _i14 < eventNames.length; _i14++) {
        var _eventName = eventNames[_i14];
        element.removeEventListener(_eventName, handler);
      }
    })
  };
}
var VENDOR_PREFIXES = ['webkit', 'moz', 'ms', 'o'];
function setVendorCSS(element, name, value) {
  // $FlowFixMe
  element.style[name] = value;
  var capitalizedName = capitalizeFirstLetter(name);

  for (var _i16 = 0; _i16 < VENDOR_PREFIXES.length; _i16++) {
    var prefix = VENDOR_PREFIXES[_i16];
    // $FlowFixMe
    element.style["" + prefix + capitalizedName] = value;
  }
}
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart', 'oAnimationStart', 'MSAnimationStart'];
var ANIMATION_END_EVENTS = ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'];
function animate(element, name, clean, timeout) {
  if (timeout === void 0) {
    timeout = 1000;
  }

  return new promise_ZalgoPromise(function (resolve, reject) {
    var el = getElement(element);

    if (!el) {
      return resolve();
    }

    var hasStarted = false;
    var startTimeout;
    var endTimeout;
    var startEvent;
    var endEvent;

    function cleanUp() {
      clearTimeout(startTimeout);
      clearTimeout(endTimeout);
      startEvent.cancel();
      endEvent.cancel();
    }

    startEvent = bindEvents(el, ANIMATION_START_EVENTS, function (event) {
      // $FlowFixMe
      if (event.target !== el || event.animationName !== name) {
        return;
      }

      clearTimeout(startTimeout);
      event.stopPropagation();
      startEvent.cancel();
      hasStarted = true;
      endTimeout = setTimeout(function () {
        cleanUp();
        resolve();
      }, timeout);
    });
    endEvent = bindEvents(el, ANIMATION_END_EVENTS, function (event) {
      // $FlowFixMe
      if (event.target !== el || event.animationName !== name) {
        return;
      }

      cleanUp(); // $FlowFixMe

      if (typeof event.animationName === 'string' && event.animationName !== name) {
        return reject("Expected animation name to be " + name + ", found " + event.animationName);
      }

      return resolve();
    });
    setVendorCSS(el, 'animationName', name);
    startTimeout = setTimeout(function () {
      if (!hasStarted) {
        cleanUp();
        return resolve();
      }
    }, 200);

    if (clean) {
      clean(cleanUp);
    }
  });
}
var STYLE = {
  DISPLAY: {
    NONE: 'none',
    BLOCK: 'block'
  },
  VISIBILITY: {
    VISIBLE: 'visible',
    HIDDEN: 'hidden'
  },
  IMPORTANT: 'important'
};
function makeElementVisible(element) {
  element.style.setProperty('visibility', '');
}
function makeElementInvisible(element) {
  element.style.setProperty('visibility', STYLE.VISIBILITY.HIDDEN, STYLE.IMPORTANT);
}
function showElement(element) {
  element.style.setProperty('display', '');
}
function hideElement(element) {
  element.style.setProperty('display', STYLE.DISPLAY.NONE, STYLE.IMPORTANT);
}
function destroyElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}
function showAndAnimate(element, name, clean) {
  var animation = animate(element, name, clean);
  showElement(element);
  return animation;
}
function animateAndHide(element, name, clean) {
  return animate(element, name, clean).then(function () {
    hideElement(element);
  });
}
function addClass(element, name) {
  element.classList.add(name);
}
function removeClass(element, name) {
  element.classList.remove(name);
}
function isElementClosed(el) {
  if (!el || !el.parentNode) {
    return true;
  }

  return false;
}
function watchElementForClose(element, handler) {
  handler = once(handler);
  var interval;

  if (isElementClosed(element)) {
    handler();
  } else {
    interval = safeInterval(function () {
      if (isElementClosed(element)) {
        interval.cancel();
        handler();
      }
    }, 50);
  }

  return {
    cancel: function cancel() {
      if (interval) {
        interval.cancel();
      }
    }
  };
}
function fixScripts(el, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  for (var _i18 = 0, _querySelectorAll2 = querySelectorAll('script', el); _i18 < _querySelectorAll2.length; _i18++) {
    var script = _querySelectorAll2[_i18];
    var parentNode = script.parentNode;

    if (!parentNode) {
      continue;
    }

    var newScript = doc.createElement('script');
    newScript.text = script.textContent;
    parentNode.replaceChild(newScript, script);
  }
}
function onResize(el, handler, _temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? true : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? true : _ref2$height,
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 100 : _ref2$interval,
      _ref2$win = _ref2.win,
      win = _ref2$win === void 0 ? window : _ref2$win;

  var currentWidth = el.offsetWidth;
  var currentHeight = el.offsetHeight;
  handler({
    width: currentWidth,
    height: currentHeight
  });

  var check = function check() {
    var newWidth = el.offsetWidth;
    var newHeight = el.offsetHeight;

    if (width && newWidth !== currentWidth || height && newHeight !== currentHeight) {
      handler({
        width: newWidth,
        height: newHeight
      });
    }

    currentWidth = newWidth;
    currentHeight = newHeight;
  };

  var observer;
  var timeout;

  if (typeof win.ResizeObserver !== 'undefined') {
    observer = new win.ResizeObserver(check);
    observer.observe(el);
  } else if (typeof win.MutationObserver !== 'undefined') {
    observer = new win.MutationObserver(check);
    observer.observe(el, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: false
    });
    win.addEventListener('resize', check);
  } else {
    var loop = function loop() {
      check();
      timeout = setTimeout(loop, interval);
    };

    loop();
  }

  return {
    cancel: function cancel() {
      observer.disconnect();
      window.removeEventListener('resize', check);
      clearTimeout(timeout);
    }
  };
}
function getResourceLoadTime(url) {
  if (!enablePerformance()) {
    return;
  }

  if (!window.performance || typeof window.performance.getEntries !== 'function') {
    return;
  }

  var entries = window.performance.getEntries();

  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];

    if (entry && entry.name && entry.name.indexOf(url) === 0 && typeof entry.duration === 'number') {
      return Math.floor(entry.duration);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/belter/src/storage.js


var DEFAULT_SESSION_STORAGE = 20 * 60 * 1000;
function getStorage(_ref) {
  var name = _ref.name,
      _ref$lifetime = _ref.lifetime,
      lifetime = _ref$lifetime === void 0 ? DEFAULT_SESSION_STORAGE : _ref$lifetime;
  return inlineMemoize(getStorage, function () {
    var STORAGE_KEY = "__" + name + "_storage__";
    var accessedStorage;

    function getState(handler) {
      var localStorageEnabled = isLocalStorageEnabled();
      var storage;

      if (accessedStorage) {
        storage = accessedStorage;
      }

      if (!storage && localStorageEnabled) {
        var rawStorage = window.localStorage.getItem(STORAGE_KEY);

        if (rawStorage) {
          storage = JSON.parse(rawStorage);
        }
      }

      if (!storage) {
        storage = getGlobal()[STORAGE_KEY];
      }

      if (!storage) {
        storage = {
          id: uniqueID()
        };
      }

      if (!storage.id) {
        storage.id = uniqueID();
      }

      accessedStorage = storage;
      var result = handler(storage);

      if (localStorageEnabled) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
      } else {
        getGlobal()[STORAGE_KEY] = storage;
      }

      accessedStorage = null;
      return result;
    }

    function getID() {
      return getState(function (storage) {
        return storage.id;
      });
    }

    function getSession(handler) {
      return getState(function (storage) {
        var session = storage.__session__;
        var now = Date.now();

        if (session && now - session.created > lifetime) {
          session = null;
        }

        if (!session) {
          session = {
            guid: uniqueID(),
            created: now
          };
        }

        storage.__session__ = session;
        return handler(session);
      });
    }

    function getSessionState(handler) {
      return getSession(function (session) {
        session.state = session.state || {};
        return handler(session.state);
      });
    }

    function getSessionID() {
      return getSession(function (session) {
        return session.guid;
      });
    }

    return {
      getState: getState,
      getID: getID,
      getSessionState: getSessionState,
      getSessionID: getSessionID
    };
  }, [{
    name: name,
    lifetime: lifetime
  }]);
}
// CONCATENATED MODULE: ./node_modules/belter/src/experiment.js



function getBelterExperimentStorage() {
  return getStorage({
    name: 'belter_experiment'
  });
}

function isEventUnique(name) {
  return getBelterExperimentStorage().getSessionState(function (state) {
    state.loggedBeacons = state.loggedBeacons || [];

    if (state.loggedBeacons.indexOf(name) === -1) {
      state.loggedBeacons.push(name);
      return true;
    }

    return false;
  });
}

function getThrottlePercentile(name) {
  return getBelterExperimentStorage().getState(function (state) {
    state.throttlePercentiles = state.throttlePercentiles || {};
    state.throttlePercentiles[name] = state.throttlePercentiles[name] || Math.floor(Math.random() * 100);
    return state.throttlePercentiles[name];
  });
}

var THROTTLE_GROUP = {
  TEST: 'test',
  CONTROL: 'control',
  THROTTLE: 'throttle'
};
function experiment(_ref) {
  var name = _ref.name,
      _ref$sample = _ref.sample,
      sample = _ref$sample === void 0 ? 50 : _ref$sample,
      _ref$logTreatment = _ref.logTreatment,
      logTreatment = _ref$logTreatment === void 0 ? src_util_noop : _ref$logTreatment,
      _ref$logCheckpoint = _ref.logCheckpoint,
      logCheckpoint = _ref$logCheckpoint === void 0 ? src_util_noop : _ref$logCheckpoint;
  var throttle = getThrottlePercentile(name);
  var group;

  if (throttle < sample) {
    group = THROTTLE_GROUP.TEST;
  } else if (sample >= 50 || sample <= throttle && throttle < sample * 2) {
    group = THROTTLE_GROUP.CONTROL;
  } else {
    group = THROTTLE_GROUP.THROTTLE;
  }

  var treatment = name + "_" + group;
  var started = false;
  var forced = false;

  try {
    if (window.localStorage && window.localStorage.getItem(name)) {
      forced = true;
    }
  } catch (err) {// pass
  }

  return {
    isEnabled: function isEnabled() {
      return group === THROTTLE_GROUP.TEST || forced;
    },
    isDisabled: function isDisabled() {
      return group !== THROTTLE_GROUP.TEST && !forced;
    },
    getTreatment: function getTreatment() {
      return treatment;
    },
    log: function log(checkpoint, payload) {
      if (payload === void 0) {
        payload = {};
      }

      if (!started) {
        return this;
      }

      if (isEventUnique(name + "_" + treatment + "_" + JSON.stringify(payload))) {
        logTreatment({
          name: name,
          treatment: treatment,
          payload: payload
        });
      }

      if (isEventUnique(name + "_" + treatment + "_" + checkpoint + "_" + JSON.stringify(payload))) {
        logCheckpoint({
          name: name,
          treatment: treatment,
          checkpoint: checkpoint,
          payload: payload
        });
      }

      return this;
    },
    logStart: function logStart(payload) {
      if (payload === void 0) {
        payload = {};
      }

      started = true;
      return this.log("start", payload);
    },
    logComplete: function logComplete(payload) {
      if (payload === void 0) {
        payload = {};
      }

      return this.log("complete", payload);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/belter/src/global.js

function getGlobalNameSpace(_ref) {
  var name = _ref.name,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'latest' : _ref$version;
  var global = getGlobal();
  var globalKey = "__" + name + "__" + version + "_global__";
  var namespace = global[globalKey] = global[globalKey] || {};
  return {
    get: function get(key, defValue) {
      // $FlowFixMe
      defValue = defValue || {};
      var item = namespace[key] = namespace[key] || defValue;
      return item;
    }
  };
}
// CONCATENATED MODULE: ./node_modules/belter/src/http.js

var HEADERS = {
  CONTENT_TYPE: 'content-type',
  ACCEPT: 'accept'
};
var headerBuilders = [];

function parseHeaders(rawHeaders) {
  if (rawHeaders === void 0) {
    rawHeaders = '';
  }

  var result = {};

  for (var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split('\n'); _i2 < _rawHeaders$trim$spli2.length; _i2++) {
    var line = _rawHeaders$trim$spli2[_i2];

    var _line$split = line.split(':'),
        _key = _line$split[0],
        values = _line$split.slice(1);

    result[_key.toLowerCase()] = values.join(':').trim();
  }

  return result;
}

function request(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'get' : _ref$method,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      json = _ref.json,
      data = _ref.data,
      body = _ref.body,
      _ref$win = _ref.win,
      win = _ref$win === void 0 ? window : _ref$win,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
  return new promise_ZalgoPromise(function (resolve, reject) {
    if (json && data || json && body || data && json) {
      throw new Error("Only options.json or options.data or options.body should be passed");
    }

    var normalizedHeaders = {};

    for (var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++) {
      var _key2 = _Object$keys2[_i4];
      normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
    }

    if (json) {
      normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || 'application/json';
    } else if (data || body) {
      normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || 'application/x-www-form-urlencoded; charset=utf-8';
    }

    normalizedHeaders[HEADERS.ACCEPT] = normalizedHeaders[HEADERS.ACCEPT] || 'application/json';

    for (var _i6 = 0; _i6 < headerBuilders.length; _i6++) {
      var headerBuilder = headerBuilders[_i6];
      var builtHeaders = headerBuilder();

      for (var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++) {
        var _key3 = _Object$keys4[_i8];
        normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
      }
    }

    var xhr = new win.XMLHttpRequest();
    xhr.addEventListener('load', function xhrLoad() {
      var responseHeaders = parseHeaders(this.getAllResponseHeaders());

      if (!this.status) {
        return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
      }

      var contentType = responseHeaders['content-type'];
      var isJSON = contentType && (contentType.indexOf('application/json') === 0 || contentType.indexOf('text/json') === 0);
      var responseBody = this.responseText;

      try {
        responseBody = JSON.parse(responseBody);
      } catch (err) {
        if (isJSON) {
          return reject(new Error("Invalid json: " + this.responseText + "."));
        }
      }

      var res = {
        status: this.status,
        headers: responseHeaders,
        body: responseBody
      };
      return resolve(res);
    }, false);
    xhr.addEventListener('error', function (evt) {
      reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
    }, false);
    xhr.open(method, url, true);

    for (var _key4 in normalizedHeaders) {
      if (normalizedHeaders.hasOwnProperty(_key4)) {
        xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
      }
    }

    if (json) {
      body = JSON.stringify(json);
    } else if (data) {
      body = Object.keys(data).map(function (key) {
        return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : '');
      }).join('&');
    }

    xhr.timeout = timeout;

    xhr.ontimeout = function xhrTimeout() {
      reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
    };

    xhr.send(body);
  });
}
function addHeaderBuilder(method) {
  headerBuilders.push(method);
}
// CONCATENATED MODULE: ./node_modules/belter/src/types.js
// export something to force webpack to see this as an ES module
var types_TYPES = true;
// CONCATENATED MODULE: ./node_modules/belter/src/decorators.js

function memoized(target, name, descriptor) {
  descriptor.value = memoize(descriptor.value, {
    name: name,
    thisNamespace: true
  });
}
function decorators_promise(target, name, descriptor) {
  descriptor.value = promisify(descriptor.value, {
    name: name
  });
}
// CONCATENATED MODULE: ./node_modules/belter/src/css.js
function isPerc(str) {
  return typeof str === 'string' && /^[0-9]+%$/.test(str);
}
function isPx(str) {
  return typeof str === 'string' && /^[0-9]+px$/.test(str);
}
function toNum(val) {
  if (typeof val === 'number') {
    return val;
  }

  var match = val.match(/^([0-9]+)(px|%)$/);

  if (!match) {
    throw new Error("Could not match css value from " + val);
  }

  return parseInt(match[1], 10);
}
function toPx(val) {
  return toNum(val) + "px";
}
function toCSS(val) {
  if (typeof val === 'number') {
    return toPx(val);
  }

  return isPerc(val) ? val : toPx(val);
}
function percOf(num, perc) {
  return parseInt(num * toNum(perc) / 100, 10);
}
function normalizeDimension(dim, max) {
  if (typeof dim === 'number') {
    return dim;
  } else if (isPerc(dim)) {
    return percOf(max, dim);
  } else if (isPx(dim)) {
    return toNum(dim);
  } else {
    throw new Error("Can not normalize dimension: " + dim);
  }
}
// CONCATENATED MODULE: ./node_modules/belter/src/test.js


function wrapPromise(method, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout;

  var expected = [];
  var promises = [];
  var timer = setTimeout(function () {
    if (expected.length) {
      promises.push(promise_ZalgoPromise.asyncReject(new Error("Expected " + expected[0] + " to be called")));
    }
  }, timeout);

  var expect = function expect(name, fn) {
    if (fn === void 0) {
      fn = src_util_noop;
    }

    expected.push(name); // $FlowFixMe

    return function expectWrapper() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      removeFromArray(expected, name); // $FlowFixMe

      var _tryCatch = tryCatch(function () {
        var _fn;

        return (_fn = fn).call.apply(_fn, [_this].concat(args));
      }),
          result = _tryCatch.result,
          error = _tryCatch.error;

      if (error) {
        promises.push(promise_ZalgoPromise.asyncReject(error));
        throw error;
      }

      promises.push(promise_ZalgoPromise.resolve(result));
      return result;
    };
  };

  var avoid = function avoid(name, fn) {
    if (fn === void 0) {
      fn = src_util_noop;
    }

    // $FlowFixMe
    return function avoidWrapper() {
      var _fn2;

      promises.push(promise_ZalgoPromise.asyncReject(new Error("Expected " + name + " to not be called"))); // $FlowFixMe

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_fn2 = fn).call.apply(_fn2, [this].concat(args));
    };
  };

  var expectError = function expectError(name, fn) {
    if (fn === void 0) {
      fn = src_util_noop;
    }

    expected.push(name); // $FlowFixMe

    return function expectErrorWrapper() {
      var _this2 = this;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      removeFromArray(expected, name); // $FlowFixMe

      var _tryCatch2 = tryCatch(function () {
        var _fn3;

        return (_fn3 = fn).call.apply(_fn3, [_this2].concat(args));
      }),
          result = _tryCatch2.result,
          error = _tryCatch2.error;

      if (error) {
        throw error;
      }

      promises.push(promise_ZalgoPromise.resolve(result).then(function () {
        throw new Error("Expected " + name + " to throw an error");
      }, src_util_noop));
      return result;
    };
  };

  promises.push(promise_ZalgoPromise.try(function () {
    return method({
      expect: expect,
      avoid: avoid,
      expectError: expectError,
      error: avoid
    });
  }));

  var drain = function drain() {
    return promise_ZalgoPromise.try(function () {
      if (promises.length) {
        return promises.pop();
      }
    }).then(function () {
      if (promises.length) {
        return drain();
      }

      if (expected.length) {
        return promise_ZalgoPromise.delay(10).then(drain);
      }
    });
  };

  return drain().then(function () {
    clearTimeout(timer);
  });
}
// CONCATENATED MODULE: ./node_modules/belter/src/index.js











// CONCATENATED MODULE: ./src/conf/config.js
var BRIDGE_TIMEOUT = 5000;
var CHILD_WINDOW_TIMEOUT = 5000;
var ACK_TIMEOUT = 2000;
var ACK_TIMEOUT_KNOWN = 10000;
var RES_TIMEOUT =  false ? undefined : -1;
var RESPONSE_CYCLE_TIME = 500;
// CONCATENATED MODULE: ./src/conf/constants.js
var MESSAGE_TYPE = {
  REQUEST: 'postrobot_message_request',
  RESPONSE: 'postrobot_message_response',
  ACK: 'postrobot_message_ack'
};
var MESSAGE_ACK = {
  SUCCESS: 'success',
  ERROR: 'error'
};
var MESSAGE_NAME = {
  METHOD: 'postrobot_method',
  HELLO: 'postrobot_hello',
  OPEN_TUNNEL: 'postrobot_open_tunnel'
};
var SEND_STRATEGY = {
  POST_MESSAGE: 'postrobot_post_message',
  BRIDGE: 'postrobot_bridge',
  GLOBAL: 'postrobot_global'
};
var BRIDGE_NAME_PREFIX = '__postrobot_bridge__';
var POSTROBOT_PROXY = '__postrobot_proxy__';
var constants_WILDCARD = '*';
var SERIALIZATION_TYPE = {
  CROSS_DOMAIN_ZALGO_PROMISE: 'cross_domain_zalgo_promise',
  CROSS_DOMAIN_FUNCTION: 'cross_domain_function',
  CROSS_DOMAIN_WINDOW: 'cross_domain_window'
};
// CONCATENATED MODULE: ./src/conf/index.js


// CONCATENATED MODULE: ./src/global.js


function global_getGlobal(win) {
  if (win === void 0) {
    win = window;
  }

  if (win !== window) {
    return win["__post_robot_10_0_25__"];
  }

  var global = win["__post_robot_10_0_25__"] = win["__post_robot_10_0_25__"] || {};
  return global;
}
function deleteGlobal() {
  delete window["__post_robot_10_0_25__"];
}

var getObj = function getObj() {
  return {};
};

function globalStore(key, defStore) {
  if (key === void 0) {
    key = 'store';
  }

  if (defStore === void 0) {
    defStore = getObj;
  }

  return util_getOrSet(global_getGlobal(), key, function () {
    var store = defStore();
    return {
      has: function has(storeKey) {
        return store.hasOwnProperty(storeKey);
      },
      get: function get(storeKey, defVal) {
        // $FlowFixMe
        return store.hasOwnProperty(storeKey) ? store[storeKey] : defVal;
      },
      set: function set(storeKey, val) {
        store[storeKey] = val;
        return val;
      },
      del: function del(storeKey) {
        delete store[storeKey];
      },
      getOrSet: function getOrSet(storeKey, getter) {
        // $FlowFixMe
        return util_getOrSet(store, storeKey, getter);
      },
      reset: function reset() {
        store = defStore();
      },
      keys: function keys() {
        return Object.keys(store);
      }
    };
  });
}
var WildCard = function WildCard() {};
function getWildcard() {
  var global = global_getGlobal();
  global.WINDOW_WILDCARD = global.WINDOW_WILDCARD || new WildCard();
  return global.WINDOW_WILDCARD;
}
function windowStore(key, defStore) {
  if (key === void 0) {
    key = 'store';
  }

  if (defStore === void 0) {
    defStore = getObj;
  }

  return globalStore('windowStore').getOrSet(key, function () {
    var winStore = new weakmap_CrossDomainSafeWeakMap();

    var getStore = function getStore(win) {
      return winStore.getOrSet(win, defStore);
    };

    return {
      has: function has(win) {
        var store = getStore(win);
        return store.hasOwnProperty(key);
      },
      get: function get(win, defVal) {
        var store = getStore(win); // $FlowFixMe

        return store.hasOwnProperty(key) ? store[key] : defVal;
      },
      set: function set(win, val) {
        var store = getStore(win);
        store[key] = val;
        return val;
      },
      del: function del(win) {
        var store = getStore(win);
        delete store[key];
      },
      getOrSet: function getOrSet(win, getter) {
        var store = getStore(win);
        return util_getOrSet(store, key, getter);
      }
    };
  });
}
// CONCATENATED MODULE: ./src/lib/hello.js






function getInstanceID() {
  return globalStore('instance').getOrSet('instanceID', uniqueID);
}

function getHelloPromise(win) {
  var helloPromises = windowStore('helloPromises');
  return helloPromises.getOrSet(win, function () {
    return new promise_ZalgoPromise();
  });
}

function resolveHelloPromise(win, _ref) {
  var domain = _ref.domain;
  var helloPromises = windowStore('helloPromises');
  var existingPromise = helloPromises.get(win);

  if (existingPromise) {
    existingPromise.resolve({
      domain: domain
    });
  }

  var newPromise = promise_ZalgoPromise.resolve({
    domain: domain
  });
  helloPromises.set(win, newPromise);
  return newPromise;
}

function listenForHello(_ref2) {
  var on = _ref2.on;
  return on(MESSAGE_NAME.HELLO, {
    domain: constants_WILDCARD
  }, function (_ref3) {
    var source = _ref3.source,
        origin = _ref3.origin;
    resolveHelloPromise(source, {
      domain: origin
    });
    return {
      instanceID: getInstanceID()
    };
  });
}

function sayHello(win, _ref4) {
  var send = _ref4.send;
  return send(win, MESSAGE_NAME.HELLO, {
    instanceID: getInstanceID()
  }, {
    domain: constants_WILDCARD,
    timeout: -1
  }).then(function (_ref5) {
    var origin = _ref5.origin,
        instanceID = _ref5.data.instanceID;
    resolveHelloPromise(win, {
      domain: origin
    });
    return {
      win: win,
      domain: origin,
      instanceID: instanceID
    };
  });
}
function getWindowInstanceID(win, _ref6) {
  var send = _ref6.send;
  return windowStore('windowInstanceIDPromises').getOrSet(win, function () {
    return sayHello(win, {
      send: send
    }).then(function (_ref7) {
      var instanceID = _ref7.instanceID;
      return instanceID;
    });
  });
}
function initHello(_ref8) {
  var on = _ref8.on,
      send = _ref8.send;
  return globalStore('builtinListeners').getOrSet('helloListener', function () {
    var listener = listenForHello({
      on: on
    });
    var parent = getAncestor();

    if (parent) {
      sayHello(parent, {
        send: send
      }).catch(src_util_noop);
    }

    return listener;
  });
}
function awaitWindowHello(win, timeout, name) {
  if (timeout === void 0) {
    timeout = 5000;
  }

  if (name === void 0) {
    name = 'Window';
  }

  var promise = getHelloPromise(win);

  if (timeout !== -1) {
    promise = promise.timeout(timeout, new Error(name + " did not load after " + timeout + "ms"));
  }

  return promise;
}
// CONCATENATED MODULE: ./src/lib/compat.js

function needsGlobalMessagingForBrowser() {
  if (getUserAgent(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) {
    return true;
  }

  return false;
}
// CONCATENATED MODULE: ./src/lib/windows.js

function markWindowKnown(win) {
  var knownWindows = windowStore('knownWindows');
  knownWindows.set(win, true);
}
function isWindowKnown(win) {
  var knownWindows = windowStore('knownWindows');
  return knownWindows.get(win, false);
}
// CONCATENATED MODULE: ./src/lib/index.js



// CONCATENATED MODULE: ./node_modules/universal-serialize/src/constants.js
var TYPE = {
  FUNCTION: 'function',
  ERROR: 'error',
  PROMISE: 'promise',
  REGEX: 'regex',
  DATE: 'date',
  ARRAY: 'array',
  OBJECT: 'object',
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  NULL: 'null',
  UNDEFINED: 'undefined'
};
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/common.js

function isSerializedType(item) {
  return typeof item === 'object' && item !== null && typeof item.__type__ === 'string';
}
function determineType(val) {
  if (typeof val === 'undefined') {
    return TYPE.UNDEFINED;
  }

  if (val === null) {
    return TYPE.NULL;
  }

  if (Array.isArray(val)) {
    return TYPE.ARRAY;
  }

  if (typeof val === 'function') {
    return TYPE.FUNCTION;
  }

  if (typeof val === 'object') {
    if (val instanceof Error) {
      return TYPE.ERROR;
    }

    if (typeof val.then === 'function') {
      return TYPE.PROMISE;
    }

    if (Object.prototype.toString.call(val) === '[object RegExp]') {
      return TYPE.REGEX;
    }

    if (Object.prototype.toString.call(val) === '[object Date]') {
      return TYPE.DATE;
    }

    return TYPE.OBJECT;
  }

  if (typeof val === 'string') {
    return TYPE.STRING;
  }

  if (typeof val === 'number') {
    return TYPE.NUMBER;
  }

  if (typeof val === 'boolean') {
    return TYPE.BOOLEAN;
  }
}
function serializeType(type, val) {
  return {
    __type__: type,
    __val__: val
  };
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/array.js
function serializeArray(val) {
  return val;
}
function deserializeArray(val) {
  return val;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/boolean.js
function serializeBoolean(val) {
  return val;
}
function deserializeBoolean(val) {
  return val;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/date.js


function serializeDate(val) {
  return serializeType(TYPE.DATE, val.toJSON());
}
function deserializeDate(val) {
  return new Date(val);
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/error.js


// $FlowFixMe
function serializeError(_ref) {
  var message = _ref.message,
      stack = _ref.stack,
      code = _ref.code;
  return serializeType(TYPE.ERROR, {
    message: message,
    stack: stack,
    code: code
  });
}
function deserializeError(_ref2) {
  var message = _ref2.message,
      stack = _ref2.stack,
      code = _ref2.code;
  var error = new Error(message); // $FlowFixMe

  error.code = code;
  error.stack = stack + "\n\n" + error.stack;
  return error;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/function.js
function serializeFunction() {// pass
}
function deserializeFunction() {
  throw new Error("Function serialization is not implemented; nothing to deserialize");
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/number.js
function serializeNumber(val) {
  return val;
}
function deserializeNumber(val) {
  return val;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/object.js
function serializeObject(val) {
  return val;
}
function deserializeObject(val) {
  return val;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/promise.js
function serializePromise() {// pass
}
function deserializePromise() {
  throw new Error("Promise serialization is not implemented; nothing to deserialize");
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/regex.js


function serializeRegex(val) {
  return serializeType(TYPE.REGEX, val.source);
}
function deserializeRegex(val) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(val);
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/string.js
function serializeString(val) {
  return val;
}
function deserializeString(val) {
  return val;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/null.js
function serializeNull(val) {
  return val;
}
function deserializeNull(val) {
  return val;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serializers/index.js











// CONCATENATED MODULE: ./node_modules/universal-serialize/src/serialize.js
var _SERIALIZER;




var SERIALIZER = (_SERIALIZER = {}, _SERIALIZER[TYPE.FUNCTION] = serializeFunction, _SERIALIZER[TYPE.ERROR] = serializeError, _SERIALIZER[TYPE.PROMISE] = serializePromise, _SERIALIZER[TYPE.REGEX] = serializeRegex, _SERIALIZER[TYPE.DATE] = serializeDate, _SERIALIZER[TYPE.ARRAY] = serializeArray, _SERIALIZER[TYPE.OBJECT] = serializeObject, _SERIALIZER[TYPE.STRING] = serializeString, _SERIALIZER[TYPE.NUMBER] = serializeNumber, _SERIALIZER[TYPE.BOOLEAN] = serializeBoolean, _SERIALIZER[TYPE.NULL] = serializeNull, _SERIALIZER); // $FlowFixMe

var defaultSerializers = {};
function serialize(obj, serializers) {
  if (serializers === void 0) {
    serializers = defaultSerializers;
  }

  function replacer(key) {
    var val = this[key];

    if (isSerializedType(this)) {
      return val;
    }

    var type = determineType(val);

    if (!type) {
      return val;
    } // $FlowFixMe


    var serializer = serializers[type] || SERIALIZER[type];

    if (!serializer) {
      return val;
    }

    return serializer(val, key);
  }

  var result = JSON.stringify(obj, replacer);

  if (typeof result === 'undefined') {
    return TYPE.UNDEFINED;
  }

  return result;
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/deserialize.js
var _DESERIALIZER;




// $FlowFixMe
var DESERIALIZER = (_DESERIALIZER = {}, _DESERIALIZER[TYPE.FUNCTION] = deserializeFunction, _DESERIALIZER[TYPE.ERROR] = deserializeError, _DESERIALIZER[TYPE.PROMISE] = deserializePromise, _DESERIALIZER[TYPE.REGEX] = deserializeRegex, _DESERIALIZER[TYPE.DATE] = deserializeDate, _DESERIALIZER[TYPE.ARRAY] = deserializeArray, _DESERIALIZER[TYPE.OBJECT] = deserializeObject, _DESERIALIZER[TYPE.STRING] = deserializeString, _DESERIALIZER[TYPE.NUMBER] = deserializeNumber, _DESERIALIZER[TYPE.BOOLEAN] = deserializeBoolean, _DESERIALIZER[TYPE.NULL] = deserializeNull, _DESERIALIZER); // $FlowFixMe

var defaultDeserializers = {};
function deserialize_deserialize(str, deserializers) {
  if (deserializers === void 0) {
    deserializers = defaultDeserializers;
  }

  if (str === TYPE.UNDEFINED) {
    // $FlowFixMe
    return;
  }

  function replacer(key, val) {
    if (isSerializedType(this)) {
      return val;
    }

    var type;
    var value;

    if (isSerializedType(val)) {
      type = val.__type__;
      value = val.__val__;
    } else {
      type = determineType(val);
      value = val;
    }

    if (!type) {
      return value;
    } // $FlowFixMe


    var deserializer = deserializers[type] || DESERIALIZER[type];

    if (!deserializer) {
      return value;
    }

    return deserializer(value, key);
  }

  return JSON.parse(str, replacer);
}
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/types.js
 // export something to force webpack to see this as an ES module

var src_types_TYPES = true; // eslint-disable-next-line flowtype/require-exact-type
// CONCATENATED MODULE: ./node_modules/universal-serialize/src/index.js






// CONCATENATED MODULE: ./src/bridge/bridge.js





function cleanTunnelWindows() {
  var tunnelWindows = globalStore('tunnelWindows');

  for (var _i2 = 0, _tunnelWindows$keys2 = tunnelWindows.keys(); _i2 < _tunnelWindows$keys2.length; _i2++) {
    var key = _tunnelWindows$keys2[_i2];
    var tunnelWindow = tunnelWindows[key];

    try {
      src_util_noop(tunnelWindow.source);
    } catch (err) {
      tunnelWindows.del(key);
      continue;
    }

    if (isWindowClosed(tunnelWindow.source)) {
      tunnelWindows.del(key);
    }
  }
}

function addTunnelWindow(_ref) {
  var name = _ref.name,
      source = _ref.source,
      canary = _ref.canary,
      sendMessage = _ref.sendMessage;
  cleanTunnelWindows();
  var id = uniqueID();
  var tunnelWindows = globalStore('tunnelWindows');
  tunnelWindows.set(id, {
    name: name,
    source: source,
    canary: canary,
    sendMessage: sendMessage
  });
  return id;
}

function setupOpenTunnelToParent(_ref2) {
  var send = _ref2.send;

  global_getGlobal(window).openTunnelToParent = function openTunnelToParent(_ref3) {
    var name = _ref3.name,
        source = _ref3.source,
        canary = _ref3.canary,
        sendMessage = _ref3.sendMessage;
    var tunnelWindows = globalStore('tunnelWindows');
    var parentWindow = getParent(window);

    if (!parentWindow) {
      throw new Error("No parent window found to open tunnel to");
    }

    var id = addTunnelWindow({
      name: name,
      source: source,
      canary: canary,
      sendMessage: sendMessage
    });
    return send(parentWindow, MESSAGE_NAME.OPEN_TUNNEL, {
      name: name,
      sendMessage: function sendMessage() {
        var tunnelWindow = tunnelWindows.get(id);

        try {
          // IE gets antsy if you try to even reference a closed window
          src_util_noop(tunnelWindow && tunnelWindow.source);
        } catch (err) {
          tunnelWindows.del(id);
          return;
        }

        if (!tunnelWindow || !tunnelWindow.source || isWindowClosed(tunnelWindow.source)) {
          return;
        }

        try {
          tunnelWindow.canary();
        } catch (err) {
          return;
        }

        tunnelWindow.sendMessage.apply(this, arguments);
      }
    }, {
      domain: constants_WILDCARD
    });
  };
}
// CONCATENATED MODULE: ./src/bridge/common.js





function needsBridgeForBrowser() {
  if (getUserAgent(window).match(/MSIE|trident|edge\/12|edge\/13/i)) {
    return true;
  }

  return false;
}
function needsBridgeForWin(win) {
  if (!isSameTopWindow(window, win)) {
    return true;
  }

  return false;
}
function needsBridgeForDomain(domain, win) {
  if (domain) {
    if (getDomain() !== getDomainFromUrl(domain)) {
      return true;
    }
  } else if (win) {
    if (!isSameDomain(win)) {
      return true;
    }
  }

  return false;
}
function needsBridge(_ref) {
  var win = _ref.win,
      domain = _ref.domain;

  if (!needsBridgeForBrowser()) {
    return false;
  }

  if (domain && !needsBridgeForDomain(domain, win)) {
    return false;
  }

  if (win && !needsBridgeForWin(win)) {
    return false;
  }

  return true;
}
function getBridgeName(domain) {
  domain = domain || getDomainFromUrl(domain);
  var sanitizedDomain = domain.replace(/[^a-zA-Z0-9]+/g, '_');
  var id = BRIDGE_NAME_PREFIX + "_" + sanitizedDomain;
  return id;
}
function isBridge() {
  return Boolean(window.name && window.name === getBridgeName(getDomain()));
}
var documentBodyReady = new promise_ZalgoPromise(function (resolve) {
  if (window.document && window.document.body) {
    return resolve(window.document.body);
  }

  var interval = setInterval(function () {
    if (window.document && window.document.body) {
      clearInterval(interval);
      return resolve(window.document.body);
    }
  }, 10);
});
function registerRemoteWindow(win) {
  var remoteWindowPromises = windowStore('remoteWindowPromises');
  remoteWindowPromises.getOrSet(win, function () {
    return new promise_ZalgoPromise();
  });
}
function findRemoteWindow(win) {
  var remoteWindowPromises = windowStore('remoteWindowPromises');
  var remoteWinPromise = remoteWindowPromises.get(win);

  if (!remoteWinPromise) {
    throw new Error("Remote window promise not found");
  }

  return remoteWinPromise;
}
function registerRemoteSendMessage(win, domain, sendMessage) {
  var sendMessageWrapper = function sendMessageWrapper(remoteWin, remoteDomain, message) {
    if (remoteWin !== win) {
      throw new Error("Remote window does not match window");
    }

    if (!matchDomain(remoteDomain, domain)) {
      throw new Error("Remote domain " + remoteDomain + " does not match domain " + domain);
    }

    sendMessage.fireAndForget(message);
  };

  findRemoteWindow(win).resolve(sendMessageWrapper);
}
function rejectRemoteSendMessage(win, err) {
  findRemoteWindow(win).reject(err).catch(src_util_noop);
}
function sendBridgeMessage(win, domain, message) {
  var messagingChild = isOpener(window, win);
  var messagingParent = isOpener(win, window);

  if (!messagingChild && !messagingParent) {
    throw new Error("Can only send messages to and from parent and popup windows");
  }

  return findRemoteWindow(win).then(function (sendMessage) {
    return sendMessage(win, domain, message);
  });
}
// CONCATENATED MODULE: ./src/bridge/child.js






function awaitRemoteBridgeForWindow(win) {
  return windowStore('remoteBridgeAwaiters').getOrSet(win, function () {
    return promise_ZalgoPromise.try(function () {
      var frame = getFrameByName(win, getBridgeName(getDomain()));

      if (!frame) {
        return;
      }

      if (isSameDomain(frame) && global_getGlobal(assertSameDomain(frame))) {
        return frame;
      }

      return new promise_ZalgoPromise(function (resolve) {
        var interval;
        var timeout; // eslint-disable-line prefer-const

        interval = setInterval(function () {
          // eslint-disable-line prefer-const
          if (frame && isSameDomain(frame) && global_getGlobal(assertSameDomain(frame))) {
            clearInterval(interval);
            clearTimeout(timeout);
            return resolve(frame);
          }
        }, 100);
        timeout = setTimeout(function () {
          clearInterval(interval);
          return resolve();
        }, 2000);
      });
    });
  });
}

function openTunnelToOpener(_ref) {
  var on = _ref.on,
      send = _ref.send,
      receiveMessage = _ref.receiveMessage;
  return promise_ZalgoPromise.try(function () {
    var opener = getOpener(window);

    if (!opener || !needsBridge({
      win: opener
    })) {
      return;
    }

    registerRemoteWindow(opener);
    return awaitRemoteBridgeForWindow(opener).then(function (bridge) {
      if (!bridge) {
        return rejectRemoteSendMessage(opener, new Error("Can not register with opener: no bridge found in opener"));
      }

      if (!window.name) {
        return rejectRemoteSendMessage(opener, new Error("Can not register with opener: window does not have a name"));
      }

      return global_getGlobal(assertSameDomain(bridge)).openTunnelToParent({
        name: window.name,
        source: window,
        canary: function canary() {// pass
        },
        sendMessage: function sendMessage(message) {
          try {
            src_util_noop(window);
          } catch (err) {
            return;
          }

          if (!window || window.closed) {
            return;
          }

          try {
            receiveMessage({
              data: message,
              origin: this.origin,
              source: this.source
            }, {
              on: on,
              send: send
            });
          } catch (err) {
            promise_ZalgoPromise.reject(err);
          }
        }
      }).then(function (_ref2) {
        var source = _ref2.source,
            origin = _ref2.origin,
            data = _ref2.data;

        if (source !== opener) {
          throw new Error("Source does not match opener");
        }

        registerRemoteSendMessage(source, origin, data.sendMessage);
      }).catch(function (err) {
        rejectRemoteSendMessage(opener, err);
        throw err;
      });
    });
  });
}
// CONCATENATED MODULE: ./src/bridge/parent.js






function listenForOpenTunnel(_ref) {
  var on = _ref.on,
      send = _ref.send,
      receiveMessage = _ref.receiveMessage;
  var popupWindowsByName = globalStore('popupWindowsByName');
  on(MESSAGE_NAME.OPEN_TUNNEL, function (_ref2) {
    var source = _ref2.source,
        origin = _ref2.origin,
        data = _ref2.data;
    var bridgePromise = globalStore('bridges').get(origin);

    if (!bridgePromise) {
      throw new Error("Can not find bridge promise for domain " + origin);
    }

    return bridgePromise.then(function (bridge) {
      if (source !== bridge) {
        throw new Error("Message source does not matched registered bridge for domain " + origin);
      }

      if (!data.name) {
        throw new Error("Register window expected to be passed window name");
      }

      if (!data.sendMessage) {
        throw new Error("Register window expected to be passed sendMessage method");
      }

      if (!popupWindowsByName.has(data.name)) {
        throw new Error("Window with name " + data.name + " does not exist, or was not opened by this window");
      }

      if (!popupWindowsByName.get(data.name).domain) {
        throw new Error("We do not have a registered domain for window " + data.name);
      }

      if (popupWindowsByName.get(data.name).domain !== origin) {
        throw new Error("Message origin " + origin + " does not matched registered window origin " + popupWindowsByName.get(data.name).domain);
      }

      registerRemoteSendMessage(popupWindowsByName.get(data.name).win, origin, data.sendMessage);
      return {
        sendMessage: function sendMessage(message) {
          if (!window || window.closed) {
            return;
          }

          var winDetails = popupWindowsByName.get(data.name);

          if (!winDetails) {
            return;
          }

          try {
            receiveMessage({
              data: message,
              origin: winDetails.domain,
              source: winDetails.win
            }, {
              on: on,
              send: send
            });
          } catch (err) {
            promise_ZalgoPromise.reject(err);
          }
        }
      };
    });
  });
}

function openBridgeFrame(name, url) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("name", name);
  iframe.setAttribute("id", name);
  iframe.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("border", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("allowTransparency", "true");
  iframe.setAttribute("tabindex", "-1");
  iframe.setAttribute("hidden", "true");
  iframe.setAttribute("title", "");
  iframe.setAttribute("role", "presentation");
  iframe.src = url;
  return iframe;
}

function hasBridge(url, domain) {
  var bridges = globalStore('bridges');
  return bridges.has(domain || getDomainFromUrl(url));
}
function openBridge(url, domain) {
  var bridges = globalStore('bridges');
  var bridgeFrames = globalStore('bridgeFrames');
  domain = domain || getDomainFromUrl(url);
  return bridges.getOrSet(domain, function () {
    return promise_ZalgoPromise.try(function () {
      if (getDomain() === domain) {
        throw new Error("Can not open bridge on the same domain as current domain: " + domain);
      }

      var name = getBridgeName(domain);
      var frame = getFrameByName(window, name);

      if (frame) {
        throw new Error("Frame with name " + name + " already exists on page");
      }

      var iframe = openBridgeFrame(name, url);
      bridgeFrames.set(domain, iframe);
      return documentBodyReady.then(function (body) {
        body.appendChild(iframe);
        var bridge = iframe.contentWindow;
        return new promise_ZalgoPromise(function (resolve, reject) {
          iframe.addEventListener('load', resolve);
          iframe.addEventListener('error', reject);
        }).then(function () {
          return awaitWindowHello(bridge, BRIDGE_TIMEOUT, "Bridge " + url);
        }).then(function () {
          return bridge;
        });
      });
    });
  });
}
function linkWindow(_ref3) {
  var win = _ref3.win,
      name = _ref3.name,
      domain = _ref3.domain;
  var popupWindowsByName = globalStore('popupWindowsByName');
  var popupWindowsByWin = windowStore('popupWindowsByWin');

  for (var _i2 = 0, _popupWindowsByName$k2 = popupWindowsByName.keys(); _i2 < _popupWindowsByName$k2.length; _i2++) {
    var winName = _popupWindowsByName$k2[_i2];

    // $FlowFixMe
    var _details = popupWindowsByName.get(winName);

    if (!_details || isWindowClosed(_details.win)) {
      popupWindowsByName.del(winName);
    }
  }

  var details = popupWindowsByWin.getOrSet(win, function () {
    if (!name) {
      return {
        win: win
      };
    }

    return popupWindowsByName.getOrSet(name, function () {
      return {
        win: win,
        name: name
      };
    });
  });

  if (details.win && details.win !== win) {
    throw new Error("Different window already linked for window: " + (name || 'undefined'));
  }

  if (name) {
    details.name = name;
    popupWindowsByName.set(name, details);
  }

  if (domain) {
    details.domain = domain;
    registerRemoteWindow(win);
  }

  popupWindowsByWin.set(win, details);
  return details;
}
function linkUrl(win, url) {
  linkWindow({
    win: win,
    domain: getDomainFromUrl(url)
  });
}
function listenForWindowOpen() {
  var windowOpen = window.open;

  window.open = function windowOpenWrapper(url, name, options, last) {
    var win = windowOpen.call(this, normalizeMockUrl(url), name, options, last);

    if (!win) {
      return win;
    }

    linkWindow({
      win: win,
      name: name,
      domain: url ? getDomainFromUrl(url) : null
    });
    return win;
  };
}
function destroyBridges() {
  var bridges = globalStore('bridges');
  var bridgeFrames = globalStore('bridgeFrames');

  for (var _i4 = 0, _bridgeFrames$keys2 = bridgeFrames.keys(); _i4 < _bridgeFrames$keys2.length; _i4++) {
    var domain = _bridgeFrames$keys2[_i4];
    var frame = bridgeFrames.get(domain);

    if (frame && frame.parentNode) {
      frame.parentNode.removeChild(frame);
    }
  }

  bridgeFrames.reset();
  bridges.reset();
}
// CONCATENATED MODULE: ./src/bridge/setup.js



function setupBridge(_ref) {
  var on = _ref.on,
      send = _ref.send,
      receiveMessage = _ref.receiveMessage;
  listenForWindowOpen();
  listenForOpenTunnel({
    on: on,
    send: send,
    receiveMessage: receiveMessage
  });
  setupOpenTunnelToParent({
    on: on,
    send: send
  });
  openTunnelToOpener({
    on: on,
    send: send,
    receiveMessage: receiveMessage
  });
}
// CONCATENATED MODULE: ./src/bridge/index.js





// CONCATENATED MODULE: ./src/serialize/window.js









function cleanupProxyWindows() {
  var idToProxyWindow = globalStore('idToProxyWindow');

  for (var _i2 = 0, _idToProxyWindow$keys2 = idToProxyWindow.keys(); _i2 < _idToProxyWindow$keys2.length; _i2++) {
    var id = _idToProxyWindow$keys2[_i2];

    // $FlowFixMe
    if (idToProxyWindow.get(id).shouldClean()) {
      idToProxyWindow.del(id);
    }
  }
}

function getSerializedWindow(winPromise, _ref) {
  var send = _ref.send,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? uniqueID() : _ref$id;
  var windowName;
  return {
    id: id,
    getType: function getType() {
      return winPromise.then(function (win) {
        return getOpener(win) ? WINDOW_TYPE.POPUP : WINDOW_TYPE.IFRAME;
      });
    },
    getInstanceID: memoizePromise(function () {
      return winPromise.then(function (win) {
        return getWindowInstanceID(win, {
          send: send
        });
      });
    }),
    close: function close() {
      return winPromise.then(closeWindow);
    },
    getName: function getName() {
      return winPromise.then(function (win) {
        if (isWindowClosed(win)) {
          return;
        }

        return windowName;
      });
    },
    focus: function focus() {
      return winPromise.then(function (win) {
        win.focus();
      });
    },
    isClosed: function isClosed() {
      return winPromise.then(function (win) {
        return isWindowClosed(win);
      });
    },
    setLocation: function setLocation(href) {
      return winPromise.then(function (win) {
        if (isSameDomain(win)) {
          try {
            if (win.location && typeof win.location.replace === 'function') {
              // $FlowFixMe
              win.location.replace(href);
              return;
            }
          } catch (err) {// pass
          }
        }

        win.location = href;
      });
    },
    setName: function setName(name) {
      return winPromise.then(function (win) {
        if (true) {
          linkWindow({
            win: win,
            name: name
          });
        }

        var sameDomain = isSameDomain(win);
        var frame = getFrameForWindow(win);

        if (sameDomain) {
          assertSameDomain(win).name = name;
        }

        if (frame) {
          frame.setAttribute('name', name);
        }

        if (!sameDomain && !frame) {
          throw new Error("Can not set name for cross-domain window: " + name);
        }

        windowName = name;
      });
    }
  };
}

var window_ProxyWindow =
/*#__PURE__*/
function () {
  function ProxyWindow(_ref2) {
    var send = _ref2.send,
        win = _ref2.win,
        serializedWindow = _ref2.serializedWindow;
    this.id = void 0;
    this.isProxyWindow = true;
    this.serializedWindow = void 0;
    this.actualWindow = void 0;
    this.actualWindowPromise = void 0;
    this.send = void 0;
    this.name = void 0;
    this.actualWindowPromise = new promise_ZalgoPromise();
    this.serializedWindow = serializedWindow || getSerializedWindow(this.actualWindowPromise, {
      send: send
    });
    globalStore('idToProxyWindow').set(this.getID(), this);

    if (win) {
      this.setWindow(win, {
        send: send
      });
    }
  }

  var _proto = ProxyWindow.prototype;

  _proto.getID = function getID() {
    return this.serializedWindow.id;
  };

  _proto.getType = function getType() {
    return this.serializedWindow.getType();
  };

  _proto.isPopup = function isPopup() {
    return this.getType().then(function (type) {
      return type === WINDOW_TYPE.POPUP;
    });
  };

  _proto.setLocation = function setLocation(href) {
    var _this = this;

    return this.serializedWindow.setLocation(href).then(function () {
      return _this;
    });
  };

  _proto.getName = function getName() {
    return this.serializedWindow.getName();
  };

  _proto.setName = function setName(name) {
    var _this2 = this;

    return this.serializedWindow.setName(name).then(function () {
      return _this2;
    });
  };

  _proto.close = function close() {
    var _this3 = this;

    return this.serializedWindow.close().then(function () {
      return _this3;
    });
  };

  _proto.focus = function focus() {
    var _this4 = this;

    var isPopupPromise = this.isPopup();
    var getNamePromise = this.getName();
    var reopenPromise = promise_ZalgoPromise.hash({
      isPopup: isPopupPromise,
      name: getNamePromise
    }).then(function (_ref3) {
      var isPopup = _ref3.isPopup,
          name = _ref3.name;

      if (isPopup && name) {
        window.open('', name);
      }
    });
    var focusPromise = this.serializedWindow.focus();
    return promise_ZalgoPromise.all([reopenPromise, focusPromise]).then(function () {
      return _this4;
    });
  };

  _proto.isClosed = function isClosed() {
    return this.serializedWindow.isClosed();
  };

  _proto.getWindow = function getWindow() {
    return this.actualWindow;
  };

  _proto.setWindow = function setWindow(win, _ref4) {
    var send = _ref4.send;
    this.actualWindow = win;
    this.actualWindowPromise.resolve(this.actualWindow);
    this.serializedWindow = getSerializedWindow(this.actualWindowPromise, {
      send: send,
      id: this.getID()
    });
    windowStore('winToProxyWindow').set(win, this);
  };

  _proto.awaitWindow = function awaitWindow() {
    return this.actualWindowPromise;
  };

  _proto.matchWindow = function matchWindow(win, _ref5) {
    var _this5 = this;

    var send = _ref5.send;
    return promise_ZalgoPromise.try(function () {
      if (_this5.actualWindow) {
        return win === _this5.actualWindow;
      }

      return promise_ZalgoPromise.hash({
        proxyInstanceID: _this5.getInstanceID(),
        knownWindowInstanceID: getWindowInstanceID(win, {
          send: send
        })
      }).then(function (_ref6) {
        var proxyInstanceID = _ref6.proxyInstanceID,
            knownWindowInstanceID = _ref6.knownWindowInstanceID;
        var match = proxyInstanceID === knownWindowInstanceID;

        if (match) {
          _this5.setWindow(win, {
            send: send
          });
        }

        return match;
      });
    });
  };

  _proto.unwrap = function unwrap() {
    return this.actualWindow || this;
  };

  _proto.getInstanceID = function getInstanceID() {
    return this.serializedWindow.getInstanceID();
  };

  _proto.shouldClean = function shouldClean() {
    return Boolean(this.actualWindow && isWindowClosed(this.actualWindow));
  };

  _proto.serialize = function serialize() {
    return this.serializedWindow;
  };

  ProxyWindow.unwrap = function unwrap(win) {
    return ProxyWindow.isProxyWindow(win) // $FlowFixMe
    ? win.unwrap() : win;
  };

  ProxyWindow.serialize = function serialize(win, _ref7) {
    var send = _ref7.send;
    cleanupProxyWindows();
    return ProxyWindow.toProxyWindow(win, {
      send: send
    }).serialize();
  };

  ProxyWindow.deserialize = function deserialize(serializedWindow, _ref8) {
    var send = _ref8.send;
    cleanupProxyWindows();
    return globalStore('idToProxyWindow').get(serializedWindow.id) || new ProxyWindow({
      serializedWindow: serializedWindow,
      send: send
    });
  };

  ProxyWindow.isProxyWindow = function isProxyWindow(obj) {
    // $FlowFixMe
    return Boolean(obj && !isWindow(obj) && obj.isProxyWindow);
  };

  ProxyWindow.toProxyWindow = function toProxyWindow(win, _ref9) {
    var send = _ref9.send;
    cleanupProxyWindows();

    if (ProxyWindow.isProxyWindow(win)) {
      // $FlowFixMe
      return win;
    } // $FlowFixMe


    var actualWindow = win;
    return windowStore('winToProxyWindow').get(actualWindow) || new ProxyWindow({
      win: actualWindow,
      send: send
    });
  };

  return ProxyWindow;
}();
function serializeWindow(destination, domain, win, _ref10) {
  var send = _ref10.send;
  return serializeType(SERIALIZATION_TYPE.CROSS_DOMAIN_WINDOW, window_ProxyWindow.serialize(win, {
    send: send
  }));
}
function deserializeWindow(source, origin, win, _ref11) {
  var send = _ref11.send;
  return window_ProxyWindow.deserialize(win, {
    send: send
  });
}
// CONCATENATED MODULE: ./src/serialize/function.js








function addMethod(id, val, name, source, domain) {
  var methodStore = windowStore('methodStore');
  var proxyWindowMethods = globalStore('proxyWindowMethods');

  if (window_ProxyWindow.isProxyWindow(source)) {
    proxyWindowMethods.set(id, {
      val: val,
      name: name,
      domain: domain,
      source: source
    });
  } else {
    proxyWindowMethods.del(id); // $FlowFixMe

    var methods = methodStore.getOrSet(source, function () {
      return {};
    });
    methods[id] = {
      domain: domain,
      name: name,
      val: val,
      source: source
    };
  }
}

function lookupMethod(source, id) {
  var methodStore = windowStore('methodStore');
  var proxyWindowMethods = globalStore('proxyWindowMethods');
  var methods = methodStore.getOrSet(source, function () {
    return {};
  });
  return methods[id] || proxyWindowMethods.get(id);
}

function listenForFunctionCalls(_ref) {
  var on = _ref.on,
      send = _ref.send;
  return globalStore('builtinListeners').getOrSet('functionCalls', function () {
    return on(MESSAGE_NAME.METHOD, {
      domain: constants_WILDCARD
    }, function (_ref2) {
      var source = _ref2.source,
          origin = _ref2.origin,
          data = _ref2.data;
      var id = data.id,
          name = data.name;
      var meth = lookupMethod(source, id);

      if (!meth) {
        throw new Error("Could not find method '" + name + "' with id: " + data.id + " in " + getDomain(window));
      }

      var methodSource = meth.source,
          domain = meth.domain,
          val = meth.val;
      return promise_ZalgoPromise.try(function () {
        if (!matchDomain(domain, origin)) {
          // $FlowFixMe
          throw new Error("Method '" + data.name + "' domain " + JSON.stringify(util_isRegex(meth.domain) ? meth.domain.source : meth.domain) + " does not match origin " + origin + " in " + getDomain(window));
        }

        if (window_ProxyWindow.isProxyWindow(methodSource)) {
          // $FlowFixMe
          return methodSource.matchWindow(source, {
            send: send
          }).then(function (match) {
            if (!match) {
              throw new Error("Method call '" + data.name + "' failed - proxy window does not match source in " + getDomain(window));
            }
          });
        }
      }).then(function () {
        return val.apply({
          source: source,
          origin: origin
        }, data.args);
      }, function (err) {
        return promise_ZalgoPromise.try(function () {
          if (val.onError) {
            return val.onError(err);
          }
        }).then(function () {
          // $FlowFixMe
          if (err.stack) {
            // $FlowFixMe
            err.stack = "Remote call to " + name + "()\n\n" + err.stack;
          }

          throw err;
        });
      }).then(function (result) {
        return {
          result: result,
          id: id,
          name: name
        };
      });
    });
  });
}

function function_serializeFunction(destination, domain, val, key, _ref3) {
  var on = _ref3.on,
      send = _ref3.send;
  listenForFunctionCalls({
    on: on,
    send: send
  });
  var id = val.__id__ || uniqueID();
  destination = window_ProxyWindow.unwrap(destination);
  var name = val.__name__ || val.name || key;

  if (typeof name === 'string' && typeof name.indexOf === 'function' && name.indexOf('anonymous::') === 0) {
    name = name.replace('anonymous::', key + "::");
  }

  if (window_ProxyWindow.isProxyWindow(destination)) {
    addMethod(id, val, name, destination, domain); // $FlowFixMe

    destination.awaitWindow().then(function (win) {
      addMethod(id, val, name, win, domain);
    });
  } else {
    addMethod(id, val, name, destination, domain);
  }

  return serializeType(SERIALIZATION_TYPE.CROSS_DOMAIN_FUNCTION, {
    id: id,
    name: name
  });
}
function function_deserializeFunction(source, origin, _ref4, _ref5) {
  var id = _ref4.id,
      name = _ref4.name;
  var send = _ref5.send;

  var getDeserializedFunction = function getDeserializedFunction(opts) {
    if (opts === void 0) {
      opts = {};
    }

    function crossDomainFunctionWrapper() {
      var _arguments = arguments;
      var originalStack;

      if (false) {}

      return window_ProxyWindow.toProxyWindow(source, {
        send: send
      }).awaitWindow().then(function (win) {
        var meth = lookupMethod(win, id);

        if (meth && meth.val !== crossDomainFunctionWrapper) {
          return meth.val.apply({
            source: window,
            origin: getDomain()
          }, _arguments);
        } else {
          // $FlowFixMe
          var options = {
            domain: origin,
            fireAndForget: opts.fireAndForget
          };

          var _args = Array.prototype.slice.call(_arguments);

          return send(win, MESSAGE_NAME.METHOD, {
            id: id,
            name: name,
            args: _args
          }, options).then(function (res) {
            if (!opts.fireAndForget) {
              return res.data.result;
            }
          });
        }
      }).catch(function (err) {
        // $FlowFixMe
        if (false) {}

        throw err;
      });
    }

    crossDomainFunctionWrapper.__name__ = name;
    crossDomainFunctionWrapper.__origin__ = origin;
    crossDomainFunctionWrapper.__source__ = source;
    crossDomainFunctionWrapper.__id__ = id;
    crossDomainFunctionWrapper.origin = origin;
    return crossDomainFunctionWrapper;
  };

  var crossDomainFunctionWrapper = getDeserializedFunction();
  crossDomainFunctionWrapper.fireAndForget = getDeserializedFunction({
    fireAndForget: true
  });
  return crossDomainFunctionWrapper;
}
// CONCATENATED MODULE: ./src/serialize/promise.js





function promise_serializePromise(destination, domain, val, key, _ref) {
  var on = _ref.on,
      send = _ref.send;
  return serializeType(SERIALIZATION_TYPE.CROSS_DOMAIN_ZALGO_PROMISE, {
    then: function_serializeFunction(destination, domain, function (resolve, reject) {
      return val.then(resolve, reject);
    }, key, {
      on: on,
      send: send
    })
  });
}
function promise_deserializePromise(source, origin, _ref2) {
  var then = _ref2.then;
  return new promise_ZalgoPromise(then);
}
// CONCATENATED MODULE: ./src/serialize/serialize.js






function serializeMessage(destination, domain, obj, _ref) {
  var _serialize;

  var on = _ref.on,
      send = _ref.send;
  return serialize(obj, (_serialize = {}, _serialize[TYPE.PROMISE] = function (val, key) {
    return promise_serializePromise(destination, domain, val, key, {
      on: on,
      send: send
    });
  }, _serialize[TYPE.FUNCTION] = function (val, key) {
    return function_serializeFunction(destination, domain, val, key, {
      on: on,
      send: send
    });
  }, _serialize[TYPE.OBJECT] = function (val) {
    return isWindow(val) || window_ProxyWindow.isProxyWindow(val) ? serializeWindow(destination, domain, val, {
      on: on,
      send: send
    }) : val;
  }, _serialize));
}
function deserializeMessage(source, origin, message, _ref2) {
  var _deserialize;

  var on = _ref2.on,
      send = _ref2.send;
  return deserialize_deserialize(message, (_deserialize = {}, _deserialize[SERIALIZATION_TYPE.CROSS_DOMAIN_ZALGO_PROMISE] = function (serializedPromise) {
    return promise_deserializePromise(source, origin, serializedPromise);
  }, _deserialize[SERIALIZATION_TYPE.CROSS_DOMAIN_FUNCTION] = function (serializedFunction) {
    return function_deserializeFunction(source, origin, serializedFunction, {
      on: on,
      send: send
    });
  }, _deserialize[SERIALIZATION_TYPE.CROSS_DOMAIN_WINDOW] = function (serializedWindow) {
    return deserializeWindow(source, origin, serializedWindow, {
      send: send
    });
  }, _deserialize));
}
// CONCATENATED MODULE: ./src/serialize/index.js




// CONCATENATED MODULE: ./src/drivers/send/strategies.js





var SEND_MESSAGE_STRATEGIES = {};

SEND_MESSAGE_STRATEGIES[SEND_STRATEGY.POST_MESSAGE] = function (win, serializedMessage, domain) {
  if (false) {}

  var domains;

  if (Array.isArray(domain)) {
    domains = domain;
  } else if (typeof domain === 'string') {
    domains = [domain];
  } else {
    domains = [constants_WILDCARD];
  }

  domains = domains.map(function (dom) {
    if (false) { var windowDomain; }

    if (dom.indexOf(PROTOCOL.FILE) === 0) {
      return constants_WILDCARD;
    }

    return dom;
  });
  domains.forEach(function (dom) {
    win.postMessage(serializedMessage, dom);
  });
};

if (true) {
  SEND_MESSAGE_STRATEGIES[SEND_STRATEGY.BRIDGE] = function (win, serializedMessage, domain) {
    if (!needsBridgeForBrowser() && !isBridge()) {
      throw new Error("Bridge not needed for browser");
    }

    if (isSameDomain(win)) {
      throw new Error("Post message through bridge disabled between same domain windows");
    }

    if (isSameTopWindow(window, win) !== false) {
      throw new Error("Can only use bridge to communicate between two different windows, not between frames");
    }

    sendBridgeMessage(win, domain, serializedMessage);
  };
}

if (true) {
  SEND_MESSAGE_STRATEGIES[SEND_STRATEGY.GLOBAL] = function (win, serializedMessage) {
    if (!needsGlobalMessagingForBrowser()) {
      throw new Error("Global messaging not needed for browser");
    }

    if (!isSameDomain(win)) {
      throw new Error("Post message through global disabled between different domain windows");
    }

    if (isSameTopWindow(window, win) !== false) {
      throw new Error("Can only use global to communicate between two different windows, not between frames");
    } // $FlowFixMe


    var foreignGlobal = global_getGlobal(win);

    if (!foreignGlobal) {
      throw new Error("Can not find postRobot global on foreign window");
    }

    foreignGlobal.receiveMessage({
      source: window,
      origin: getDomain(),
      data: serializedMessage
    });
  };
}
// CONCATENATED MODULE: ./src/drivers/send/index.js





function send_sendMessage(win, domain, message, _ref) {
  var _serializeMessage;

  var on = _ref.on,
      send = _ref.send;

  if (isWindowClosed(win)) {
    throw new Error('Window is closed');
  }

  var serializedMessage = serializeMessage(win, domain, (_serializeMessage = {}, _serializeMessage["__post_robot_10_0_25__"] = _extends({
    id: uniqueID(),
    origin: getDomain(window)
  }, message), _serializeMessage), {
    on: on,
    send: send
  });
  var strategies = Object.keys(SEND_MESSAGE_STRATEGIES);
  var errors = [];

  for (var _i2 = 0; _i2 < strategies.length; _i2++) {
    var strategyName = strategies[_i2];

    try {
      SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
    } catch (err) {
      errors.push(err);
    }
  }

  if (errors.length === strategies.length) {
    throw new Error("All post-robot messaging strategies failed:\n\n" + errors.map(function (err, i) {
      return i + ". " + stringifyError(err);
    }).join('\n\n'));
  }
}
// CONCATENATED MODULE: ./src/drivers/listeners.js




function resetListeners() {
  var responseListeners = globalStore('responseListeners');
  var erroredResponseListeners = globalStore('erroredResponseListeners');
  responseListeners.reset();
  erroredResponseListeners.reset();
}
var __DOMAIN_REGEX__ = '__domain_regex__';
function addResponseListener(hash, listener) {
  var responseListeners = globalStore('responseListeners');
  responseListeners.set(hash, listener);
}
function getResponseListener(hash) {
  var responseListeners = globalStore('responseListeners');
  return responseListeners.get(hash);
}
function deleteResponseListener(hash) {
  var responseListeners = globalStore('responseListeners');
  responseListeners.del(hash);
}
function cancelResponseListeners() {
  var responseListeners = globalStore('responseListeners');

  for (var _i2 = 0, _responseListeners$ke2 = responseListeners.keys(); _i2 < _responseListeners$ke2.length; _i2++) {
    var hash = _responseListeners$ke2[_i2];
    var listener = responseListeners.get(hash);

    if (listener) {
      listener.cancelled = true;
    }

    responseListeners.del(hash);
  }
}
function markResponseListenerErrored(hash) {
  var erroredResponseListeners = globalStore('erroredResponseListeners');
  erroredResponseListeners.set(hash, true);
}
function isResponseListenerErrored(hash) {
  var erroredResponseListeners = globalStore('erroredResponseListeners');
  return erroredResponseListeners.has(hash);
}
function getRequestListener(_ref) {
  var name = _ref.name,
      win = _ref.win,
      domain = _ref.domain;
  var requestListeners = windowStore('requestListeners');

  if (win === constants_WILDCARD) {
    win = null;
  }

  if (domain === constants_WILDCARD) {
    domain = null;
  }

  if (!name) {
    throw new Error("Name required to get request listener");
  }

  for (var _i4 = 0, _ref3 = [win, getWildcard()]; _i4 < _ref3.length; _i4++) {
    var winQualifier = _ref3[_i4];

    if (!winQualifier) {
      continue;
    }

    var nameListeners = requestListeners.get(winQualifier);

    if (!nameListeners) {
      continue;
    }

    var domainListeners = nameListeners[name];

    if (!domainListeners) {
      continue;
    }

    if (domain && typeof domain === 'string') {
      if (domainListeners[domain]) {
        return domainListeners[domain];
      }

      if (domainListeners[__DOMAIN_REGEX__]) {
        for (var _i6 = 0, _domainListeners$__DO2 = domainListeners[__DOMAIN_REGEX__]; _i6 < _domainListeners$__DO2.length; _i6++) {
          var _domainListeners$__DO3 = _domainListeners$__DO2[_i6],
              regex = _domainListeners$__DO3.regex,
              listener = _domainListeners$__DO3.listener;

          if (matchDomain(regex, domain)) {
            return listener;
          }
        }
      }
    }

    if (domainListeners[constants_WILDCARD]) {
      return domainListeners[constants_WILDCARD];
    }
  }
}
function addRequestListener(_ref4, listener) {
  var name = _ref4.name,
      win = _ref4.win,
      domain = _ref4.domain;
  var requestListeners = windowStore('requestListeners');

  if (!name || typeof name !== 'string') {
    throw new Error("Name required to add request listener");
  }

  if (Array.isArray(win)) {
    var listenersCollection = [];

    for (var _i8 = 0, _win2 = win; _i8 < _win2.length; _i8++) {
      var item = _win2[_i8];
      listenersCollection.push(addRequestListener({
        name: name,
        domain: domain,
        win: item
      }, listener));
    }

    return {
      cancel: function cancel() {
        for (var _i10 = 0; _i10 < listenersCollection.length; _i10++) {
          var cancelListener = listenersCollection[_i10];
          cancelListener.cancel();
        }
      }
    };
  }

  if (Array.isArray(domain)) {
    var _listenersCollection = [];

    for (var _i12 = 0, _domain2 = domain; _i12 < _domain2.length; _i12++) {
      var _item = _domain2[_i12];

      _listenersCollection.push(addRequestListener({
        name: name,
        win: win,
        domain: _item
      }, listener));
    }

    return {
      cancel: function cancel() {
        for (var _i14 = 0; _i14 < _listenersCollection.length; _i14++) {
          var cancelListener = _listenersCollection[_i14];
          cancelListener.cancel();
        }
      }
    };
  }

  var existingListener = getRequestListener({
    name: name,
    win: win,
    domain: domain
  });

  if (!win || win === constants_WILDCARD) {
    win = getWildcard();
  }

  domain = domain || constants_WILDCARD;

  if (existingListener) {
    if (win && domain) {
      throw new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === getWildcard() ? 'wildcard' : 'specified') + " window");
    } else if (win) {
      throw new Error("Request listener already exists for " + name + " for " + (win === getWildcard() ? 'wildcard' : 'specified') + " window");
    } else if (domain) {
      throw new Error("Request listener already exists for " + name + " on domain " + domain.toString());
    } else {
      throw new Error("Request listener already exists for " + name);
    }
  }

  var nameListeners = requestListeners.getOrSet(win, function () {
    return {};
  });
  var domainListeners = util_getOrSet(nameListeners, name, function () {
    return {};
  });
  var strDomain = domain.toString();
  var regexListeners;
  var regexListener;

  if (util_isRegex(domain)) {
    regexListeners = util_getOrSet(domainListeners, __DOMAIN_REGEX__, function () {
      return [];
    });
    regexListener = {
      regex: domain,
      listener: listener
    };
    regexListeners.push(regexListener);
  } else {
    domainListeners[strDomain] = listener;
  }

  return {
    cancel: function cancel() {
      delete domainListeners[strDomain];

      if (regexListener) {
        regexListeners.splice(regexListeners.indexOf(regexListener, 1));

        if (!regexListeners.length) {
          delete domainListeners[__DOMAIN_REGEX__];
        }
      }

      if (!Object.keys(domainListeners).length) {
        delete nameListeners[name];
      }

      if (win && !Object.keys(nameListeners).length) {
        requestListeners.del(win);
      }
    }
  };
}
// CONCATENATED MODULE: ./src/drivers/receive/types.js


var _RECEIVE_MESSAGE_TYPE;







var RECEIVE_MESSAGE_TYPES = (_RECEIVE_MESSAGE_TYPE = {}, _RECEIVE_MESSAGE_TYPE[MESSAGE_TYPE.REQUEST] = function (source, origin, message, _ref) {
  var on = _ref.on,
      send = _ref.send;
  var options = getRequestListener({
    name: message.name,
    win: source,
    domain: origin
  });
  var logName = message.name === MESSAGE_NAME.METHOD && message.data && typeof message.data.name === 'string' ? message.data.name + "()" : message.name;

  if (false) {}

  function sendResponse(type, ack, response) {
    if (response === void 0) {
      response = {};
    }

    if (message.fireAndForget || isWindowClosed(source)) {
      return;
    }

    if (false) {}

    try {
      // $FlowFixMe
      send_sendMessage(source, origin, _extends({
        type: type,
        ack: ack,
        hash: message.hash,
        name: message.name
      }, response), {
        on: on,
        send: send
      });
    } catch (err) {
      throw new Error("Send response message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
    }
  }

  return promise_ZalgoPromise.all([sendResponse(MESSAGE_TYPE.ACK), promise_ZalgoPromise.try(function () {
    if (!options) {
      throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
    }

    if (!matchDomain(options.domain, origin)) {
      throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
    }

    var data = message.data;
    return options.handler({
      source: source,
      origin: origin,
      data: data
    });
  }).then(function (data) {
    return sendResponse(MESSAGE_TYPE.RESPONSE, MESSAGE_ACK.SUCCESS, {
      data: data
    });
  }, function (error) {
    return sendResponse(MESSAGE_TYPE.RESPONSE, MESSAGE_ACK.ERROR, {
      error: error
    });
  })]).then(src_util_noop).catch(function (err) {
    if (options && options.handleError) {
      return options.handleError(err);
    } else {
      throw err;
    }
  });
}, _RECEIVE_MESSAGE_TYPE[MESSAGE_TYPE.ACK] = function (source, origin, message) {
  if (isResponseListenerErrored(message.hash)) {
    return;
  }

  var options = getResponseListener(message.hash);

  if (!options) {
    throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
  }

  try {
    if (!matchDomain(options.domain, origin)) {
      throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
    }

    if (source !== options.win) {
      throw new Error("Ack source does not match registered window");
    }
  } catch (err) {
    options.promise.reject(err);
  }

  options.ack = true;
}, _RECEIVE_MESSAGE_TYPE[MESSAGE_TYPE.RESPONSE] = function (source, origin, message) {
  if (isResponseListenerErrored(message.hash)) {
    return;
  }

  var options = getResponseListener(message.hash);

  if (!options) {
    throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
  }

  if (!matchDomain(options.domain, origin)) {
    throw new Error("Response origin " + origin + " does not match domain " + stringifyDomainPattern(options.domain));
  }

  if (source !== options.win) {
    throw new Error("Response source does not match registered window");
  }

  deleteResponseListener(message.hash);
  var logName = message.name === MESSAGE_NAME.METHOD && message.data && typeof message.data.name === 'string' ? message.data.name + "()" : message.name;

  if (message.ack === MESSAGE_ACK.ERROR) {
    if (false) {}

    options.promise.reject(message.error);
  } else if (message.ack === MESSAGE_ACK.SUCCESS) {
    if (false) {}

    options.promise.resolve({
      source: source,
      origin: origin,
      data: message.data
    });
  }
}, _RECEIVE_MESSAGE_TYPE);
// CONCATENATED MODULE: ./src/drivers/receive/index.js







function parseMessage(message, source, origin, _ref) {
  var on = _ref.on,
      send = _ref.send;
  var parsedMessage;

  try {
    parsedMessage = deserializeMessage(source, origin, message, {
      on: on,
      send: send
    });
  } catch (err) {
    return;
  }

  if (!parsedMessage) {
    return;
  }

  if (typeof parsedMessage !== 'object' || parsedMessage === null) {
    return;
  }

  parsedMessage = parsedMessage["__post_robot_10_0_25__"];

  if (!parsedMessage || typeof parsedMessage !== 'object' || parsedMessage === null) {
    return;
  }

  if (!parsedMessage.type || typeof parsedMessage.type !== 'string') {
    return;
  }

  if (!RECEIVE_MESSAGE_TYPES[parsedMessage.type]) {
    return;
  }

  return parsedMessage;
}

function receive_receiveMessage(event, _ref2) {
  var on = _ref2.on,
      send = _ref2.send;
  var receivedMessages = globalStore('receivedMessages');

  if (!window || window.closed) {
    throw new Error("Message received in closed window");
  }

  try {
    if (!event.source) {
      return;
    }
  } catch (err) {
    return;
  }

  var source = event.source,
      origin = event.origin,
      data = event.data;

  if (false) {}

  var message = parseMessage(data, source, origin, {
    on: on,
    send: send
  });

  if (!message) {
    return;
  }

  markWindowKnown(source);

  if (receivedMessages.has(message.id)) {
    return;
  }

  receivedMessages.set(message.id, true);

  if (isWindowClosed(source) && !message.fireAndForget) {
    return;
  }

  if (message.origin.indexOf(PROTOCOL.FILE) === 0) {
    origin = PROTOCOL.FILE + "//";
  }

  RECEIVE_MESSAGE_TYPES[message.type](source, origin, message, {
    on: on,
    send: send
  });
}
function setupGlobalReceiveMessage(_ref3) {
  var on = _ref3.on,
      send = _ref3.send;
  var global = global_getGlobal();

  global.receiveMessage = global.receiveMessage || function (message) {
    return receive_receiveMessage(message, {
      on: on,
      send: send
    });
  };
}
function messageListener(event, _ref4) {
  var on = _ref4.on,
      send = _ref4.send;

  try {
    src_util_noop(event.source);
  } catch (err) {
    return;
  }

  var source = event.source || event.sourceElement;
  var origin = event.origin || event.originalEvent && event.originalEvent.origin;
  var data = event.data;

  if (origin === 'null') {
    origin = PROTOCOL.FILE + "//";
  }

  if (!source) {
    return;
  }

  if (!origin) {
    throw new Error("Post message did not have origin domain");
  }

  if (false) {}

  receive_receiveMessage({
    source: source,
    origin: origin,
    data: data
  }, {
    on: on,
    send: send
  });
}
function listenForMessages(_ref5) {
  var on = _ref5.on,
      send = _ref5.send;
  return globalStore().getOrSet('postMessageListener', function () {
    return addEventListener(window, 'message', function (event) {
      // $FlowFixMe
      messageListener(event, {
        on: on,
        send: send
      });
    });
  });
}
function stopListenForMessages() {
  var listener = globalStore().get('postMessageListener');

  if (listener) {
    listener.cancel();
  }
}
// CONCATENATED MODULE: ./src/drivers/index.js



// CONCATENATED MODULE: ./src/public/on.js



function on_on(name, options, handler) {
  if (!name) {
    throw new Error('Expected name');
  }

  if (typeof options === 'function') {
    handler = options; // $FlowFixMe

    options = {};
  }

  if (!handler) {
    throw new Error('Expected handler');
  }

  options = options || {};
  options.name = name;
  options.handler = handler || options.handler;
  var win = options.window;
  var domain = options.domain;
  var listenerOptions = {
    handler: options.handler,
    handleError: options.errorHandler || function (err) {
      throw err;
    },
    window: win,
    domain: domain || constants_WILDCARD,
    name: name
  };
  var requestListener = addRequestListener({
    name: name,
    win: win,
    domain: domain
  }, listenerOptions);
  return {
    cancel: function cancel() {
      requestListener.cancel();
    }
  };
}
function on_once(name, options, handler) {
  // $FlowFixMe
  options = options || {};

  if (typeof options === 'function') {
    handler = options; // $FlowFixMe

    options = {};
  }

  var promise = new promise_ZalgoPromise();
  var listener; // eslint-disable-line prefer-const

  options.errorHandler = function (err) {
    listener.cancel();
    promise.reject(err);
  };

  listener = on_on(name, options, function (event) {
    listener.cancel();
    promise.resolve(event);

    if (handler) {
      return handler(event);
    }
  });
  promise.cancel = listener.cancel;
  return promise;
}
// CONCATENATED MODULE: ./src/public/send.js









function validateOptions(name, win, domain) {
  if (!name) {
    throw new Error('Expected name');
  }

  if (domain) {
    if (typeof domain !== 'string' && !Array.isArray(domain) && !util_isRegex(domain)) {
      throw new TypeError("Expected domain to be a string, array, or regex");
    }
  }

  if (isWindowClosed(win)) {
    throw new Error('Target window is closed');
  }
}

function normalizeDomain(win, targetDomain, actualDomain, _ref) {
  var send = _ref.send;

  if (typeof targetDomain === 'string') {
    return promise_ZalgoPromise.resolve(targetDomain);
  }

  return promise_ZalgoPromise.try(function () {
    return actualDomain || sayHello(win, {
      send: send
    }).then(function (_ref2) {
      var domain = _ref2.domain;
      return domain;
    });
  }).then(function (normalizedDomain) {
    if (!matchDomain(targetDomain, targetDomain)) {
      throw new Error("Domain " + stringify(targetDomain) + " does not match " + stringify(targetDomain));
    }

    return normalizedDomain;
  });
}

var send_send = function send(win, name, data, options) {
  options = options || {};
  var domain = options.domain || constants_WILDCARD;
  var responseTimeout = options.timeout || RES_TIMEOUT;
  var childTimeout = options.timeout || CHILD_WINDOW_TIMEOUT;
  var fireAndForget = options.fireAndForget || false; // $FlowFixMe

  return promise_ZalgoPromise.try(function () {
    validateOptions(name, win, domain);

    if (isAncestor(window, win)) {
      return awaitWindowHello(win, childTimeout);
    }
  }).then(function (_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        actualDomain = _ref3.domain;

    return normalizeDomain(win, domain, actualDomain, {
      send: send
    });
  }).then(function (targetDomain) {
    domain = targetDomain;
    var logName = name === MESSAGE_NAME.METHOD && data && typeof data.name === 'string' ? data.name + "()" : name;

    if (false) {}

    var promise = new promise_ZalgoPromise();
    var hash = name + "_" + uniqueID();

    if (!fireAndForget) {
      var responseListener = {
        name: name,
        win: win,
        domain: domain,
        promise: promise
      };
      addResponseListener(hash, responseListener);
      var reqPromises = windowStore('requestPromises').getOrSet(win, function () {
        return [];
      });
      reqPromises.push(promise);
      promise.catch(function () {
        markResponseListenerErrored(hash);
        deleteResponseListener(hash);
      });
      var totalAckTimeout = isWindowKnown(win) ? ACK_TIMEOUT_KNOWN : ACK_TIMEOUT;
      var totalResTimeout = responseTimeout;
      var ackTimeout = totalAckTimeout;
      var resTimeout = totalResTimeout;
      var interval = safeInterval(function () {
        if (isWindowClosed(win)) {
          return promise.reject(new Error("Window closed for " + name + " before " + (responseListener.ack ? 'response' : 'ack')));
        }

        if (responseListener.cancelled) {
          return promise.reject(new Error("Response listener was cancelled for " + name));
        }

        ackTimeout = Math.max(ackTimeout - RESPONSE_CYCLE_TIME, 0);

        if (resTimeout !== -1) {
          resTimeout = Math.max(resTimeout - RESPONSE_CYCLE_TIME, 0);
        }

        if (!responseListener.ack && ackTimeout === 0) {
          return promise.reject(new Error("No ack for postMessage " + logName + " in " + getDomain() + " in " + totalAckTimeout + "ms"));
        } else if (resTimeout === 0) {
          return promise.reject(new Error("No response for postMessage " + logName + " in " + getDomain() + " in " + totalResTimeout + "ms"));
        }
      }, RESPONSE_CYCLE_TIME);
      promise.finally(function () {
        interval.cancel();
        reqPromises.splice(reqPromises.indexOf(promise, 1));
      }).catch(src_util_noop);
    }

    try {
      send_sendMessage(win, domain, {
        type: MESSAGE_TYPE.REQUEST,
        hash: hash,
        name: name,
        data: data,
        fireAndForget: fireAndForget
      }, {
        on: on_on,
        send: send
      });
    } catch (err) {
      throw new Error("Send request message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
    }

    return fireAndForget ? promise.resolve() : promise;
  });
};
// CONCATENATED MODULE: ./src/public/index.js


// CONCATENATED MODULE: ./src/setup.js






function setup_serializeMessage(destination, domain, obj) {
  return serializeMessage(destination, domain, obj, {
    on: on_on,
    send: send_send
  });
}
function setup_deserializeMessage(source, origin, message) {
  return deserializeMessage(source, origin, message, {
    on: on_on,
    send: send_send
  });
}
function createProxyWindow(win) {
  return new window_ProxyWindow({
    send: send_send,
    win: win
  });
}
function setup_toProxyWindow(win) {
  return window_ProxyWindow.toProxyWindow(win, {
    send: send_send
  });
}
function setup() {
  if (!global_getGlobal().initialized) {
    global_getGlobal().initialized = true;
    setupGlobalReceiveMessage({
      on: on_on,
      send: send_send
    });
    listenForMessages({
      on: on_on,
      send: send_send
    });

    if (true) {
      setupBridge({
        on: on_on,
        send: send_send,
        receiveMessage: receive_receiveMessage
      });
    }

    initHello({
      on: on_on,
      send: send_send
    });
  }
}
function destroy() {
  cancelResponseListeners();
  stopListenForMessages();
  deleteGlobal();
}
// CONCATENATED MODULE: ./src/types.js
// export something to force webpack to see this as an ES module
var src_types_TYPES_0 = true; // eslint-disable-next-line flowtype/require-exact-type
// CONCATENATED MODULE: ./src/clean.js


function cleanUpWindow(win) {
  var requestPromises = windowStore('requestPromises');

  for (var _i2 = 0, _requestPromises$get2 = requestPromises.get(win, []); _i2 < _requestPromises$get2.length; _i2++) {
    var promise = _requestPromises$get2[_i2];
    promise.reject(new Error("Window cleaned up before response")).catch(src_util_noop);
  }
}
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bridge", function() { return src_bridge; });
/* concated harmony reexport Promise */__webpack_require__.d(__webpack_exports__, "Promise", function() { return promise_ZalgoPromise; });
/* concated harmony reexport TYPES */__webpack_require__.d(__webpack_exports__, "TYPES", function() { return src_types_TYPES_0; });
/* concated harmony reexport ProxyWindow */__webpack_require__.d(__webpack_exports__, "ProxyWindow", function() { return window_ProxyWindow; });
/* concated harmony reexport setup */__webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* concated harmony reexport destroy */__webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* concated harmony reexport serializeMessage */__webpack_require__.d(__webpack_exports__, "serializeMessage", function() { return setup_serializeMessage; });
/* concated harmony reexport deserializeMessage */__webpack_require__.d(__webpack_exports__, "deserializeMessage", function() { return setup_deserializeMessage; });
/* concated harmony reexport createProxyWindow */__webpack_require__.d(__webpack_exports__, "createProxyWindow", function() { return createProxyWindow; });
/* concated harmony reexport toProxyWindow */__webpack_require__.d(__webpack_exports__, "toProxyWindow", function() { return setup_toProxyWindow; });
/* concated harmony reexport on */__webpack_require__.d(__webpack_exports__, "on", function() { return on_on; });
/* concated harmony reexport once */__webpack_require__.d(__webpack_exports__, "once", function() { return on_once; });
/* concated harmony reexport send */__webpack_require__.d(__webpack_exports__, "send", function() { return send_send; });
/* concated harmony reexport markWindowKnown */__webpack_require__.d(__webpack_exports__, "markWindowKnown", function() { return markWindowKnown; });
/* concated harmony reexport cleanUpWindow */__webpack_require__.d(__webpack_exports__, "cleanUpWindow", function() { return cleanUpWindow; });









var src_bridge;

if (true) {
  src_bridge = {
    setupBridge: setupBridge,
    openBridge: openBridge,
    linkWindow: linkWindow,
    linkUrl: linkUrl,
    isBridge: isBridge,
    needsBridge: needsBridge,
    needsBridgeForBrowser: needsBridgeForBrowser,
    hasBridge: hasBridge,
    needsBridgeForWin: needsBridgeForWin,
    needsBridgeForDomain: needsBridgeForDomain,
    destroyBridges: destroyBridges
  };
}

if (true) {
  setup();
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=post-robot.ie.js.map