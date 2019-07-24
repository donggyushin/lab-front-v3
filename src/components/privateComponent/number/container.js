import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    iconLoading: false
  };

  render() {
    const { iconLoading } = this.state;
    const { searchButtonTapped } = this;
    const { fn, userLevel } = this.props;
    return (
      <Presenter
        userLevel={userLevel}
        iconLoading={iconLoading}
        searchButtonTapped={searchButtonTapped}
        fn={fn}
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
