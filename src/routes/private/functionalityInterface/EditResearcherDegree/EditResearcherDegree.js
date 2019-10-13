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
    학위논문명: "",
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
          const DegreeInfoClient = new W3CWebSocket(
            searchWebSocketUri + `/degreeInfo/${data.user.scienceId}`
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
      학위논문명,
      고유키
    } = this.state;
    const { handleInput, titleClicked, EditButtonClicked } = this;
    return (
      <Container>
        <Column>
          {degreeInfos.map(degreeInfo => {
            return (
              <Title
                onClick={() => titleClicked(degreeInfo.고유키)}
                key={degreeInfo.고유키}
              >
                {degreeInfo.학교명}
              </Title>
            );
          })}
        </Column>
        {학교명 && (
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
            고유키={고유키}
            EditButtonClicked={EditButtonClicked}
          />
        )}
      </Container>
    );
  }

  EditButtonClicked = () => {
    const {
      전공명,
      지도교수명,
      학과명,
      학교명,
      학교입학일,
      학교졸업일,
      학위구분,
      학위논문명,
      고유키
    } = this.state;

    console.log("Edit button clicked!");

    // 기본실적 불러오기 변경하기

    const BasicInfoClient = new W3CWebSocket(
      updateWebSocketUri + `/degreeInfo/${고유키}`
    );
    BasicInfoClient.onopen = () => {
      console.log("WebSocket Client Connected");
      const body = {
        전공명,
        지도교수명,
        학과명,
        학교명,
        학교입학일,
        학교졸업일,
        학위구분,
        학위논문명,
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
    const { degreeInfos } = this.state;
    const degreeInfo = degreeInfos.filter(
      degreeinfo => degreeinfo.고유키 === id
    )[0];
    const {
      전공명,
      지도교수명,
      학과명,
      학교명,
      학교입학일,
      학교졸업일,
      학위구분,
      학위논문명,
      고유키
    } = degreeInfo;
    this.setState({
      전공명,
      지도교수명,
      학과명,
      학교명,
      학교입학일,
      학교졸업일,
      학위구분,
      학위논문명,
      고유키
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default EditResearcherDegree;
