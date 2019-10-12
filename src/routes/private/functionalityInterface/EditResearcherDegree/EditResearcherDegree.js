import React from "react";
import styled from "styled-components";
import DetailComponent from "./Detail";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { websocketUri } from "../../../../constants/uris";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class EditResearcherDegree extends React.Component {
  state = {
    degreeInfos: [],
    전공명: "",
    지도교수명: "",
    학과명: "",
    학교명: "",
    학교입학일: "",
    학교졸업일: "",
    학위구분: "",
    학위논문명: ""
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

          // 기본실적 불러오기
          const DegreeInfoClient = new W3CWebSocket(
            websocketUri + `/degreeInfo/${data.user.scienceId}`
          );
          DegreeInfoClient.onopen = () => {
            console.log("WebSocket Client Connected");
          };
          DegreeInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            console.log(parsedJson);

            this.setState({
              degreeInfos: parsedJson
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
    const {
      degreeInfos,
      전공명,
      지도교수명,
      학과명,
      학교명,
      학교입학일,
      학교졸업일,
      학위구분,
      학위논문명
    } = this.state;
    const { handleInput } = this;
    return (
      <Container>
        {degreeInfos.map(degreeInfo => {
          return (
            <Title key={degreeInfo.과학기술인등록번호}>
              {degreeInfo.학위논문명}
            </Title>
          );
        })}
        <DetailComponent
          전공명={전공명}
          지도교수명={지도교수명}
          학과명={학과명}
          학교명={학교명}
          학교입학일={학교입학일}
          학교졸업일={학교졸업일}
          학위구분={학위구분}
          학위논문명={학위논문명}
          handleInput={handleInput}
        />
      </Container>
    );
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default EditResearcherDegree;
