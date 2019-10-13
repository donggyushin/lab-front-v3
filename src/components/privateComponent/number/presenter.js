import React from "react";
import styled from "styled-components";
import {
  NormalText,
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

const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Inner = styled.div`
  width: 800px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Presenter = ({
  iconLoading,
  searchButtonTapped,
  fn,
  userLevel,
  이름,
  생년월일,
  이메일,
  휴대폰번호,
  handleInput,
  과학기술인등록번호
}) => (
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
            placeholder={"모든 항목을 채워주세요"}
            value={이름}
            name={"이름"}
            onChange={handleInput}
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>생년월일</BiggerThanNormal150>
          <Input
            placeholder={"모든 항목을 채워주세요"}
            value={생년월일}
            name={"생년월일"}
            onChange={handleInput}
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>이메일</BiggerThanNormal150>
          <Input
            placeholder={"모든 항목을 채워주세요"}
            value={이메일}
            name={"이메일"}
            onChange={handleInput}
            style={{
              width: 350,
              textAlign: "center"
            }}
          />
        </Row>
        <Row>
          <BiggerThanNormal150>휴대폰번호</BiggerThanNormal150>
          <Input
            placeholder={"모든 항목을 채워주세요"}
            value={휴대폰번호}
            name={"휴대폰번호"}
            onChange={handleInput}
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
    <BiggerThanNormal150
      style={{
        marginTop: 50
      }}
    >
      {과학기술인등록번호 && 과학기술인등록번호}
    </BiggerThanNormal150>
  </Container>
);

export default Presenter;
