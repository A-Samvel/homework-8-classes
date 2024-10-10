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

class Student extends Person {
  #year;
  #fee;
  #program;

  constructor(firstName, lastName, gender, age) {
    super(firstName, lastName, gender, age);
    this.#year = 1;
    this.#fee = 0;
    this.#program = [];
  }

  get year() {
    return this.#year;
  }

  get program() {
    return this.#program;
  }

  passExam(programName, grade) {
    this.#program.push({ programName: programName, grade: grade });
  }

  isAllPassed() {
    const res = this.#program.some(({ grade }) => grade < 50);
    if (res) {
      this.#program = [];
      return `Failure, try again next year`;
    } else {
      this.#program = [];
      this.#year++;
      return `congratulations on passing`;
    }
  }
}

const student1 = new Student("Samvel", "A.", "male", 26);

student1.passExam("Math", 70);
student1.passExam("English", 60);
student1.passExam("Russion", 50);

console.log(student1.isAllPassed());
