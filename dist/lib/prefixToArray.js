"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (prefix, object) => {
  const newObject = {};
  Object.keys(object).forEach(key => {
    if (key.search(prefix) === 0) {
      newObject[key.slice(prefix.length, key.length)] = object[key];
    }
  });
  return newObject;
};

module.exports = exports["default"];