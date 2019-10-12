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

class AddResearcherCareer extends React.Component {
  state = {
    과학기술인등록번호: "",
    근무기관명: "",
    근무시작일: "",
    근무종료일: "",
    직급: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { handleInput } = this;
    const {
      과학기술인등록번호,
      근무기관명,
      근무시작일,
      근무종료일,
      직급
    } = this.state;
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
          <BiggerThanNormal150>근무기관명</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={근무기관명}
            name={"근무기관명"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>근무시작일</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={근무시작일}
            name={"근무시작일"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>근무종료일</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={근무종료일}
            name={"근무종료일"}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>직급</BiggerThanNormal150>
          <MarginRight />
          <Input
            onChange={handleInput}
            value={직급}
            name={"직급"}
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

export default AddResearcherCareer;
