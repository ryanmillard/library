const addBookButton = document.getElementById('add-book-btn');
const addBookCancelButton = document.getElementById('add-book-cancel');
const overlay = document.getElementById('overlay');

const addBookForm = document.forms["add_book"];

var myLibrary = [];

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
    createCardProperty(`By: ${author}`);
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
        readBtn.textContent = 'Mark Unread';  
        readBtn.style.backgroundColor = 'var(--card-green)'; 
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary[myLibrary.length-1])
    createBookCard(title, author, pages, read);
}

addBookToLibrary('Frankenstein', 'Mary Shelley', 288, true);
addBookToLibrary('Nineteen Eighty-Four', 'George Orwell', 328, false);

function openAddBookDialog() {
    let addBookDialog = document.getElementById('add-book-dialog');
    let overlay = document.getElementById('overlay');
    addBookDialog.style.display = 'block';

    setTimeout(function() {
        addBookDialog.style.transform = 'translate(-50%, -50%) scale(1)';
        overlay.style.display = 'block';
    }, 100);
}

function closeAddBookDialog() {
    let addBookDialog = document.getElementById('add-book-dialog');
    let overlay = document.getElementById('overlay');
    addBookDialog.style.transform = 'translate(-50%, -50%) scale(0)';
    addBookDialog.classList.remove('active-dialog');
    overlay.style.display = 'none';

    setTimeout(function() {
        addBookDialog.style.display = 'none';
    }, 200);
}

addBookForm.onsubmit = function(event) {
    console.log("submitted!!")
    let title = document.getElementById('add-book-title').value;
    let author = document.getElementById('add-book-author').value;
    let pages = parseInt(document.getElementById('add-book-pages').value);
    let isRead = document.getElementById('add-book-is-read').checked;
    
    // Validate input
    if (!(title.length === 0 || author.length === 0 || pages === NaN)) {
        addBookToLibrary(title, author, pages, isRead);
    }

    // Reset form and close it
    event.preventDefault(); // Prevents page from reloading
    closeAddBookDialog();
    addBookForm.reset();
}

addBookButton.addEventListener('click', () => openAddBookDialog());
overlay.addEventListener('click', () => closeAddBookDialog());
addBookCancelButton.addEventListener('click', () => closeAddBookDialog());