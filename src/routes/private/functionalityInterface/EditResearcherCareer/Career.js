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

class EditResearcherCareer extends React.Component {
  state = {
    user: {},
    scienceId: "",
    careerInfos: [],
    근무기관명: "",
    근무시작일: "",
    근무종료일: "",
    직급: ""
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

          // 경력 불러오기
          const BasicInfoClient = new W3CWebSocket(
            websocketUri + `/careerInfo/${data.user.scienceId}`
          );
          BasicInfoClient.onopen = () => {
            console.log("WebSocket Client Connected");
          };
          BasicInfoClient.onmessage = message => {
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
        }
      })
      .catch(err => console.error(err));
  }
  render() {
    const {
      careerInfos,
      근무기관명,
      근무시작일,
      근무종료일,
      직급
    } = this.state;
    const { handleInput } = this;
    return (
      <Container>
        {careerInfos.map(careerinfo => {
          return (
            <Title key={careerinfo.과학기술인등록번호}>
              {careerinfo.근무기관명}
            </Title>
          );
        })}
        <DetailComponent
          handleInput={handleInput}
          근무기관명={근무기관명}
          근무시작일={근무시작일}
          근무종료일={근무종료일}
          직급={직급}
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

export default EditResearcherCareer;
