const { createReadStream } = require('fs');

module.exports = () => {
	createReadStream('./reading-list').pipe(process.stdout);
};
