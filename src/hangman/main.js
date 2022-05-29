import React from "react";
import { randomWord } from "./random";
import { AlphabetButton } from "./components/AlphabetButton.js";
import HangBird from "./components/HangBird.js";
import "./../styles.css";

class EasyHangman extends React.Component {
  static defaultProps = {
    maxWrong: 7,
    keyboard: "qwertyuiopasdfghjklzxcvbnm"
  };
  constructor(props) {
    super(props);
    let { word, hint } = randomWord();
    this.state = {
      word: word,
      hint: hint,
      guessed: new Set([" "]),
      wrong: 0
    };
  }

  currWord() {
    return this.state.word
      .split("")
      .map((letter) =>
        this.state.guessed.has(letter.toLowerCase()) ? letter : "_"
      );
  }

  handleGuess = (e) => {
    let letter = e.target.value;
    e.target.disabled = true;
    this.setState((prevState) => ({
      guessed: prevState.guessed.add(letter),
      wrong:
        prevState.wrong +
        (prevState.word.includes(letter) ||
        prevState.word.includes(letter.toUpperCase())
          ? 0
          : 1)
    }));
  };

  keyboard() {
    const lst = this.props.keyboard.split("");
    const top = lst.slice(0, 10);
    const middle = lst.slice(10, 19);
    const bottom = lst.slice(19, 26);
    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        <div>
          {top.map((letter) => (
            <AlphabetButton
              onClick={this.handleGuess}
              key={letter}
              value={letter}
            />
          ))}
        </div>
        <div>
          {middle.map((letter) => (
            <AlphabetButton
              onClick={this.handleGuess}
              key={letter}
              value={letter}
            />
          ))}
        </div>
        <div>
          {bottom.map((letter) => (
            <AlphabetButton
              onClick={this.handleGuess}
              key={letter}
              value={letter}
            />
          ))}
        </div>
      </div>
    );
  }

  handleReset = () => {
    let { word, hint } = randomWord();
    this.setState((prevState) => ({
      word: word,
      hint: hint,
      guessed: new Set([" "]),
      wrong: 0
    }));
  };

  render() {
    const isWin = this.currWord().join("") === this.state.word;
    const isLose = this.state.wrong >= this.props.maxWrong;
    const gameOver = isWin || isLose;

    return (
      <div className="app">
        <div>It is time to play hangman!</div>
        <p>
          no of wrong guesses: {this.state.wrong} / {this.props.maxWrong}
        </p>
        <HangBird chance={this.props.maxWrong - this.state.wrong} />
        <div>{isWin && "You win! The word was " + this.state.word}</div>
        <div style={{ margin: "20px" }}>
          {isLose && "You lose! The word was " + this.state.word}
        </div>
        <div>
          {gameOver && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={this.handleReset}
            >
              Reset Game
            </button>
          )}
        </div>
        <div id="keyboard">{!gameOver && this.keyboard()}</div>
        <div id="guess">{!gameOver && this.currWord()}</div>
        <div>
          <i>{!gameOver && "hint: " + this.state.hint}</i>
        </div>
      </div>
    );
  }
}

export default EasyHangman;
