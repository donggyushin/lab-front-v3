import React from "react";
import styled from "styled-components";
import DetailComponent from "./Detail";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {
  websocketUri,
  searchWebSocketUri,
  updateWebSocketUri
} from "../../../../constants/uris";

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: flex-start;
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  overflow-x: scroll;
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
    학술지명: "",
    고유키: ""
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
            searchWebSocketUri + `/paperInfo/${data.user.scienceId}`
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
      학술지명,
      고유키
    } = this.state;
    const { handleInput, titleClicked, EditButtonClicked } = this;
    return (
      <Container>
        <Column>
          {paperInfos.map(paperInfo => {
            return (
              <Title
                onClick={() => titleClicked(paperInfo.고유키)}
                key={paperInfo.고유키}
              >
                {paperInfo.논문제목_국문}
              </Title>
            );
          })}
        </Column>
        {고유키 && (
          <DetailComponent
            EditButtonClicked={EditButtonClicked}
            ISSN번호={ISSN번호}
            게재일자={게재일자}
            논문제목_국문={논문제목_국문}
            논문제목_영문={논문제목_영문}
            저자명={저자명}
            참여구분={참여구분}
            학술지명={학술지명}
            handleInput={handleInput}
          />
        )}
      </Container>
    );
  }

  EditButtonClicked = () => {
    const {
      ISSN번호,
      게재일자,
      논문제목_국문,
      논문제목_영문,
      저자명,
      참여구분,
      학술지명,
      고유키
    } = this.state;

    console.log("Edit button clicked!");

    // 기본실적 불러오기 변경하기

    const BasicInfoClient = new W3CWebSocket(
      updateWebSocketUri + `/paperInfo/${고유키}`
    );
    BasicInfoClient.onopen = () => {
      console.log("WebSocket Client Connected");
      const body = {
        ISSN번호,
        게재일자,
        논문제목_국문,
        논문제목_영문,
        저자명,
        참여구분,
        학술지명,
        고유키
      };
      const parsedData = JSON.stringify(body);
      BasicInfoClient.send(parsedData);
      BasicInfoClient.onmessage = message => {
        const parsedJson = JSON.parse(message.data);
        console.log("Received data from server: ", parsedJson);
        if (parsedJson.ok === 1) {
          window.location.href = "/v1/search";
        } else {
          const errorMessage = parsedJson.err;
          alert(errorMessage);
        }
      };
    };
  };

  titleClicked = id => {
    console.log("title clicked and identifier value is ", id);
    const { paperInfos } = this.state;
    const paperInfo = paperInfos.filter(
      paperinfo => paperinfo.고유키 === id
    )[0];
    const {
      ISSN번호,
      게재일자,
      논문제목_국문,
      논문제목_영문,
      저자명,
      참여구분,
      학술지명,
      고유키
    } = paperInfo;
    this.setState({
      ISSN번호,
      게재일자,
      논문제목_국문,
      논문제목_영문,
      저자명,
      참여구분,
      학술지명,
      고유키
    });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default EditResearcherPaper;
