import React, { Component } from "react";
import hangbird0 from "./../images/hangbird0.gif";
import hangbird1 from "./../images/hangbird1.png";
import hangbird2 from "./../images/hangbird2.png";
import hangbird3 from "./../images/hangbird3.png";
import hangbird4 from "./../images/hangbird4.png";
import hangbird5 from "./../images/hangbird5.png";
import hangbird6 from "./../images/hangbird6.png";
import hangbird7 from "./../images/hangbird7.png";

const birds = [
  hangbird0,
  hangbird1,
  hangbird2,
  hangbird3,
  hangbird4,
  hangbird5,
  hangbird6,
  hangbird7
];

class HangBird extends Component {
  render() {
    return (
      <img
        id="bird"
        src={birds[this.props.chance]}
        alt={this.props.chance + " chances left"}
        width={"50%"}
      />
    );
  }
}

export default HangBird;
