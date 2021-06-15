const minimist = require('minimist');

module.exports = () => {
	const args = minimist(process.argv.slice(2));
	let cmd = args._[0] || 'help';

	if (args.help || args.h) {
		cmd = 'help';
	}

	switch (cmd) {
		case 'search':
			require('./commands/search')(args);
			break;
		case 'save':
			require('./commands/save')(args);
			break;
		case 'help':
			require('./commands/help')(args);
			break;
		case 'list':
			require('./commands/list')(args);
      break;
		default:
			console.error(`${cmd} is not a valid command!`);
			break;
	}
};

// module.exports = () => {
//   console.log('Hello world');
// }
