import React from "react";
import styled from "styled-components";
import {
  NormalText,
  Row,
  BiggerThanNormal150
} from "../../../constants/styledComponents";
import { Input, Radio, Button } from "antd";
import { DateInput } from "@opuscapita/react-dates";
import SideNav from "../sideNav";

const Container = styled.div`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Inner = styled.div`
  width: 800px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LongInput = `(
  <Input
    style={{
      width: 350,
      textAlign: "center"
    }}
  />
)`;

const Presenter = ({ iconLoading, searchButtonTapped, fn, userLevel }) => (
  <Container>
    <Row>
      {/* <div
        style={{
          position: "relative",
          right: 190
        }}
      >
        <SideNav userLevel={userLevel} fn={fn} />
      </div> */}
      <Inner>
        <Row>
          <BiggerThanNormal150>이름</BiggerThanNormal150>
          <Input
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>생년월일</BiggerThanNormal150>
          <Input
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>이메일</BiggerThanNormal150>
          <Input
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>휴대폰 번호</BiggerThanNormal150>
          <Input
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
      </Inner>
    </Row>

    <Button onClick={searchButtonTapped} loading={iconLoading}>
      조회하기
    </Button>
  </Container>
);

export default Presenter;
