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
    const { degreeInfo } = this.props;
    return (
      <Card>
        <Row>
          <BiggerThanNormal>학교명 : </BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.학교명}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학과명 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.학과명}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>전공명 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.전공명}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>지도교수명 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.지도교수명}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학위논문명 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.학위논문명}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학교입학일 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.학교입학일}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학교졸업일 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.학교졸업일}</BiggerThanNormal>
        </Row>
        <Divider />
        <Row>
          <BiggerThanNormal>학위구분 :</BiggerThanNormal>
          <BiggerThanNormal>{degreeInfo.학위구분}</BiggerThanNormal>
        </Row>
      </Card>
    );
  }
}

export default Degree;
