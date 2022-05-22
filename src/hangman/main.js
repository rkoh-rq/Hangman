import React from "react";
import { Link } from "react-router-dom";
import { randomWord } from "./random";
import { AlphabetButton } from "./AlphabetButton.js";

class Hangman extends React.Component {
  static defaultProps = {
    maxWrong: 6,
    keyboard: "qwertyuiopasdfghjklzxcvbnm"
  };
  constructor(props) {
    super(props);
    this.state = {
      word: randomWord(),
      guessed: new Set([]),
      wrong: 0
    };
  }

  currWord() {
    return this.state.word
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  handleGuess = (e) => {
    let letter = e.target.value;
    e.target.disabled = true;
    this.setState((prevState) => ({
      guessed: prevState.guessed.add(letter),
      wrong: prevState.wrong + (prevState.word.includes(letter) ? 0 : 1)
    }));
  };

  keyboard() {
    return this.props.keyboard
      .split("")
      .map((letter) => (
        <AlphabetButton
          onClick={this.handleGuess}
          key={letter}
          value={letter}
        />
      ));
  }

  handleReset = () => {
    this.setState((prevState) => ({
      word: randomWord(),
      guessed: new Set([]),
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
        <p>no of wrong guesses: {this.state.wrong}</p>
        <div>{isWin && "You win!" + this.state.word}</div>
        <div>{isLose && "You lose! The word was " + this.state.word}</div>
        <div>
          {gameOver && (
            <AlphabetButton value="Reset Game" onClick={this.handleReset} />
          )}
        </div>
        <div>{!gameOver && this.keyboard()}</div>
        <div>{!gameOver && this.currWord()}</div>
        <div id="keyboard"></div>
        <Link className="backToHome" to="/">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default Hangman;
