import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  render() {
    const { k, fn } = this.props;
    return <Presenter fn={fn} k={k} />;
  }
}

export default Container;
