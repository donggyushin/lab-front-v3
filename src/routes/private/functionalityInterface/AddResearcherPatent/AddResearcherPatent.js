import React from "react";
import styled from "styled-components";
import { BiggerThanNormal150 } from "../../../../constants/styledComponents";
import { Input, Radio, Button } from "antd";
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

class AddResearcherPatent extends React.Component {
  state = {
    과학기술인등록번호: "",
    등록구분: "",
    등록국가: "",
    발명인: "",
    발명일자: "",
    특허명: "",
    특허번호: ""
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const {
      과학기술인등록번호,
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
          <BiggerThanNormal150>등록구분</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={등록구분}
            name={"등록구분"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>등록국가</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={등록국가}
            name={"등록국가"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>발명인</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={발명인}
            name={"발명인"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>발명일자</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={발명일자}
            name={"발명일자"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>특허명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={특허명}
            name={"특허명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>특허번호</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={특허번호}
            name={"특허번호"}
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
}

export default AddResearcherPatent;
