'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let fetchData = (() => {
  var ref = _asyncToGenerator(function* (path) {
    let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    options = Object.assign(_config2.default, options);

    let lastLength = 0;
    let objects = [];
    let page = 0;
    do {
      const response = yield (0, _fetch2.default)(options.apiUrl + path(page), options.userAgent).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response;
      });

      if (!response) {
        break;
      }

      lastLength = response.length;
      objects = objects.concat(response);
      page++;
    } while (lastLength === options.maxEntriesPerPage);

    return objects;
  });

  return function fetchData(_x, _x2) {
    return ref.apply(this, arguments);
  };
})();

var _fetch = require('./lib/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

exports.default = options => path => new Promise(resolve => {
  resolve(fetchData(path, options || {}));
});

module.exports = exports['default'];