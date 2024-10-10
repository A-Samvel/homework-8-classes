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

/*const book1 = new LibraryBookBase("Misterious Island", "Jules Verne", 1256);
const book2 = new LibraryBookBase(
  "A Study in Scarlet",
  "Arthur Conan Doyle",
  7884
);*/

class LibraryBook extends LibraryBookBase {
  #quantity;
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this.#quantity = quantity;
  }

  get quantity() {
    return this.#quantity;
  }

  toString() {
    return `In stock of ${this.author}'s ${this.title} is ${
      this.#quantity
    }, bookID : ${this.bookId}`;
  }

  increaseQuantityBy(amount) {
    this.#quantity += amount;
  }
  decreaseQuantityBy(amount) {
    this.#quantity -= amount;
  }
}

class ReaderBook extends LibraryBookBase {
    #expirationDate
    #isReturned
  constructor(title, author, bookId,expirationDate) {
    super(title, author, bookId)
    this.#expirationDate = expirationDate
    this.#isReturned = true
  }

  get expirationDate(){
    return this.#expirationDate
  }
  get isReturned(){
    return this.#isReturned
  }

  toString(){
    const returned = this.#isReturned === true ? 'returned' : "don't returned"
    return `${this.title}'s(bookID:${this.bookId}) expiration Date is ${this.#expirationDate}. It's ${returned}`
  }
}
