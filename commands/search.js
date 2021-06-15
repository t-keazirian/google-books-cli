const searchForBooks = require('../utils/searchForBooks');

module.exports = args => {
	const keyword = args.keyword;
	return searchForBooks(keyword).then(console.log).catch(console.log);
};
