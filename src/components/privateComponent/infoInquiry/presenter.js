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
import PaperComponent from "./Paper";
import PatentComponent from "./Patent";

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

const MarginBottom = styled.div`
  height: 200px;
`;

const ScrollBarContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: flex-start;
`;

const HorizontalScroll = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  flex-shrink: 0;
  justify-content: flex-start;
  padding-left: 20px;
`;

const Presenter = ({
  k,
  fn,
  searchButtonClicked,
  scienceId,
  handleInput,
  basicInfo,
  careerInfos,
  paperInfos,
  patentInfos,
  degreeInfos,
  myScienceId,
  user
}) => (
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
      <Label
        style={{
          position: "relative",
          top: 70
        }}
      >
        {user.name}&nbsp;님의 과학기술인등록번호&nbsp;
        {myScienceId}
      </Label>
      <Row
        style={{
          marginTop: 200
        }}
      >
        <Label>과학기술인등록번호</Label>
        <MarginRight />
        <Input
          onChange={handleInput}
          style={{
            width: 200
          }}
          value={scienceId}
          name={"scienceId"}
        />
        <MarginRight />
        <Button onClick={searchButtonClicked}>조회</Button>
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

        {(k === null || k === "basic") && basicInfo.과학기술인등록번호 && (
          <Basic basicInfo={basicInfo} />
        )}
        <ScrollBarContainer>
          <HorizontalScroll>
            {k === "degree" &&
              degreeInfos.map(degreeInfo => {
                return (
                  <Degree key={degreeInfo.고유키} degreeInfo={degreeInfo} />
                );
              })}
            {k === "career" &&
              careerInfos.map(careerInfo => {
                return (
                  <Career key={careerInfo.고유키} careerInfo={careerInfo} />
                );
              })}
            {k === "paper" &&
              paperInfos.map(paperInfo => {
                return (
                  <PaperComponent
                    key={paperInfo.고유키}
                    paperInfo={paperInfo}
                  />
                );
              })}
            {k === "property" &&
              patentInfos.map(patentInfo => {
                return (
                  <PatentComponent
                    key={patentInfo.고유키}
                    patentInfo={patentInfo}
                  />
                );
              })}
          </HorizontalScroll>
        </ScrollBarContainer>
      </Row>
      <MarginBottom />
    </>
  </Container>
);

export default Presenter;
