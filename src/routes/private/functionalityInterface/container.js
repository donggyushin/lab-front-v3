import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    fn: "",
    k: ""
  };

  componentDidMount() {
    const {
      match: {
        params: { fn }
      }
    } = this.props;

    const urlQueries = new URLSearchParams(this.props.location.search);
    const k = urlQueries.get("k");

    this.setState({
      fn,
      k
    });
  }

  render() {
    const { fn, k } = this.state;
    return <Presenter fn={fn} k={k} />;
  }
}

export default Container;
