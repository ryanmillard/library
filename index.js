const myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
}

function createBookCard(title, author, pages, read) {
    let booksContainer = document.getElementsByClassName('books-container')[0];
    
    let card = document.createElement('div');
    card.classList.add('book-card');
    booksContainer.appendChild(card);

    let bookTitle = document.createElement('span');
    bookTitle.classList.add('card-property', 'book-title');
    bookTitle.textContent = title;
    card.appendChild(bookTitle);

    let bookAuthor = document.createElement('span');
    bookAuthor.classList.add('card-property');
    bookAuthor.textContent = `By: ${author}`;
    card.appendChild(bookAuthor);

    let bookPages = document.createElement('span');
    bookPages.classList.add('card-property');
    bookPages.textContent = `Total Pages: ${pages}`;
    card.appendChild(bookPages);

    let bookStatus = document.createElement('span');
    bookStatus.classList.add('card-property');
    bookStatus.textContent = `Status: ${read ? 'Read' : 'Not Read'}`;
    card.appendChild(bookStatus);
}

function addBookToLibrary() {

}

function displayBooks() {

}

createBookCard('Frankenstein', 'Mary Shelley', 288, true);