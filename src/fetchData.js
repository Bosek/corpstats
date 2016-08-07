import fetch from './lib/fetch';
import config from './config';

async function fetchData(path, options = {}) {
  options = Object.assign(config, options);

  let lastLength = 0;
  let objects = [];
  let page = options.startPage;
  do {
    const obj = path(page);
    const url = options.apiUrl + obj.URL;

    if (options.debug) {
      console.log(url);
    }

    const response = await fetch(url, options.userAgent)
    .then(response => response.json())
    .then(response => response.map((item) => new obj.Model(item)));

    if (!response) {
      break;
    }

    lastLength = response.length;
    objects = objects.concat(response);
    page++;
  }
  while (lastLength === options.maxEntriesPerPage);

  return objects;
}

export default (path, options) => new Promise(resolve => {
  resolve(fetchData(path, options || {}));
});
