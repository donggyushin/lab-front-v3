import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    loading: true,
    userLevel: ""
  };

  componentDidMount() {
    this.checkUserLevel();
  }

  render() {
    const { loading, userLevel } = this.state;
    return <Presenter loading={loading} userLevel={userLevel} />;
  }

  checkUserLevel = () => {
    axios
      .get("/api/user/level", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        if (!data.ok) {
          alert(data.error);
          localStorage.removeItem("token");
          window.location.href = "/";
        } else {
          this.setState({
            userLevel: data.userLevel,
            loading: false
          });
        }
      });
  };
}

export default Container;
