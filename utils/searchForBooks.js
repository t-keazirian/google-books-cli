// const fetch = require('node-fetch');

// module.exports = keyword => {
// 	return fetch(
// 			`https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
// 		)
// 			// turn response into JSON data
// 			.then(response => response.json())
// 			.then(data => {
// 				// loop through API data returned
// 				let output = '';
// 				data.items.forEach(book => {
// 					output +=
// 					`\nId: ${book.id}\nTitle: ${book.volumeInfo.title}\n`
// 					// console.log(`Id: ${book.id}`);
// 					// console.log(`Title: ${book.volumeInfo.title}`);
// 					// console.log(`Author(s): ${book.volumeInfo.authors}`);
// 					// console.log(`Publisher: ${book.volumeInfo.publisher}`);
// 					// console.log('--------------');
// 				});
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			})
// };

const fetch = require('node-fetch');

module.exports = keyword => {
	return fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
	)
		.then(response => response.json())
		.then(data => {
			let output = '';
			data.items.forEach(book => {
				output +=
					`Id: ${book.id}\n` +
					`Title: ${book.volumeInfo.title}\n` +
					`Author(s): ${book.volumeInfo.authors}\n` +
					`Publisher: ${book.volumeInfo.publisher}\n` +
					'--------------\n';
			});
			return output;
		});
};
