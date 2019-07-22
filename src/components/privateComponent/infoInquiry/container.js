import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  render() {
    const { k } = this.props;
    console.log("k:", k);
    return <Presenter k={k} />;
  }
}

export default Container;
