const chalk = require('chalk');

const menus = {
	main: chalk.red`
    gbooks-cli [command] --flag <options>

    search --keyword yourKeywordHere ........ search for 5 books with given keyword 
    - please use quotes for keyword with spaces

    save --id yourIdHere ........ save selected book with ID to reading list

    list ........ print your reading list

    help ........ show help menu for a command
  `,
	search: chalk.greenBright`
    gbooks-cli search --keyword <options>
    - please use quotes for keyword with spaces
    example: gbooks-cli search --keyword 'stephen king'
  `,
	save: chalk.blue`
  gbooks-cli save --id <idGoesHere>
  `,
  list: chalk.yellow`
  gbooks-cli list
  `
};

module.exports = args => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
