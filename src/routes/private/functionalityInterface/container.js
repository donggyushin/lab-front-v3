import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    fn: ""
  };

  componentDidMount() {
    const {
      match: {
        params: { fn }
      }
    } = this.props;
    this.setState({
      fn
    });
  }

  render() {
    const { fn } = this.state;
    return <Presenter fn={fn} />;
  }
}

export default Container;
