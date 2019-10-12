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

class AddResearcherPaper extends React.Component {
  state = {
    ISSN번호: "",
    게재일자: "",
    과학기술인등록번호: "",
    끝페이지: "",
    논문제목_국문: "",
    논문제목_영문: "",
    볼륨: "",
    시작페이지: "",
    저자명: "",
    참여구분: "",
    학술지명: ""
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const {
      ISSN번호,
      게재일자,
      과학기술인등록번호,
      끝페이지,
      논문제목_국문,
      논문제목_영문,
      볼륨,
      시작페이지,
      저자명,
      참여구분,
      학술지명
    } = this.state;
    const { handleInput } = this;
    return (
      <Container>
        <Row>
          <BiggerThanNormal150>과학기술인등록번호</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"과학기술인등록번호"}
            value={과학기술인등록번호}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>ISSN번호</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"ISSN번호"}
            value={ISSN번호}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>게재일자</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"게재일자"}
            value={게재일자}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>끝페이지</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"끝페이지"}
            value={끝페이지}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>논문제목_국문</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"논문제목_국문"}
            value={논문제목_국문}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>논문제목_영문</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"논문제목_영문"}
            value={논문제목_영문}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>볼륨</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"볼륨"}
            value={볼륨}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>시작페이지</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"시작페이지"}
            value={시작페이지}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>저자명</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"저자명"}
            value={저자명}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>참여구분</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"참여구분"}
            value={참여구분}
            onChange={handleInput}
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>학술지명</BiggerThanNormal150>
          <MarginRight />
          <Input
            name={"학술지명"}
            value={학술지명}
            onChange={handleInput}
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

export default AddResearcherPaper;
