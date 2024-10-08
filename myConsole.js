class Console {
  #history;
  constructor() {
    this.#history = [];
  }

  log(...args) {
    let logMessage = "";
    args.forEach((arg) => {
      if (Array.isArray(arg)) logMessage += `[${arg.join(",")}]`;
      else if (typeof arg === "object") {
        let newMessage = "{";
        for (const key in arg) {
          newMessage += `${key}:${arg[key]},`;
        }
        logMessage += newMessage.slice(0, -1) + "}";
      } else logMessage += `${arg}`;
    });
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