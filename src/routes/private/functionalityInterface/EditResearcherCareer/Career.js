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
  max-width: 600px;
  overflow-x: hidden;
  flex-direction: column;
`;

class EditResearcherCareer extends React.Component {
  state = {
    user: {},
    scienceId: "",
    careerInfos: [],
    근무기관명: "",
    근무시작일: "",
    근무종료일: "",
    직급: "",
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

          // 경력 불러오기
          const BasicInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/careerInfo/${data.user.scienceId}`
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
    const { handleInput, titleClicked, EditButtonClicked } = this;
    return (
      <Container>
        <Column>
          {careerInfos.map(careerinfo => {
            return (
              <Title
                onClick={() => titleClicked(careerinfo.고유키)}
                key={careerinfo.고유키}
              >
                {careerinfo.근무기관명}
              </Title>
            );
          })}
        </Column>
        {근무기관명 && (
          <DetailComponent
            EditButtonClicked={EditButtonClicked}
            handleInput={handleInput}
            근무기관명={근무기관명}
            근무시작일={근무시작일}
            근무종료일={근무종료일}
            직급={직급}
          />
        )}
      </Container>
    );
  }

  EditButtonClicked = () => {
    const { 근무기관명, 근무시작일, 근무종료일, 직급, 고유키 } = this.state;

    console.log("Edit button clicked!");

    // 기본실적 불러오기 변경하기

    const BasicInfoClient = new W3CWebSocket(
      updateWebSocketUri + `/careerInfo/${고유키}`
    );
    BasicInfoClient.onopen = () => {
      console.log("WebSocket Client Connected");
      const body = {
        근무기관명,
        근무시작일,
        근무종료일,
        직급,
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
    const { careerInfos } = this.state;
    const careerInfo = careerInfos.filter(
      careerinfo => careerinfo.고유키 === id
    )[0];
    const {
      scienceId,
      근무기관명,
      근무시작일,
      근무종료일,
      직급,
      고유키
    } = careerInfo;
    this.setState({
      scienceId,
      근무기관명,
      근무시작일,
      근무종료일,
      직급,
      고유키
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default EditResearcherCareer;
