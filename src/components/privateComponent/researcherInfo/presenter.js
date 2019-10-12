import React from "react";
import styled from "styled-components";
import {
  BiggerThanNormal,
  Row,
  BiggerThanNormalWithBackground,
  NormalText
} from "../../../constants/styledComponents";
import BasicInfoComponent from "./basicInfo";
import PaperInfoComponent from "./paperInfo";
import CareerInfoComponent from "./careerInfo";
import DegreeInfoComponent from "./degreeInfo";
import PatentInfoComponent from "./patentInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Contents = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  width: 82%;
  padding-left: 20px;
  border-bottom: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

const MarginBottom = styled.div`
  height: 100px;
`;

const Presenter = ({
  onMessagePaper,
  basicInfo,
  paperInfo,
  patentInfo,
  careerInfo,
  degreeInfo,
  scienceId
}) => (
  <Container>
    <BiggerThanNormal>
      신동규님의 과학기술인등록번호는 {scienceId} 입니다.
    </BiggerThanNormal>
    <Card>
      <BasicInfoComponent basicInfo={basicInfo} />
      <MarginBottom />
      {paperInfo &&
        paperInfo.map(paper => {
          return (
            <PaperInfoComponent
              key={paper.과학기술인등록번호}
              paperInfo={paper}
            />
          );
        })}
      <MarginBottom />
      {careerInfo &&
        careerInfo.map(career => {
          return (
            <CareerInfoComponent
              key={career.과학기술인등록번호}
              careerInfo={career}
            />
          );
        })}
      <MarginBottom />
      {degreeInfo &&
        degreeInfo.map(degree => {
          return (
            <DegreeInfoComponent
              key={degree.과학기술인등록번호}
              degreeInfo={degree}
            />
          );
        })}
      <MarginBottom />
      {patentInfo &&
        patentInfo.map(patent => {
          return (
            <PatentInfoComponent
              key={patent.과학기술인등록번호}
              patentInfo={patent}
            />
          );
        })}
      <MarginBottom />
    </Card>
  </Container>
);

export default Presenter;
