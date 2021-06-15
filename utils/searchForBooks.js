const fetch = require('node-fetch');
const chalk = require('chalk');

module.exports = keyword => {
	return fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
	)
		.then(response => response.json())
		.then(data => {
			let output = '';
			data.items.forEach(book => {
				output +=
					chalk.cyanBright`Id: ${book.id}\n` +
					chalk.yellow`Title: ${book.volumeInfo.title}\n` +
					chalk.yellow`Author(s): ${book.volumeInfo.authors}\n` +
					chalk.yellow`Publisher: ${book.volumeInfo.publisher}\n` +
					chalk.magenta`--------------\n`;
			});
			
			// return output;
			return chalk.bold.greenBright`\nYour Book Search Results:\n\n`+`${output}`
		});
};
