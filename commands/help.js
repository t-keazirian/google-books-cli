const menus = {
	main: `
    gbooks-cli [command] --flag <options>

    search --keyword yourKeywordHere ........ search for 5 books with given keyword 
    - please use quotes for keyword with spaces

    save --id yourIdHere ........ save selected book with ID to reading list
    
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
