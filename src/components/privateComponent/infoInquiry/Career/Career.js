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
    return (
      <Card>
        <a href={"/v1/search-researcher-detail?k=career&t=1"}>
          <Row>
            <BiggerThanNormal>근무 기관명 : </BiggerThanNormal>
            <BiggerThanNormal> 349085</BiggerThanNormal>
          </Row>
        </a>
        <Divider />
        <a href={"/v1/search-researcher-detail?k=career&t=1"}>
          <Row>
            <BiggerThanNormal>근무 기관명 : </BiggerThanNormal>
            <BiggerThanNormal> 349085</BiggerThanNormal>
          </Row>
        </a>
        <Divider />
        <a href={"/v1/search-researcher-detail?k=career&t=1"}>
          <Row>
            <BiggerThanNormal>근무 기관명 : </BiggerThanNormal>
            <BiggerThanNormal> 349085</BiggerThanNormal>
          </Row>
        </a>
        <Divider />
      </Card>
    );
  }
}

export default Career;
