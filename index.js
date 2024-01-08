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

    function createCardProperty(text, isTitle=false) {
        let property = document.createElement('span');
        property.classList.add('card-property');
        if (isTitle) property.classList.add('book-title');
        property.textContent = text;
        card.append(property);
    }

    createCardProperty(title, true);
    createCardProperty(`By ${author}`);
    createCardProperty(`Total Pages: ${pages}`);
    createCardProperty(`Status: ${read ? 'Read' : 'Not Read'}`);
}

function addBookToLibrary() {

}

function displayBooks() {

}

createBookCard('Frankenstein', 'Mary Shelley', 288, true);