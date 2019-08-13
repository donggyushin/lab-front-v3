import React from "react";
import styled from "styled-components";
import {
  MiddleWhiteText,
  Row,
  BiggerThanNormal,
  Column
} from "../../../constants/styledComponents";
import Colors from "../../../constants/colors";
import SideNav from "../sideNav";
import { Divider, Input, Button } from "antd";
import Basic from "./Basic";
import Degree from "./Degree";
import Career from "./Career";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const TitleBackground = styled.div`
  background: ${Colors.deepKoamaru};
  opacity: 0.9;
  width: 100%;
  height: 50px;
`;

const Card = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 150px;
`;

const Label = styled.div`
  color: black;
  font-weight: 900;
  font-size: 25px;
  white-space: nowrap;
`;

const MarginRight = styled.div`
  width: 20px;
`;

const Presenter = ({ k, fn }) => (
  <Container>
    <>
      <TitleContainer>
        <TitleBackground />
        <MiddleWhiteText
          style={{
            position: "absolute",
            width: "800px",
            top: "8px"
          }}
        >
          {(k === null || k === "basic") && "기본정보 조회"}
          {k === "degree" && "학력사항 조회"}
          {k === "career" && "경력사항 조회"}
          {k === "paper" && "논문실적 조회"}
          {k === "property" && "지적재산권 조회"}
        </MiddleWhiteText>
      </TitleContainer>
      <Row
        style={{
          marginTop: 200
        }}
      >
        <Label>과학기술인등록번호</Label>
        <MarginRight />
        <Input
          style={{
            width: 200
          }}
        />
        <MarginRight />
        <Button>조회</Button>
      </Row>
      <Row
        style={{
          width: "100%",
          justifyContent: "center"
        }}
      >
        {/* <div
          style={{
            position: "relative",
            right: 190
          }}
        >
          <SideNav fn={fn} k={k} />
        </div> */}

        {(k === null || k === "basic") && <Basic />}
        {k === "degree" && <Degree />}
        {k === "career" && <Career />}
      </Row>
    </>
  </Container>
);

export default Presenter;
