const wordArray = [
  "apple",
  "ear",
  "rhino",
  "corn",
  "hostess",
  "stash",
  "word",
  "dowry",
  "yodel",
  "leader",
  "righteous",
  "serpent",
  "motive",
  "beach",
  "hive",
  "eh",
];

class Shiritory {
  #gameOver;
  constructor() {
    this.#gameOver = true;
    this.words = [];
  }
  play(word) {
    word = word.toLowerCase();
    const validWord = wordArray.find((item) => item === word);
    if (validWord) {
      const length = this.words.length;
      const lastWord = this.words[length - 1];
      if (length === 0) {
        this.#gameOver = false;
        this.words.push(word);
        return this.words;
      }
      if (
        lastWord[lastWord.length - 1] === word[0] &&
        this.words.indexOf(word) === -1
      ) {
        this.words.push(word);
        return this.words;
      } else {
        this.#gameOver = true;
        return "game over";
      }
    } else throw new Error("Invalid Word");
  }
}
