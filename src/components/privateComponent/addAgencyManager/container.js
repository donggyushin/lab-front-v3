import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    loading: true,
    users: []
  };

  componentDidMount() {
    k;
    const { requestAllNormalUsers, requestAllAgencyManagers } = this;
    const { fn } = this.props;
    if (fn === "add-manager") {
      requestAllNormalUsers();
    } else if (fn === "remove-manager") {
      requestAllAgencyManagers();
    }
  }

  render() {
    const { loading, users } = this.state;
    const { fn } = this.props;
    return <Presenter loading={loading} fn={fn} users={users} />;
  }

  requestAllAgencyManagers = () => {
    axios
      .get("/api/user/agencyAdmin", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        console.log(data);
        if (!data.ok) {
          alert(data.error);
          this.setState({
            loading: false
          });
          return;
        } else {
          this.setState({
            loading: false,
            users: data.users
          });
        }
      })
      .catch(err => console.log(err));
  };

  requestAllNormalUsers = () => {
    axios
      .get("/api/user/normal", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        console.log(data);
        if (!data.ok) {
          alert(data.error);
          this.setState({
            loading: false
          });
          return;
        } else {
          this.setState({
            loading: false,
            users: data.users
          });
        }
      })
      .catch(err => console.log(err));
  };
}

export default Container;
