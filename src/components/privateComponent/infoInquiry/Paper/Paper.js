import React from "react";
import styled from "styled-components";
import { Row, BiggerThanNormal } from "../../../../constants/styledComponents";
import { Divider } from "antd";

const Card = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 150px;
`;

function PaperComponent({ paperInfo }) {
  return (
    <Card>
      <Row>
        <BiggerThanNormal>ISSN 번호 : </BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.ISSN번호}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>게재일자 :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.게재일자}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>논문제목 :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.논문제목_국문}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>논문제목(영문) :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.논문제목_영문}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>볼륨 :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.볼륨}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>시작페이지 :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.시작페이지}</BiggerThanNormal>
      </Row>
      <Divider />

      <Row>
        <BiggerThanNormal>끝페이지 :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.끝페이지}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>저자명 :</BiggerThanNormal>
        <BiggerThanNormal>{paperInfo.저자명}</BiggerThanNormal>
      </Row>

      <Divider />
    </Card>
  );
}

export default PaperComponent;
