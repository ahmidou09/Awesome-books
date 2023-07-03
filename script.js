const form = document.querySelector(".form");
const titleInput = document.querySelector(".titleInput");
const authorInput = document.querySelector(".authorInput");
const addButton = document.querySelector(".addButton");
const listBooks = document.querySelector(".listBooks");

let books = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;

  if (title && author) {
    const itemBook = {
      title,
      author,
    };

    books.push(itemBook);

    titleInput.value = "";
    authorInput.value = "";

    listBooks.innerHTML = "";

    books.forEach((book, index) => {
      const bookDiv = document.createElement("ul");
      bookDiv.classList.add("book");

      const spanTitle = document.createElement("li");
      spanTitle.innerText = `Title: ${book.title}`;

      const spanAuthor = document.createElement("li");
      spanAuthor.innerText = `Author: ${book.author}`;

      const removeButton = document.createElement("button");
      removeButton.innerHTML = "remove";
      removeButton.classList.add("removeBook");

      bookDiv.appendChild(spanTitle);
      bookDiv.appendChild(spanAuthor);
      bookDiv.appendChild(removeButton);

      listBooks.appendChild(bookDiv);
    });
  }
});
