'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function chainIDs(id) {
  if (Array.isArray(id)) {
    id = id.join(',');
  }
  return id;
}

function getPath(sub, sub2, id, year, month, page) {
  let url = `${ sub }/${ sub2 }/${ chainIDs(id) }/`;

  // Default page for ZKillboard is 1
  page++;

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
      Kills: (year, month) => page => getPath('kills', 'allianceID', id, year, month, page),
      Losses: (year, month) => page => getPath('losses', 'allianceID', id, year, month, page)
    };
  },
  Character: id => {
    return {
      Kills: (year, month) => page => getPath('kills', 'characterID', id, year, month, page),
      Losses: (year, month) => page => getPath('losses', 'characterID', id, year, month, page)
    };
  },
  Corporation: id => {
    return {
      Kills: (year, month) => page => getPath('kills', 'corporationID', id, year, month, page),
      Losses: (year, month) => page => getPath('losses', 'corporationID', id, year, month, page)
    };
  }
};
module.exports = exports['default'];