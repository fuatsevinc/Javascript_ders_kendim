import React, { Component } from "react";

const pStyle = {
  padding: "1rem",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
};
class Clock extends Component {
  render() {
    return (
      <div>
        <p style={pStyle}>Copyright {new Date().getDate()}</p>
      </div>
    );
  }
}

export default Clock;