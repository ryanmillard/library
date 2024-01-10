const addBookButton = document.getElementById('add-book-btn');
const overlay = document.getElementById('overlay');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBookCard(title, author, pages, read) {
    let booksContainer = document.getElementById('books-container');

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

    let btnContainer = document.createElement('div');
    btnContainer.classList.add('card-btn-container');
    card.append(btnContainer);

    let readBtn = document.createElement('button');
    readBtn.classList.add('card-btn', 'read-card-btn');
    readBtn.textContent = 'Mark Read';
    btnContainer.append(readBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('card-btn', 'delete-card-btn');
    deleteBtn.textContent = 'Delete';
    btnContainer.append(deleteBtn);

    if (read) {
        card.classList.add('book-card-read');
        readBtn.textContent = 'Mark Unread';   
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();
}

function displayBooks() {
    let booksContainer = document.getElementById('books-container');
    booksContainer.childNodes.forEach((child) => booksContainer.removeChild(child));
    
    console.log(myLibrary);
    myLibrary.forEach((book) => {
        console.log(book);
        createBookCard(book.title, book.author, book.pages, book.read);
    });
}

addBookToLibrary('Frankenstein', 'Mary Shelley', 288, true);
addBookToLibrary('Nineteen Eighty-Four', 'George Orwell', 328, false);

function closeAddBookDialog() {
    let addBookDialog = document.getElementById('add-book-dialog');
    let overlay = document.getElementById('overlay');
    addBookDialog.style.display = 'none';
    overlay.style.display = 'none';
}

addBookButton.addEventListener('click', () => {
    let addBookDialog = document.getElementById('add-book-dialog');
    let overlay = document.getElementById('overlay');
    addBookDialog.style.display = 'flex';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    closeAddBookDialog();
});