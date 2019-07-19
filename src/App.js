import React from "react";
import styled from "styled-components";
import PrivateComponent from "./components/privateComponent";
import PublicComponent from "./components/publicComponent";
import NavigationBar from "./components/global/navigationBar";

const Container = styled.div``;

class AppContainer extends React.Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    const { checkLogin } = this;

    checkLogin();
  }

  render() {
    const { isLoggedIn } = this.state;
    const { logout } = this;
    return (
      <Container>
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%"
          }}
        >
          <NavigationBar logout={logout} isLoggedIn={isLoggedIn} />
        </div>
        {isLoggedIn ? <PrivateComponent /> : <PublicComponent />}
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
}

export default AppContainer;
