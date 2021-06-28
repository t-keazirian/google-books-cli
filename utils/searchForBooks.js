const fetch = require('node-fetch');
const chalk = require('chalk');

// to use the different search options, change the code on line 42 to either fullSearch or titleDescription
const searchOptions = {
	fullSearch: data => {
		let output = '';
		data.items.forEach(book => {
			output +=
				chalk.blue.bold`Id: ${book.id}\n` +
				chalk.green`Title: ` +
				chalk.green.underline.bold`${book.volumeInfo.title}\n` +
				chalk.green`Author(s): ` +
				chalk.green.bold`${book.volumeInfo.authors}\n` +
				chalk.green`Publisher: ` +
				chalk.green`${book.volumeInfo.publisher}\n` +
				chalk.gray`--------------\n`;
		});
		console.log(chalk.bold.gray`\nYour Search Results:\n\n` + `${output}`);
	},
	titleDescription: data => {
		let output = '';
		data.items.forEach(book => {
			output +=
				chalk.blue.bold`Id: ${book.id}\n` +
				chalk.green.bold`Title: ` +
				chalk.green.underline`${book.volumeInfo.title}\n` +
				chalk.green.bold`Description:` +
				chalk.green` ${book.volumeInfo.description}\n` +
				chalk.gray`--------------\n`;
		});
		console.log(chalk.bold.gray`\nYour Search Results:\n\n` + `${output}`);
	},
};

module.exports = async keyword => {
	try {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
		);
		const data = await response.json();
		searchOptions.fullSearch(data);
	} catch (err) {
		console.log(
			chalk.red`An error occurred! Please check that the API is working and try again.\nDeveloper Error Notes: ${err.message}. `
		);
	}
};
