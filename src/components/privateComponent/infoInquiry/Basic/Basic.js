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

class Basic extends React.Component {
  render() {
    const { basicInfo } = this.props;
    return (
      <Card>
        <Row>
          <BiggerThanNormal>연구자 과학기술인등록번호 : </BiggerThanNormal>
          <BiggerThanNormal> {basicInfo.과학기술인등록번호}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>연구자 이름(국문) :</BiggerThanNormal>
          <BiggerThanNormal>{basicInfo.연구자명_국문}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>연구자 이름(영문) :</BiggerThanNormal>
          <BiggerThanNormal>{basicInfo.연구자명_영문}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>생년월일 :</BiggerThanNormal>
          <BiggerThanNormal>{basicInfo.생년월일}</BiggerThanNormal>
        </Row>
        <Divider />
      </Card>
    );
  }
}

export default Basic;
