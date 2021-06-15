const saveById = require('../utils/saveById');

module.exports = args => {
	const id = args.id;
	saveById(id).then((console.log)).catch(console.log);
};
