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

class Career extends React.Component {
  render() {
    const { careerInfo } = this.props;
    return (
      <Card>
        {/* <a href={"/v1/search-researcher-detail?k=career&t=1"}> */}
        <Row>
          <BiggerThanNormal>근무 기관명 : </BiggerThanNormal>
          <BiggerThanNormal>{careerInfo.근무기관명}</BiggerThanNormal>
        </Row>
        {/* </a> */}
        <Divider />
        {/* <a href={"/v1/search-researcher-detail?k=career&t=1"}> */}
        <Row>
          <BiggerThanNormal>근무 시작일 : </BiggerThanNormal>
          <BiggerThanNormal>{careerInfo.근무시작일}</BiggerThanNormal>
        </Row>
        {/* </a> */}
        <Divider />
        {/* <a href={"/v1/search-researcher-detail?k=career&t=1"}> */}
        <Row>
          <BiggerThanNormal>근무 종료일 : </BiggerThanNormal>
          <BiggerThanNormal>{careerInfo.근무종료일}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>직급 : </BiggerThanNormal>
          <BiggerThanNormal>{careerInfo.직급}</BiggerThanNormal>
        </Row>
        {/* </a> */}
        <Divider />
      </Card>
    );
  }
}

export default Career;
