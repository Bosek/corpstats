import Kill from './models/kill';

function chainIDs(id) {
  if (Array.isArray(id)) {
    id = id.join(',');
  }
  return id;
}

function getPath(sub, sub2, id, year, month, page) {
  let url = `${sub}/${sub2}/${chainIDs(id)}/`;

  if (year) {
    url += `year/${year}/`;
  }
  if (month) {
    url += `month/${month}/`;
  }
  if (page) {
    url += `page/${page}/`;
  }
  return url;
}

/* eslint-disable arrow-body-style */
export default {
  Alliance: id => {
    return {
      Kills: (year, month) => page => {
        return {
          URL: getPath('kills', 'allianceID', id, year, month, page),
          Model: Kill,
        };
      },
      Losses: () => {
        throw new Error('Not yet implemented.');
      },
    };
  },
  Character: id => {
    return {
      Kills: (year, month) => page => {
        return {
          URL: getPath('kills', 'characterID', id, year, month, page),
          Model: Kill,
        };
      },
      Losses: () => {
        throw new Error('Not yet implemented.');
      },
    };
  },
  Corporation: id => {
    return {
      Kills: (year, month) => page => {
        return {
          URL: getPath('kills', 'corporationID', id, year, month, page),
          Model: Kill,
        };
      },
      Losses: () => {
        throw new Error('Not yet implemented.');
      },
    };
  },
};
