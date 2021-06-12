# 8th Light Application Coding Challenge

## This command line application should allow you to:

* Type in a query and display a list of 5 books matching that query.
* Each item in the list should include the book's author, title, and publishing company.
* A user should be able to select a book from the five displayed to save to a “Reading List”
* View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books' account features.

## Steps to create this CLI:
1. ``` npm init ``` to create a package.json file where we will add our dependencies used for the project
2. install dependencies: 
* ``` npm i node-fetch ``` for fetch calls to API (see documentation below)
* ```npm i minimist ``` - argument parser (see documentation below)
3. create bin directory: ``` mkdir bin ```
4. ``` cd bin ```
5. inside bin directory, create file for the command line prompt we will be using: ``` touch gbooks-cli ```
6. type into command line at root ``` chmod +x bin/gbooks-cli ``` - this is a "shebang" and will allow us to execute the commands in our command line for this application
7. type ``` npm link ``` in the root; this will "symlink the binary file to the system path, making it accessible from anywhere by running ``` gbooks-cli ``` " (see sources below)

### How to Use:

#### To Search for Books:
* in command line prompt, type ``` gbooks-cli search --keyword yourSearchTermHere``` (changing ``` yourSearchTerm ``` here to the keyword you are searching)
* if your search includes spaces, please use quotation marks
example: ``` gbooks-cli search --keyword "stephen king" ```
* Command line will display each book's ID, title, author, and publisher

#### To Save a Book To Reading List:
* locate and copy the ``` id ``` of the book you would like to save to your reading list (the ``` id ``` will be in your search results)
* in command line prompt, type ``` gbooks-cli save --id yourBookId``` (changing ``` yourBookId ``` to the ID you have selected from the search list)
* your new book's information will save to your ``` reading-list ``` file


### Helpful Resources:

* [Creating a Real World CLI](https://timber.io/blog/creating-a-real-world-cli-app-with-node/) - this was the most helpful resource
* [Google Books API Documentation](https://developers.google.com/books/docs/overview)
* [Node.js fs documentation](https://nodejs.org/api/fs.html)
* [Command line app example](https://pusher.com/tutorials/node-command-line-app)
* [NPM Minimist Documentation](https://www.npmjs.com/package/minimist)

### New Things Learned:
* how to create a command line application
* using shebang's in my project
* using ``` npm link ``` mentioned above
* creating different commands and flags and executing all in the command line