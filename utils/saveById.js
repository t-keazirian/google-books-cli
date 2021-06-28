const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');

module.exports = async id => {
	try {
		const idResponse = await fetch(
			`https://www.googleapis.com/books/v1/volumes/${id}`
		);
		const idData = await idResponse.json();
		let newBook = `\nId: ${idData.id}\nTitle: ${idData.volumeInfo.title}\nAuthor(s): ${idData.volumeInfo.authors}\nPublisher: ${idData.volumeInfo.publisher}\n`;
		return fs.promises
			.appendFile('./reading-list', newBook)
			.then(() =>
				console.log(
					chalk.green`${newBook}\n` +
						chalk.green.bold.underline`${idData.volumeInfo.title}` +
						chalk.blue` has been added to your book list!\n`
				)
			);
	} catch (err) {
		console.log(
			chalk.red`An error occurred! Please ensure you have pasted the correct book ID and that the API is working.\nDeveloper Error Notes: ${err.message}. `
		);
	}
};
