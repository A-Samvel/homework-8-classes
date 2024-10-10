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

  toString(){
    return `${this.#author} is author of "${this.#title}"`
  }

  isTheSameBook(book){
    const {title,author} = book
    return this.#title === title && this.#author === author
  }
}

const book1 = new Book("Misterious Island","Jules Verne")
const book2 = new Book("A Study in Scarlet","Arthur Conan Doyle")
const book3  = new Book("Misterious Island","Jules Verne")

console.log(book1.toString())
console.log(book1.isTheSameBook(book2))
console.log(book1.isTheSameBook(book3))