class Account {
  #id;
  #name;
  #balance;
  static instanceCount = 0;
  constructor(name, balance) {
    Account.instanceCount++;
    this.#id = Account.instanceCount;
    this.#name = name;
    this.#balance = balance;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
  set name(a) {
    throw new Error("Name is unchangeable");
  }

  get balance() {
    return this.#balance;
  }
  set balance(a) {
    throw new Error("You can't change balance");
  }

  credit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  debit(amount) {
    if (this.#balance < amount) return "Amount exceeded balance";
    this.#balance -= amount;
    return this.#balance;
  }

  transferTo(anotherAccount, amount) {
    if (this.#balance < amount) return "Amount exceeded balance";
    this.debit(amount);
    anotherAccount.credit(amount);
    return this.#balance;
  }

  toString() {
    return `${this.#name}'s account balance is ${this.balance}AMD`;
  }
}
