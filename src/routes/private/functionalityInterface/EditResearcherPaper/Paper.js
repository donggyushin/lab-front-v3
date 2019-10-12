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

class EditResearcherPaper extends React.Component {
  state = {
    paperInfos: [],
    ISSN번호: "",
    게재일자: "",
    논문제목_국문: "",
    논문제목_영문: "",
    저자명: "",
    참여구분: "",
    학술지명: ""
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
          const PaperInfoClient = new W3CWebSocket(
            websocketUri + `/paperInfo/${data.user.scienceId}`
          );
          PaperInfoClient.onopen = () => {
            console.log("WebSocket Client Connected");
          };
          PaperInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            console.log(parsedJson);

            this.setState({
              paperInfos: parsedJson
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
      paperInfos,
      ISSN번호,
      게재일자,
      논문제목_국문,
      논문제목_영문,
      저자명,
      참여구분,
      학술지명
    } = this.state;
    const { handleInput } = this;
    return (
      <Container>
        {paperInfos.map(paperInfo => {
          return (
            <Title key={paperInfo.과학기술인등록번호}>
              {paperInfo.논문제목_국문}
            </Title>
          );
        })}

        <DetailComponent
          ISSN번호={ISSN번호}
          게재일자={게재일자}
          논문제목_국문={논문제목_국문}
          논문제목_영문={논문제목_영문}
          저자명={저자명}
          참여구분={참여구분}
          학술지명={학술지명}
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

export default EditResearcherPaper;
