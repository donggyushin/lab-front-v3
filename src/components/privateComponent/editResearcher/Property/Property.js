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

class Propery extends React.Component {
  render() {
    return (
      <Container>
        <a href={"/v1/edit-researcher-detail?k=property&t=1"}>
          <Title>Property1</Title>
        </a>
        <a href={"/v1/edit-researcher-detail?k=property&t=2"}>
          <Title>Property2</Title>
        </a>
        <a href={"/v1/edit-researcher-detail?k=property&t=3"}>
          <Title>Property3</Title>
        </a>
      </Container>
    );
  }
}

export default Propery;
