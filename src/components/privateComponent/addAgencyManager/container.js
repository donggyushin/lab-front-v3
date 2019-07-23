import React from "react";
import Presenter from "./presenter";
import axios from "axios";

const axiosConfig = {
  headers: {
    token: localStorage.getItem("token")
  }
};

class Container extends React.Component {
  state = {
    loading: true,
    users: []
  };

  componentDidMount() {
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
    const { addManagerButtonTapped, removeManagerButtonTapped } = this;
    return (
      <Presenter
        loading={loading}
        addManagerButtonTapped={addManagerButtonTapped}
        removeManagerButtonTapped={removeManagerButtonTapped}
        fn={fn}
        users={users}
      />
    );
  }

  removeManagerButtonTapped = id => {
    const { users } = this.state;
    const updatedUsers = users.filter(user => {
      return user.id !== id;
    });
    this.setState({
      users: updatedUsers
    });

    const postData = {
      id
    };

    axios
      .post("/api/user/remove-manager", postData, axiosConfig)
      .then(res => res.data)
      .then(data => {
        if (data.ok === false) {
          alert(data.error);
          this.setState({
            users
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          users
        });
      });
  };

  addManagerButtonTapped = userId => {
    const { users } = this.state;
    const updatedUsers = users.filter(user => {
      return user.id !== userId;
    });
    this.setState({
      users: updatedUsers
    });
    const postData = {
      id: userId
    };

    axios
      .post("/api/user/add-manager", postData, axiosConfig)
      .then(res => res.data)
      .then(data => {
        if (data.ok === false) {
          alert(data.error);
          this.setState({
            users
          });
          return;
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          users
        });
        return;
      });
  };

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
