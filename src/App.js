import React from "react";
import styled from "styled-components";
import PrivateComponent from "./components/privateComponent";
import PublicComponent from "./components/publicComponent";
import NavigationBar from "./components/global/navigationBar";
import Copyright from "./components/global/copyRight";
import axios from "axios";

const Container = styled.div`
  position: relative;
`;

class AppContainer extends React.Component {
  state = {
    isLoggedIn: false,
    userLevel: ""
  };

  componentDidMount() {
    const { checkLogin, getUserLevel } = this;

    checkLogin();
    getUserLevel();
  }

  render() {
    const { isLoggedIn, userLevel } = this.state;
    const { logout } = this;
    return (
      <Container>
        <div
          style={{
            width: "100%"
          }}
        >
          <NavigationBar
            userLevel={userLevel}
            logout={logout}
            isLoggedIn={isLoggedIn}
          />
        </div>
        {isLoggedIn ? <PrivateComponent /> : <PublicComponent />}
        <Copyright />
      </Container>
    );
  }

  checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      isLoggedIn: false
    });
    window.location.href = "/";
    return;
  };

  getUserLevel = () => {
    axios
      .get("/api/user/level", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          this.setState({
            userLevel: data.userLevel
          });
        }
      });
  };
}

export default AppContainer;
