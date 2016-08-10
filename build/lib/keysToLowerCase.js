"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function keysToLowerCase(obj) {
  if (obj instanceof Array) {
    return obj.map(object => keysToLowerCase(object));
  } else if (obj instanceof Object) {
    const keys = Object.keys(obj);
    let n = keys.length;
    const newObj = {};
    while (n--) {
      const key = keys[n];
      const val = obj[key];
      newObj[key.toLowerCase()] = keysToLowerCase(val);
    }
    return newObj;
  }

  return obj;
}

exports.default = keysToLowerCase;
module.exports = exports["default"];