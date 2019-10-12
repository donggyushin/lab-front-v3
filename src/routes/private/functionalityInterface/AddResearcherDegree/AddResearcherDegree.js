import React from "react";
import styled from "styled-components";
import { BiggerThanNormal150 } from "../../../../constants/styledComponents";
import { Input, Radio, Button } from "antd";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { websocketUri } from "../../../../constants/uris";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 200px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const MarginRight = styled.div`
  width: 50px;
`;

class AddResearcherDegree extends React.Component {
  state = {
    과학기술인등록번호: "",
    전공명: "",
    지도교수명: "",
    학과명: "",
    학교명: "",
    학교입학일: "",
    학교졸업일: "",
    학위구분: "",
    학위논문명: ""
  };
  render() {
    const {
      과학기술인등록번호,
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
        <Row>
          <BiggerThanNormal150>과학기술인등록번호</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={과학기술인등록번호}
            name={"과학기술인등록번호"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>전공명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={전공명}
            name={"전공명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>지도교수명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={지도교수명}
            name={"지도교수명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학과명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={학과명}
            name={"학과명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학교명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={학교명}
            name={"학교명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학교입학일</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={학교입학일}
            name={"학교입학일"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학교졸업일</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={학교졸업일}
            name={"학교졸업일"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학위구분</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={학위구분}
            name={"학위구분"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학위논문명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={학위논문명}
            name={"학위논문명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Button
          style={{
            marginTop: 50,
            width: 200
          }}
        >
          등록하기
        </Button>
      </Container>
    );
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default AddResearcherDegree;
