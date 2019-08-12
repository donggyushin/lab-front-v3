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
`;

class Career2 extends React.Component {
  render() {
    return (
      <Container>
        <Title>Career1</Title>
        <Title>Career2</Title>
        <Title>Career3</Title>
      </Container>
    );
  }
}

export default Career2;
