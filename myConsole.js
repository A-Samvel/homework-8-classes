class Console {
  #history;
  constructor() {
    this.#history = [];
  }

  #logsPainting(item) {
    let newString = "";
    if (Array.isArray(item)) newString += `[${item.join(",")}]`;
    else if (typeof item === "object") {
      let newMessage = "{";
      for (const key in item) {
        newMessage += `${key}:${item[key]},`;
      }
      newString += newMessage.slice(0, -1) + "}";
    } else newString += `${item}`;
    return newString;
  }

  log(...args) {
    let logMessage = "";
    args.forEach((arg) => (logMessage += this.#logsPainting(arg)));
    this.#history.push(logMessage);
    console.log(logMessage);
    return logMessage;
  }

  clearHistory() {
    this.#history = [];
    return `Memory cleared successfully`;
  }

  history(range) {
    if (range) {
      return this.#history.slice(0, range);
    }
    return this.#history;
  }
}

const myConsole = new Console("Regular");
myConsole.log([0, 1, 2, 3]);
myConsole.log({ a: 1, b: 2 });
myConsole.log("ok : ", 1, 2, 3);

console.log(myConsole.history(3));