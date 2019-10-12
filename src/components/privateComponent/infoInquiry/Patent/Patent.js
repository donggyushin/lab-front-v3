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

function PatentComponent({ patentInfo }) {
  return (
    <Card>
      <Row>
        <BiggerThanNormal>특허명 : </BiggerThanNormal>
        <BiggerThanNormal>{patentInfo.특허명}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>특허 번호 :</BiggerThanNormal>
        <BiggerThanNormal>{patentInfo.특허번호}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>등록구분 :</BiggerThanNormal>
        <BiggerThanNormal>{patentInfo.등록구분}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>등록국가 :</BiggerThanNormal>
        <BiggerThanNormal>{patentInfo.등록국가}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>발명인 :</BiggerThanNormal>
        <BiggerThanNormal>{patentInfo.발명인}</BiggerThanNormal>
      </Row>
      <Divider />
      <Row>
        <BiggerThanNormal>발명일자 :</BiggerThanNormal>
        <BiggerThanNormal>{patentInfo.발명일자}</BiggerThanNormal>
      </Row>
      <Divider />
    </Card>
  );
}

export default PatentComponent;
