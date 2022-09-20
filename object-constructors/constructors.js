function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ', ' + read
    }
}

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', '280 pages', 'have read.') 
console.log(hobbit.info())


