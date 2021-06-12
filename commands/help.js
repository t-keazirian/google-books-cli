const menus = {
	main: `
    gbooks-cli [command] <options>

    search ........ search for a book with given keyword
    save ......... save selected book with ID to reading list
    help ........ show help menu for a command
  `,
	search: `
    gbooks-cli search <options>
  `,
	save: `
  gbooks-cli save <options>
  `,
};

module.exports = args => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
