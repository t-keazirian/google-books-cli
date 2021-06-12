const fs = require('fs');
const fetch = require('node-fetch');

module.exports = id => {
	const book = fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
		// turn response into JSON data
		.then(response => response.json())
		.then(data => {
			let newBook = `\nTitle: ${data.volumeInfo.title}\nAuthor(s): ${data.volumeInfo.authors}\nPublisher: ${data.volumeInfo.publisher}\n`;
			console.log(newBook);
			fs.appendFile('./reading-list', newBook, err => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(
					`${data.volumeInfo.title} has been added to your book list!`
				);
			});
		})
		.catch(err => {
			console.log(err);
		});
	return book;
};