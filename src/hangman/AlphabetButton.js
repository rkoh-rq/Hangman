import React, { Component } from "react";

class AlphabetButton extends Component {
  constructor(props) {
    super(props);
    this.value = props.value;
    this.onClick = props.onClick;
    this.disabled = props.disabled;
  }
  disable() {
    this.button.disabled = true;
  }
  render() {
    return (
      <button onClick={this.onClick} value={this.value}>
        {this.value}
      </button>
    );
  }
}

export { AlphabetButton };
