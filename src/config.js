import pkg from '../package';

export default {
  apiUrl: 'https://zkillboard.com/api/',
  debug: false,
  maxEntriesPerPage: 200,
  startPage: 1,
  userAgent: `corpstats v${pkg.version} (bosektom@gmail.com) public`,
};
