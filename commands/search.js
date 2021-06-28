const searchForBooks = require('../utils/searchForBooks');
const chalk = require('chalk');

// module.exports = args => {
// 	const keyword = args.keyword;
// 	if (!keyword || keyword === undefined || keyword === true) {
// 		console.log(
// 			chalk.red`Something went wrong! Type 'gbooks-cli help' for valid commands. \nYour keyword flag should be followed by a search term. If your search term is more than one word, please use quotation marks.\nExample: 'gbooks-cli search --keyword 'stephen king'`
// 		);
// 		return;
// 	}
// 	return searchForBooks(keyword).then(console.log).catch(console.log);
// };

module.exports = args => {
	const keyword = args.keyword;
	if (!keyword || keyword === undefined || keyword === true) {
		console.log(
			chalk.red`Something went wrong! Type 'gbooks-cli help' for valid commands. \nYour keyword flag should be followed by a search term. If your search term is more than one word, please use quotation marks.\nExample: 'gbooks-cli search --keyword 'stephen king'`
		);
		return;
	}
	try {
		searchForBooks(keyword)
	} catch (err) {
		console.log(err);
	}
};
