const chalk = require('chalk');

const menus = {
	main: chalk.red`
  gbooks-cli [command] --flag <options>

  List of available commands:

  SEARCH: search --keyword yourKeywordHere ........ search for 5 books with given keyword 
  - please use quotes for keyword with spaces

  SAVE: save --id yourIdHere ........ save selected book with ID to reading list

  LIST: list ........ print your reading list

  HELP: help ........ show help menu for a command

  * for help for individual commands and examples, type 'gbooks-cli help' + either: search, save, or list *
  `,
	search: chalk.green`
    gbooks-cli search --keyword <options>
    * please use quotes for keyword with spaces *
    Example: gbooks-cli search --keyword 'stephen king'
  `,
	save: chalk.green`
  gbooks-cli save --id <idGoesHere>
  Example: gbooks-cli save --id pXISEAAAQBAJ
  `,
	list: chalk.green`
  gbooks-cli list
  `,
};

module.exports = args => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
