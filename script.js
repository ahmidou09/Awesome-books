class BookList {
  constructor() {
    this.form = document.querySelector('.form');
    this.titleInput = document.querySelector('.titleInput');
    this.authorInput = document.querySelector('.authorInput');
    this.listBooks = document.querySelector('.listBooks');

    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.renderBooks();
    this.form.addEventListener('submit', this.handleFormSubmit);
  }

  renderBooks = () => {
    this.listBooks.innerHTML = '';
    this.books.forEach((book, index) => {
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
        this.removeBook(index);
      });

      bookDiv.appendChild(spanTitle);
      bookDiv.appendChild(spanAuthor);
      bookDiv.appendChild(removeButton);

      this.listBooks.appendChild(bookDiv);
    });
  };

  removeBook = (index) => {
    this.books = this.books.filter((book, i) => index !== i);

    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const title = this.titleInput.value;
    const author = this.authorInput.value;

    if (title && author) {
      const itemBook = {
        title,
        author,
      };

      this.books.push(itemBook);

      localStorage.setItem('books', JSON.stringify(this.books));

      this.titleInput.value = '';
      this.authorInput.value = '';

      this.renderBooks();
    }
  };
}

const book = new BookList();

console.log(book);
