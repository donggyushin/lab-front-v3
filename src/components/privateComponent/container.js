import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    loading: true,
    userLevel: "",
    user: {}
  };

  componentDidMount() {
    this.checkUserLevel();
    this.getUserInfo();
  }

  render() {
    const { loading, userLevel, user } = this.state;
    return <Presenter loading={loading} user={user} userLevel={userLevel} />;
  }

  getUserInfo = () => {
    axios
      .get("/api/user/user", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok === false) {
          alert(data.error);
        } else {
          this.setState({
            user: data.user
          });
        }
      })
      .catch(err => console.error(err));
  };

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
