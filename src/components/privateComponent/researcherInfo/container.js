import React from "react";
import Presenter from "./presenter";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { websocketUri, searchWebSocketUri } from "../../../constants/uris";
import axios from "axios";

class Container extends React.Component {
  state = {
    paperInfo: [],
    basicInfo: {},
    degreeInfo: [],
    patentInfo: [],
    careerInfo: [],
    user: {},
    scienceId: ""
  };

  componentDidMount() {
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
            user: data.user,
            scienceId: data.user.scienceId
          });
          // 논문실적 불러오기
          const PaperInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/paperInfo/${data.user.scienceId}`
          );
          PaperInfoClient.onopen = () => {
            console.log("Paper WebSocket Client Connected");
          };
          PaperInfoClient.onclose = () => {
            console.log("Paper WebSocket client disconnected");
          };
          PaperInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            this.setState({
              paperInfo: parsedJson
            });
            console.log(parsedJson);
            if (parsedJson.err) {
              console.log("here?");
              alert(parsedJson.msg);
            } else {
            }
            PaperInfoClient.close();
          };

          // 특허실적 불러오기
          const PatentInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/patentInfo/${data.user.scienceId}`
          );
          PatentInfoClient.onopen = () => {
            console.log("Patent WebSocket Client Connected");
          };
          PatentInfoClient.onclose = () => {
            console.log("Patent WebSocket Client DisConnected");
          };
          PatentInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            this.setState({
              patentInfo: parsedJson
            });
            console.log(parsedJson);
            if (parsedJson.err) {
              console.log("here?");
              alert(parsedJson.msg);
            } else {
            }

            PatentInfoClient.close();
          };

          // 학력실적 불러오기
          const DegreeInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/degreeInfo/${data.user.scienceId}`
          );
          DegreeInfoClient.onopen = () => {
            console.log("Degree WebSocket Client Connected");
          };
          DegreeInfoClient.onclose = () => {
            console.log("Degree WebSocket Client DisConnected");
          };
          DegreeInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            this.setState({
              degreeInfo: parsedJson
            });
            console.log(parsedJson);
            if (parsedJson.err) {
              console.log("here?");
              alert(parsedJson.msg);
            } else {
            }
            DegreeInfoClient.close();
          };

          // 경력실적 불러오기
          const CareerInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/careerInfo/${data.user.scienceId}`
          );
          CareerInfoClient.onopen = () => {
            console.log("Career WebSocket Client Connected");
          };
          CareerInfoClient.onclose = () => {
            console.log("Career WebSocket Client DisConnected");
          };
          CareerInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);

            console.log(parsedJson);
            this.setState({
              careerInfo: parsedJson
            });
            if (parsedJson.err) {
              console.log("here?");
              alert(parsedJson.msg);
            } else {
            }
            CareerInfoClient.close();
          };

          // 기본실적 불러오기
          const BasicInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/basicInfo/${data.user.scienceId}`
          );
          BasicInfoClient.onopen = () => {
            console.log("WebSocket Client Connected");
          };
          BasicInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            console.log("기본사항: ", parsedJson);

            this.setState({
              basicInfo: parsedJson
            });
            if (parsedJson.err) {
              console.log("here?");
              alert(parsedJson.msg);
            } else {
            }
          };
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    const { onMessagePaper } = this;
    const {
      basicInfo,
      paperInfo,
      patentInfo,
      careerInfo,
      degreeInfo,
      scienceId
    } = this.state;
    return (
      <Presenter
        basicInfo={basicInfo}
        paperInfo={paperInfo}
        patentInfo={patentInfo}
        careerInfo={careerInfo}
        degreeInfo={degreeInfo}
        onMessagePaper={onMessagePaper}
        scienceId={scienceId}
      />
    );
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

  onMessagePaper = data => {
    console.log("on message of paper: ", data);
  };
}

export default Container;
