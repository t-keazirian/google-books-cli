# 8th Light Application Coding Challenge

## This command line application should allow you to:

- Type in a query and display a list of 5 books matching that query.
- Each item in the list should include the book's author, title, and publishing company.
- A user should be able to select a book from the five displayed to save to a “Reading List”
- View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books' account features.

## Steps to Create this CLI:

1. `npm init` to create a package.json file where we will add our dependencies used for the project
2. install dependencies:

- `npm i node-fetch` for fetch calls to API (see documentation below)
- `npm i minimist ` - argument parser (see documentation below)
- `npm i chalk` - to add some flare and color to your command line interface! (see documentation below)

3. create bin directory: `mkdir bin`
4. `cd bin`
5. inside bin directory, create file for the command line prompt we will be using: `touch gbooks-cli`
6. type into command line at root `chmod +x bin/gbooks-cli` - this is a "shebang" and will allow us to execute the commands in our command line for this application
7. type `npm link` in the root; this will "symlink the binary file to the system path, making it accessible from anywhere by running `gbooks-cli` " (this came from the first source listed below)

### How to Clone and Use In Local Environment:

1. Open your command line, navigate to the folder where you would like to store this project, and type in the following to clone this repository:

`git clone https://github.com/t-keazirian/google-books-cli.git`

2. `npm i` to install the dependencies used in this project 

See below for detailed command line instructions...

#### Help:

- in command line prompt, type `gbooks-cli help` for a list of the commands this application uses and how to use them properly

#### To Search for Books:

- in command line prompt, type ` gbooks-cli search --keyword yourSearchTermHere` (changing `yourSearchTerm` here to the book title, keyword, or author you are searching for)
- if your search includes spaces, please use quotation marks

Example with One Word Search: `gbooks-cli search --keyword ferrets`

Example with Quotation Marks: `gbooks-cli search --keyword "stephen king"`

- Command line will display each book's ID, title, author, and publisher

- If you would like to display the Title and Description only, change the method in `searchForBooks.js` from `searchOptions.fullSearch(data)` to `searchOptions.titleDescription(data)`

- You can also feel free to add other methods to the searchOptions object in `searchForBooks.js` to display different data from the API depending on your needs

#### To Save a Book To Reading List:

- locate and copy (highlight the ID and use cmd+c on Mac, ctrl+c on Windows) the `id` of the book you would like to save to your reading list (the `id` will be in your search results in blue)
- in command line prompt, type ` gbooks-cli save --id yourBookId` (changing `yourBookId` to the ID you have selected from the search list using cmd+v on Mac, ctrl+v on Windows to paste the id)
- your new book's information will save to your `reading-list.txt` file

#### To Print Your Reading List:

- in your command line prompt, type `gbooks-cli list`
- all books saved to your reading list will display in your command line

### Helpful Resources:

- [Creating a Real World CLI](https://timber.io/blog/creating-a-real-world-cli-app-with-node/) - this was the most helpful resource which taught me most of what I did for this project
- [Google Books API Documentation](https://developers.google.com/books/docs/overview)
- [Node.js fs documentation](https://nodejs.org/api/fs.html)
- [Command line app example](https://pusher.com/tutorials/node-command-line-app)
- [NPM Minimist Documentation](https://www.npmjs.com/package/minimist)
- [NPM Chalk Documentation](https://www.npmjs.com/package/chalk)

### New Things Learned:

- how to create a command line application
- using shebang in my project
- using `npm link` mentioned above
- creating different commands and flags and executing all in the command line

### To Add in the Future:

- Testing
