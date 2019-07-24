import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    fn: "",
    k: "",
    userLevel: ""
  };

  componentDidMount() {
    const {
      match: {
        params: { fn }
      }
    } = this.props;

    const { getUserLevel } = this;

    const urlQueries = new URLSearchParams(this.props.location.search);
    const k = urlQueries.get("k");

    this.setState({
      fn,
      k
    });

    getUserLevel();
  }

  render() {
    const { fn, k, userLevel } = this.state;
    return <Presenter userLevel={userLevel} fn={fn} k={k} />;
  }

  getUserLevel = () => {
    axios
      .get("/api/user/level", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok === false) {
          alert(data.error);
          // TODO: logout
          localStorage.removeItem("token");
          window.location.href = "/";
          return;
        } else {
          this.setState({
            userLevel: data.userLevel
          });
        }
      })
      .catch(err => console.log(err));
  };
}

export default Container;
