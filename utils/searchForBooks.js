const fetch = require('node-fetch');
const chalk = require('chalk');

module.exports = async keyword => {
	try {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
		)
		const data = await response.json();
		let output = '';
			data.items.forEach(book => {
				output +=
					chalk.blue`Id: ${book.id}\n` +
					chalk.green`Title: ${book.volumeInfo.title}\n` +
					chalk.green`Author(s): ${book.volumeInfo.authors}\n` +
					chalk.green`Publisher: ${book.volumeInfo.publisher}\n` +
					chalk.gray`--------------\n`;
			});
			console.log(chalk.bold.gray`\nYour Search Results:\n\n` + `${output}`)
	} catch (err) {
		console.log(chalk.red`An error occurred! Please check that the API is working and try again. Developer Error Notes: ${err.message}. `);
		return;
	}
};