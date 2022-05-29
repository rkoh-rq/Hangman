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
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.onClick}
        value={this.value}
        style={{
          width: "10%",
          aspectRatio: 1 / 1,
          flex: 1,
          textAlign: "center"
        }}
      >
        {this.value}
      </button>
    );
  }
}

export { AlphabetButton };
