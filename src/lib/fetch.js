import fetch from 'node-fetch';

export default (path, userAgent) => fetch(path, {
  headers: {
    'User-Agent': userAgent,
  },
});
