import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    iconLoading: false,
    id: "",
    pw: ""
  };
  render() {
    const { tryLogin, handleInput, EnterKeyPressed } = this;
    const { iconLoading, id, pw } = this.state;
    return (
      <Presenter
        id={id}
        pw={pw}
        iconLoading={iconLoading}
        tryLogin={tryLogin}
        handleInput={handleInput}
        EnterKeyPressed={EnterKeyPressed}
      />
    );
  }

  EnterKeyPressed = e => {
    const { key } = e;
    if (key === "Enter") {
      this.tryLogin();
    }
  };

  tryLogin = () => {
    const { id, pw } = this.state;
    this.enterIconLoading();
    axios
      .post("/api/user/login", {
        id,
        pw
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          console.log("로그인에 성공");
          const { token } = data;
          localStorage.setItem("token", token);
          this.setState({
            iconLoading: false
          });
          window.location.href = "/";

          return;
        } else {
          console.log("로그인에 실패");
          alert(data.error);
          this.setState({
            iconLoading: false
          });
          return;
        }
      })
      .catch(err => console.log(err));
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        this.setState({
          id: value
        });
        break;
      case "pw":
        this.setState({
          pw: value
        });
        break;
      default:
        break;
    }
  };
}

export default Container;
