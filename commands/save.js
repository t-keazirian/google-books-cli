const chalk = require('chalk');
const saveById = require('../utils/saveById');

module.exports = args => {
	const id = args.id;
	if (!id) {
		console.log(
			chalk.red`Incorrect book ID. Please check that your ID is correct and try again.`
		);
		return;
	} else {
		saveById(id).then(console.log).catch(console.log);
	}
};
