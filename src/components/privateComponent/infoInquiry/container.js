import React from "react";
import Presenter from "./presenter";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { websocketUri, searchWebSocketUri } from "../../../constants/uris";

class Container extends React.Component {
  componentDidMount() {
    const { k } = this.props;
    console.log("component did mount, and k is ", k);
  }

  state = {
    scienceId: "",
    basicInfo: {},
    patentInfos: [],
    degreeInfos: [],
    careerInfos: [],
    paperInfos: []
  };
  render() {
    const {
      scienceId,
      basicInfo,
      careerInfos,
      paperInfos,
      patentInfos,
      degreeInfos
    } = this.state;
    const { k, fn } = this.props;
    const { handleInput, searchButtonClicked } = this;
    return (
      <Presenter
        searchButtonClicked={searchButtonClicked}
        handleInput={handleInput}
        scienceId={scienceId}
        fn={fn}
        k={k}
        basicInfo={basicInfo}
        careerInfos={careerInfos}
        paperInfos={paperInfos}
        patentInfos={patentInfos}
        degreeInfos={degreeInfos}
      />
    );
  }

  searchButtonClicked = () => {
    const { scienceId } = this.state;
    const { k } = this.props;
    let destination;

    if (k === "basic") {
    }

    switch (k) {
      case "basic":
        destination = searchWebSocketUri + `/basicInfo/${scienceId}`;
        const BasicInfoClient = new W3CWebSocket(destination);
        BasicInfoClient.onopen = () => {
          console.log("WebSocket Client Connected");
        };
        BasicInfoClient.onmessage = message => {
          const parsedJson = JSON.parse(message.data);
          console.log(parsedJson);
          console.log(parsedJson.연구자명_국문);
          this.setState({
            basicInfo: parsedJson
          });
          if (parsedJson.err) {
            console.log("here?");
            alert(parsedJson.msg);
          } else {
          }
        };
        break;
      case "career":
        destination = searchWebSocketUri + `/careerInfo/${scienceId}`;
        const CareerInfoClient = new W3CWebSocket(destination);
        CareerInfoClient.onopen = () => {
          console.log("WebSocket Client Connected");
        };
        CareerInfoClient.onmessage = message => {
          const parsedJson = JSON.parse(message.data);
          console.log(parsedJson);
          console.log(parsedJson.연구자명_국문);
          this.setState({
            careerInfos: parsedJson
          });
          if (parsedJson.err) {
            console.log("here?");
            alert(parsedJson.msg);
          } else {
          }
        };
        break;
      case "paper":
        destination = searchWebSocketUri + `/paperInfo/${scienceId}`;
        const PaperInfoClient = new W3CWebSocket(destination);
        PaperInfoClient.onopen = () => {
          console.log("WebSocket Client Connected");
        };
        PaperInfoClient.onmessage = message => {
          const parsedJson = JSON.parse(message.data);
          console.log(parsedJson);
          console.log(parsedJson.연구자명_국문);
          this.setState({
            paperInfos: parsedJson
          });
          if (parsedJson.err) {
            console.log("here?");
            alert(parsedJson.msg);
          } else {
          }
        };
        break;
      case "property":
        destination = searchWebSocketUri + `/patentInfo/${scienceId}`;
        const PatentInfoClient = new W3CWebSocket(destination);
        PatentInfoClient.onopen = () => {
          console.log("WebSocket Client Connected");
        };
        PatentInfoClient.onmessage = message => {
          const parsedJson = JSON.parse(message.data);
          console.log(parsedJson);
          this.setState({
            patentInfos: parsedJson
          });
          if (parsedJson.err) {
            console.log("here?");
            alert(parsedJson.msg);
          } else {
          }
        };
        break;

      case "degree":
        destination = searchWebSocketUri + `/degreeInfo/${scienceId}`;
        const DegreeInfoClient = new W3CWebSocket(destination);
        DegreeInfoClient.onopen = () => {
          console.log("WebSocket Client Connected");
        };
        DegreeInfoClient.onmessage = message => {
          const parsedJson = JSON.parse(message.data);
          console.log(parsedJson);
          console.log(parsedJson.연구자명_국문);
          this.setState({
            degreeInfos: parsedJson
          });
          if (parsedJson.err) {
            console.log("here?");
            alert(parsedJson.msg);
          } else {
          }
        };
        break;

      default:
        destination = searchWebSocketUri + `/basicInfo/${scienceId}`;
        const BasicInfoClient2 = new W3CWebSocket(destination);
        BasicInfoClient2.onopen = () => {
          console.log("WebSocket Client Connected");
        };
        BasicInfoClient2.onmessage = message => {
          const parsedJson = JSON.parse(message.data);
          console.log(parsedJson);
          console.log(parsedJson.연구자명_국문);
          this.setState({
            basicInfo: parsedJson
          });
          if (parsedJson.err) {
            console.log("here?");
            alert(parsedJson.msg);
          } else {
          }
        };
        break;
    }
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default Container;
