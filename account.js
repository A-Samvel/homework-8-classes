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

  static identifyAccounts(accountFirst, accountSecond) {
    if (
      !(accountFirst instanceof Account) ||
      !(accountSecond instanceof Account)
    ) {
      throw new Error("Both arguments must be instances of Account.");
    }

    return (
      accountFirst.id === accountSecond.id &&
      accountFirst.name === accountSecond.name &&
      accountFirst.balance === accountSecond.balance
    );
  }
}

const savingAcc = new Account("Saving account", 2000);
const cardAcc = new Account("Card account", 1000);

console.log(savingAcc.debit(500));
console.log(cardAcc.credit(500));

cardAcc.transferTo(savingAcc, 1000);

console.log(savingAcc.balance, cardAcc.balance);

const anotherAcc = savingAcc;

console.log(Account.identifyAccounts(cardAcc, savingAcc));

console.log(savingAcc.toString());
