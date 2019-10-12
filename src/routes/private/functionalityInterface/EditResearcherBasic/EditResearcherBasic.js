import React from "react";
import styled from "styled-components";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { websocketUri } from "../../../../constants/uris";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 800px; */
`;

const Row = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  width: 100px;
`;

const Input = styled.input``;

const Button = styled.button``;

class EditResearcherBasic extends React.Component {
  state = {
    user: {},
    scienceId: "",
    basicInfo: {},
    소속기관명: "",
    소속기관주소: "",
    소속부서: "",
    연구자명_국문: "",
    연구자명_영문: "",
    이메일: "",
    직급: "",
    휴대폰번호: ""
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
          const BasicInfoClient = new W3CWebSocket(
            websocketUri + `/basicInfo/${data.user.scienceId}`
          );
          BasicInfoClient.onopen = () => {
            console.log("WebSocket Client Connected");
          };
          BasicInfoClient.onmessage = message => {
            const parsedJson = JSON.parse(message.data);
            console.log(parsedJson);
            console.log(parsedJson.연구자명_국문);
            this.setState({
              소속기관명: parsedJson.소속기관명,
              소속기관주소: parsedJson.소속기관주소,
              소속부서: parsedJson.소속부서,
              연구자명_국문: parsedJson.연구자명_국문,
              연구자명_영문: parsedJson.연구자명_영문,
              이메일: parsedJson.이메일,
              직급: parsedJson.직급,
              휴대폰번호: parsedJson.휴대폰번호
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
      소속기관명,
      소속기관주소,
      소속부서,
      연구자명_국문,
      연구자명_영문,
      이메일,
      직급,
      휴대폰번호
    } = this.state;
    const { handleInput, EditButtonClicked } = this;
    return (
      <Container>
        <Row>
          <Label>연구자명(국문)</Label>
          <Input
            name={"연구자명_국문"}
            onChange={handleInput}
            value={연구자명_국문}
          />
        </Row>
        <Row>
          <Label>연구자명(영문)</Label>
          <Input
            name={"연구자명_영문"}
            onChange={handleInput}
            value={연구자명_영문}
          />
        </Row>
        <Row>
          <Label>소속기관명</Label>
          <Input
            name={"소속기관명"}
            onChange={handleInput}
            value={소속기관명}
          />
        </Row>
        <Row>
          <Label>소속기관주소</Label>
          <Input
            name={"소속기관주소"}
            onChange={handleInput}
            value={소속기관주소}
          />
        </Row>
        <Row>
          <Label>소속부서</Label>
          <Input name={"소속부서"} onChange={handleInput} value={소속부서} />
        </Row>
        <Row>
          <Label>이메일</Label>
          <Input name={"이메일"} onChange={handleInput} value={이메일} />
        </Row>
        <Row>
          <Label>직급</Label>
          <Input name={"직급"} onChange={handleInput} value={직급} />
        </Row>
        <Row>
          <Label>휴대폰번호</Label>
          <Input
            name={"휴대폰번호"}
            onChange={handleInput}
            value={휴대폰번호}
          />
        </Row>
        <Button onClick={EditButtonClicked}>수정하기</Button>
      </Container>
    );
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  EditButtonClicked = () => {
    const {
      소속기관명,
      소속기관주소,
      소속부서,
      연구자명_국문,
      연구자명_영문,
      이메일,
      직급,
      휴대폰번호
    } = this.state;
    console.log(연구자명_국문);
    console.log("Edit button clicked!");
  };
}

export default EditResearcherBasic;
