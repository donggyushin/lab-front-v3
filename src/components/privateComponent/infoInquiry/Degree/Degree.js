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

class Degree extends React.Component {
  render() {
    return (
      <Card>
        <Row>
          <BiggerThanNormal>학교명 : </BiggerThanNormal>
          <BiggerThanNormal> 349085</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학과명 :</BiggerThanNormal>
          <BiggerThanNormal> 홍길동</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>전공명 :</BiggerThanNormal>
          <BiggerThanNormal> Hong gil dong</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>지도교수명 :</BiggerThanNormal>
          <BiggerThanNormal> 2019년 5월 13일</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학위논문명 :</BiggerThanNormal>
          <BiggerThanNormal> 2019년 5월 13일</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학교입학일 :</BiggerThanNormal>
          <BiggerThanNormal> 2019년 5월 13일</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학교졸업일 :</BiggerThanNormal>
          <BiggerThanNormal> 2019년 5월 13일</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학위구분 :</BiggerThanNormal>
          <BiggerThanNormal> 2019년 5월 13일</BiggerThanNormal>
        </Row>
      </Card>
    );
  }
}

export default Degree;
