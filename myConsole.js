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
}
