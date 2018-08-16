import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tage: ["tag1", "tag2", "tag3"]
    // imageUrl: "http://picsum.photos/200"
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.fromatCount()}</span>
        <button className="btn btn-secondary btn-sm">Incrememnt</button>
        <ul>
          {this.state.tage.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  fromatCount() {
    const { counter } = this.state;
    // return counter === 0 ? "zero" : counter;
    return counter === 0 ? <p>Zero</p> : counter;
  }
}

export default Counter;
