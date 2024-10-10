class Book {
  #title;
  #author;
  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }
  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }

  toString() {
    return `${this.#author} is author of "${this.#title}"`;
  }

  isTheSameBook(book) {
    const { title, author } = book;
    return this.#title === title && this.#author === author;
  }
}

class LibraryBookBase extends Book {
  #bookId;
  constructor(title, author, bookId) {
    super(title, author);
    this.#bookId = bookId;
  }

  get bookId() {
    return this.#bookId;
  }

  toString() {
    return `${this.title}'s book ID is ${this.#bookId},author ${this.author}`;
  }
}

const book1 = new LibraryBookBase("Misterious Island", "Jules Verne",1256);
const book2 = new LibraryBookBase("A Study in Scarlet", "Arthur Conan Doyle",7884);

console.log(book1.toString())