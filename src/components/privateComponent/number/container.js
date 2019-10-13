import React from "react";
import Presenter from "./presenter";
import { searchWebSocketUri2 } from "../../../constants/uris";
import { w3cwebsocket as W3CWebSocket } from "websocket";
class Container extends React.Component {
  state = {
    iconLoading: false,
    이름: "",
    생년월일: "",
    이메일: "",
    휴대폰번호: "",
    과학기술인등록번호: ""
  };

  render() {
    const {
      iconLoading,
      이름,
      생년월일,
      이메일,
      휴대폰번호,
      과학기술인등록번호
    } = this.state;
    const { searchButtonTapped, handleInput } = this;
    const { fn, userLevel } = this.props;
    return (
      <Presenter
        userLevel={userLevel}
        iconLoading={iconLoading}
        searchButtonTapped={searchButtonTapped}
        fn={fn}
        이름={이름}
        생년월일={생년월일}
        이메일={이메일}
        휴대폰번호={휴대폰번호}
        handleInput={handleInput}
        과학기술인등록번호={과학기술인등록번호}
      />
    );
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchButtonTapped = () => {
    const { 이름, 생년월일, 이메일, 휴대폰번호 } = this.state;
    this.setState({
      iconLoading: true
    });

    const body = {
      이름,
      생년월일,
      이메일,
      휴대폰번호
    };

    const BasicInfoClient = new W3CWebSocket(
      searchWebSocketUri2 + `/basicInfo/1234123`
    );
    BasicInfoClient.onopen = () => {
      console.log("WebSocket Client Connected");

      const parsedData = JSON.stringify(body);
      BasicInfoClient.send(parsedData);
      BasicInfoClient.onmessage = message => {
        const parsedJson = JSON.parse(message.data);
        console.log(parsedJson);

        if (parsedJson.err === 1) {
          const errorMessage = parsedJson.msg;
          alert(errorMessage);
        } else {
          console.log("성공!");
          console.log("Received data from server: ", parsedJson);
          // 서버로부터 데이터 잘 전달 받으면 여기에다가 코드 작성

          this.setState({
            iconLoading: false,
            과학기술인등록번호: parsedJson.과학기술인등록번호
          });
        }
      };
    };
  };
}

export default Container;
