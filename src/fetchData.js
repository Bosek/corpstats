import fetch from './lib/fetch';
import config from './config';

async function fetchData(path, options = {}) {
  options = Object.assign(config, options);

  let lastLength = 0;
  let objects = [];
  let page = 0;
  do {
    const response = await fetch(options.apiUrl + path(page), options.userAgent)
    .then(response => response.json())
    .then(response => response);

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

export default options => path => new Promise(resolve => {
  resolve(fetchData(path, options || {}));
});
