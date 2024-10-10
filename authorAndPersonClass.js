class Author {
  #name;
  #email;
  #gender;
  constructor(name, email, gender) {
    this.#name = name;
    this.#email = email;
    this.#gender = gender.toLowerCase();
  }

  get name() {
    return this.#name;
  }
  set name(a) {
    throw new Error("You can't set author's name");
  }

  get email() {
    return this.#email;
  }
  set email(a) {
    throw new Error("You can't set author's email");
  }

  get gender() {
    return this.#gender;
  }
  set gender(a) {
    throw new Error("You can't set author's gender");
  }

  toString() {
    return this.#gender === "male" ? ` Mr. ${this.#name}` : `Ms. ${this.#name}`;
  }
}

class Book {
  #title;
  #author;
  #price;
  #quantity;
  constructor(title, author = {}, price, quantity) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#quantity = price;
  }

  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }
  get price() {
    return this.#price;
  }
  get price() {
    return this.#quantity;
  }

  toString() {
    const { name } = this.#author;
    return `${name} author of "${this.title}"`;
  }
}
const author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
const book1 = new Book("The Lord of the Ring", author1);

console.log(book1.author.name);
console.log(book1.toString());
