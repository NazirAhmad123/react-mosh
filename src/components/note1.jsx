import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tage: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tage.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tage.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.tage.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}
export default Counter;
