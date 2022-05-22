var words = ["hello", "tiktok"];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export { randomWord };
