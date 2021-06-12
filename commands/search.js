const searchForBooks = require('../utils/searchForBooks')

module.exports = args => {
  try {
    const keyword = args.keyword
    const books = searchForBooks(keyword)
    console.log(books);

  }
  catch (err) {
    console.error(err)
  }
}

