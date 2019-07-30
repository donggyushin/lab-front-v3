import React from "react";
import styled from "styled-components";
import { BiggerThanNormal150 } from "../../../constants/styledComponents";
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

class AddAndEditResearcher extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <BiggerThanNormal150>과학기술인등록번호</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>연구자명(국문)</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>연구자명(영문)</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>생년월일</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150
            style={{
              position: "relative",
              right: "110px"
            }}
          >
            성별
          </BiggerThanNormal150>
          <MarginRight />
          <Radio.Group>
            <Radio value={1}>남자</Radio>
            <Radio value={2}>여자</Radio>
          </Radio.Group>
        </Row>
        <Row>
          <BiggerThanNormal150>이메일</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>휴대폰 번호</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>소속기관명</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>소속기관 주소</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>소속 부서</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>직급</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>중복가입확인코드</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>고유식별코드</BiggerThanNormal150>
          <MarginRight />
          <Input
            style={{
              width: 350
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>가입일자</BiggerThanNormal150>
          <MarginRight />
          <Input
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

export default AddAndEditResearcher;
