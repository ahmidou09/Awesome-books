const form = document.querySelector('.form');
const titleInput = document.querySelector('.titleInput');
const authorInput = document.querySelector('.authorInput');
const listBooks = document.querySelector('.listBooks');

let books = JSON.parse(localStorage.getItem('books')) || [];

listBooks.innerHTML = '';

function removeBook(index) {
  const arr = books.filter((book, i) => {
    if (index !== i) return book;
    return null;
  });

  books = arr;

  localStorage.setItem('books', JSON.stringify(books));

  listBooks.innerHTML = '';

  books.forEach((book, index) => {
    const bookDiv = document.createElement('ul');
    bookDiv.classList.add('book');

    const spanTitle = document.createElement('li');
    spanTitle.innerText = `Title: ${book.title}`;

    const spanAuthor = document.createElement('li');
    spanAuthor.innerText = `Author: ${book.author}`;

    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.classList.add('removeBook');

    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    bookDiv.appendChild(spanTitle);
    bookDiv.appendChild(spanAuthor);
    bookDiv.appendChild(removeButton);

    listBooks.appendChild(bookDiv);
  });
}

books.forEach((book, index) => {
  const bookDiv = document.createElement('ul');
  bookDiv.classList.add('book');

  const spanTitle = document.createElement('li');
  spanTitle.innerText = `Title: ${book.title}`;

  const spanAuthor = document.createElement('li');
  spanAuthor.innerText = `Author: ${book.author}`;

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.classList.add('removeBook');

  removeButton.addEventListener('click', () => {
    removeBook(index);
  });

  bookDiv.appendChild(spanTitle);
  bookDiv.appendChild(spanAuthor);
  bookDiv.appendChild(removeButton);

  listBooks.appendChild(bookDiv);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;

  if (title && author) {
    const itemBook = {
      title,
      author,
    };

    books.push(itemBook);

    localStorage.setItem('books', JSON.stringify(books));

    titleInput.value = '';
    authorInput.value = '';

    listBooks.innerHTML = '';

    books.forEach((book, index) => {
      const bookDiv = document.createElement('ul');
      bookDiv.classList.add('book');

      const spanTitle = document.createElement('li');
      spanTitle.innerText = `Title: ${book.title}`;

      const spanAuthor = document.createElement('li');
      spanAuthor.innerText = `Author: ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'remove';
      removeButton.classList.add('removeBook');

      removeButton.addEventListener('click', () => {
        removeBook(index);
      });

      bookDiv.appendChild(spanTitle);
      bookDiv.appendChild(spanAuthor);
      bookDiv.appendChild(removeButton);

      listBooks.appendChild(bookDiv);
    });
  }
});
