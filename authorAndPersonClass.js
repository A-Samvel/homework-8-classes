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
