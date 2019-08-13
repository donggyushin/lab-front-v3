import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 120px;
  font-size: 18px;
`;

const NormalText = styled.div`
  font-size: 18px;
`;

class CareerDetail extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <Row>
            <Label>근무기관명 </Label>
            <NormalText>: test</NormalText>
          </Row>
          <Row>
            <Label>직급 </Label>
            <NormalText>: test</NormalText>
          </Row>
          <Row>
            <Label>근무시작일 </Label>
            <NormalText>: test</NormalText>
          </Row>
          <Row>
            <Label>근무종료일 </Label>
            <NormalText>: test</NormalText>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default CareerDetail;
