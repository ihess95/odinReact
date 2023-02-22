import React from "react";
import ReactDOM from "react-dom";

class DemoComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.user}</h2>
      </div>
    );
  }
}
