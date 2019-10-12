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

class EditResearcherPatent extends React.Component {
  state = {
    patentInfos: [],
    등록구분: "",
    등록국가: "",
    발명인: "",
    발명일자: "",
    특허명: "",
    특허번호: ""
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
            websocketUri + `/patentInfo/${data.user.scienceId}`
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
    const { handleInput } = this;
    return (
      <Container>
        {patentInfos.map(patentInfo => {
          return (
            <Title key={patentInfo.과학기술인등록번호}>
              {patentInfo.특허명}
            </Title>
          );
        })}
        <DetailComponent
          등록구분={등록구분}
          등록국가={등록국가}
          발명인={발명인}
          발명일자={발명일자}
          특허명={특허명}
          특허번호={특허번호}
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

export default EditResearcherPatent;
