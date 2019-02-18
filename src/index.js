import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const numberOfEmojis = 33;

class Emojimeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.change = this.change.bind(this);
  }

  change(event) {
    let max = parseInt(event.target.max);
    let value = event.target.value;
    let position = Math.ceil(value / (max / numberOfEmojis))
    this.setState({ value: value })
    for (let c of event.target.classList.values()) {
      if (c.match(/^e\d+/)) {
        event.target.classList.remove(c);
      }
    }
    event.target.classList.add('e' + position)
  }

  render() {
    return (
      <div className="container">
        <div className="container__layout">
          <input
            id="slider"
            type="range"
            min="1"
            max="400"
            step="1"
            value={this.state.value}
            className="container__slider e1 animated"
            onChange={this.change}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Emojimeter />, document.getElementById("root"));




