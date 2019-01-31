/*! @ryanmorr/tagged v0.1.2 | https://github.com/ryanmorr/tagged */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tagged = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tagged;

/**
 * Create a tagged template literal function
 * by providing a callback function to be
 * called with the resulting string. Provide
 * a function as an optional second parameter
 * to mutate each value passed to template
 * literal
 *
 * @param {Function} callback
 * @param {Function} mutator (optional)
 * @return {Function}
 * @api public
 */
function tagged(callback) {
  var mutator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (val) {
    return val;
  };
  return function (strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return callback(strings.raw.reduce(function (acc, str, i) {
      return acc + mutator(values[i - 1]) + str;
    }));
  };
}

module.exports = exports.default;

},{}]},{},[1])(1)
});

