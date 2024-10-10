class Person {
  #firstName;
  #lastName;
  #gender;
  #age;
  constructor(firstName, lastName, gender, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#gender = gender;
    this.#age = age;
  }

  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get gender() {
    return this.#gender;
  }
  get age() {
    return this.#age;
  }

  toString() {
    return this.#gender === "male"
      ? `Mr. ${this.#firstName} ${this.#lastName}, ${this.#age} y/o`
      : `Ms. ${this.#firstName} ${this.#lastName}, ${this.#age} y/o`;
  }
}

const user1 = new Person ('Samvel', 'A.', 'male', 26)
const user2 = new Person ('Jon', 'Doe', 'female', 44)

console.log(user1.toString())
console.log(user2.toString())

