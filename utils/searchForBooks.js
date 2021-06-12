// npm package that allows for fetch calls to APIs
const fetch = require('node-fetch');

module.exports = keyword => {
	const results = fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
	)
		// turn response into JSON data
		.then(response => response.json())
		.then(data => {
			// loop through API data returned
			data.items.forEach(book => {
				console.log(`Id: ${book.id}`);
				console.log(`Title: ${book.volumeInfo.title}`);
				console.log(`Author(s): ${book.volumeInfo.authors}`);
				console.log(`Publisher: ${book.volumeInfo.publisher}`);
				console.log('--------------');
			});
		})
		.catch(err => {
			console.log(err);
		});
	return results;
};
