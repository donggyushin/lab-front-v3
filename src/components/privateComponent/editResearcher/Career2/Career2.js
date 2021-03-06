import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
`;

const Title = styled.div`
  color: #34495e;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  cursor: pointer;
`;

class Career2 extends React.Component {
  render() {
    return (
      <Container>
        <a href={"/v1/edit-researcher-detail?k=career&t=1"}>
          <Title>Career1</Title>
        </a>
        <a href={"/v1/edit-researcher-detail?k=career&t=2"}>
          <Title>Career2</Title>
        </a>
        <a href={"/v1/edit-researcher-detail?k=career&t=3"}>
          <Title>Career3</Title>
        </a>
      </Container>
    );
  }
}

export default Career2;
