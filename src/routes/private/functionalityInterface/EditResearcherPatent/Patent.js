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
  align-items: center;
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

class EditResearcherPatent extends React.Component {
  state = {
    patentInfos: [],
    등록구분: "",
    등록국가: "",
    발명인: "",
    발명일자: "",
    특허명: "",
    특허번호: "",
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
          const PatentInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/patentInfo/${data.user.scienceId}`
          );
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
        }
      })
      .catch(err => console.error(err));
  }
  render() {
    const {
      patentInfos,
      등록구분,
      등록국가,
      발명인,
      발명일자,
      특허명,
      특허번호
    } = this.state;
    const { handleInput, titleClicked } = this;
    return (
      <Container>
        <Column>
          {patentInfos.map(patentInfo => {
            return (
              <Title
                onClick={() => titleClicked(patentInfo.고유키)}
                key={patentInfo.고유키}
              >
                {patentInfo.특허명}
              </Title>
            );
          })}
        </Column>
        {특허명 && (
          <DetailComponent
            등록구분={등록구분}
            등록국가={등록국가}
            발명인={발명인}
            발명일자={발명일자}
            특허명={특허명}
            특허번호={특허번호}
            handleInput={handleInput}
          />
        )}
      </Container>
    );
  }

  EditButtonClicked = () => {
    const {
      등록구분,
      등록국가,
      발명인,
      발명일자,
      특허명,
      특허번호,
      고유키
    } = this.state;

    console.log("Edit button clicked!");

    // 기본실적 불러오기 변경하기

    const BasicInfoClient = new W3CWebSocket(
      updateWebSocketUri + `/patentInfo/${고유키}`
    );
    BasicInfoClient.onopen = () => {
      console.log("WebSocket Client Connected");
      const body = {
        등록구분,
        등록국가,
        발명인,
        발명일자,
        특허명,
        특허번호,
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
    const { patentInfos } = this.state;
    const patentInfo = patentInfos.filter(
      patentinfo => patentinfo.고유키 === id
    )[0];
    const {
      등록구분,
      등록국가,
      발명인,
      발명일자,
      특허명,
      특허번호,
      고유키
    } = patentInfo;
    this.setState({
      등록구분,
      등록국가,
      발명인,
      발명일자,
      특허명,
      특허번호,
      고유키
    });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default EditResearcherPatent;
