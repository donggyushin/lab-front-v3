import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    iconLoading: false
  };

  render() {
    const { iconLoading } = this.state;
    const { searchButtonTapped } = this;
    return (
      <Presenter
        iconLoading={iconLoading}
        searchButtonTapped={searchButtonTapped}
      />
    );
  }

  searchButtonTapped = () => {
    this.setState({
      iconLoading: true
    });
  };
}

export default Container;
