const saveById = require('../utils/saveById');

module.exports = args => {
  try {
    const id = args.id
    const bookToSave = saveById(id)
    console.log(bookToSave);

  }
  catch (err) {
    console.error(err)
  }
}

