import React, { Component } from "react";
import ReactDOM from "react-dom";
import Toast from "./Toast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toastShow: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleButtonClick() {
    if (!this.state.toastShow) {
      this.setState({ toastShow: true });
    }
  }

  handleRequestClose() {
    this.setState({ toastShow: false });
  }

  renderToast() {
    if (!this.state.toastShow) return null;

    return <Toast onRequestClose={this.handleRequestClose}>
      This is the Toast component!
    </Toast>;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Show toast!</button>
        {this.renderToast()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

