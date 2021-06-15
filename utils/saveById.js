const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');

module.exports = id => {
	return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
		.then(response => response.json())
		.then(data => {
			let newBook = `\nId: ${data.id}\nTitle: ${data.volumeInfo.title}\nAuthor(s): ${data.volumeInfo.authors}\nPublisher: ${data.volumeInfo.publisher}\n`;
			return fs.promises
				.appendFile('./reading-list', newBook)
				.then(
					() =>
						chalk.yellow`${newBook}\n` + chalk.blue`${data.volumeInfo.title} has been added to your book list!\n`
				);
		});
};
