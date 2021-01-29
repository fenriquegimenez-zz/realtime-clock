import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    let delay = 1000;

    if (this.props.isPrecise) {
      delay = 100;
    }
    setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
}

export default Clock;
