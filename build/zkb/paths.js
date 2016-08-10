'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kill = require('./models/kill');

var _kill2 = _interopRequireDefault(_kill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function chainIDs(id) {
  if (Array.isArray(id)) {
    id = id.join(',');
  }
  return id;
}

function getPath(sub, sub2, id, year, month, page) {
  let url = `${ sub }/${ sub2 }/${ chainIDs(id) }/`;

  if (year) {
    url += `year/${ year }/`;
  }
  if (month) {
    url += `month/${ month }/`;
  }
  if (page) {
    url += `page/${ page }/`;
  }
  return url;
}

/* eslint-disable arrow-body-style */
exports.default = {
  Alliance: id => {
    return {
      Kills: (year, month) => page => {
        return {
          URL: getPath('kills', 'allianceID', id, year, month, page),
          Model: _kill2.default
        };
      },
      Losses: () => {
        throw new Error('Not yet implemented.');
      }
    };
  },
  Character: id => {
    return {
      Kills: (year, month) => page => {
        return {
          URL: getPath('kills', 'characterID', id, year, month, page),
          Model: _kill2.default
        };
      },
      Losses: () => {
        throw new Error('Not yet implemented.');
      }
    };
  },
  Corporation: id => {
    return {
      Kills: (year, month) => page => {
        return {
          URL: getPath('kills', 'corporationID', id, year, month, page),
          Model: _kill2.default
        };
      },
      Losses: () => {
        throw new Error('Not yet implemented.');
      }
    };
  }
};
module.exports = exports['default'];