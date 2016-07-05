import React, { Component, PropTypes } from "react";

export default class Toast extends Component {
  static propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(this.handleClose, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  handleClose() {
    const { onRequestClose } = this.props;

    if (typeof onRequestClose === "function") {
      onRequestClose();
    }
  }

  render() {
    return (
      <div className="toast">
        <button
          className="toast__close"
          onClick={this.handleClose}
        >
          Close!
        </button>
        <div className="toast__body">{this.props.children}</div>
      </div>
    );
  }
}
