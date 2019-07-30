import React from "react";
import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Container = styled.div``;

const ArrowText = styled.div`
  color: white;
  z-index: 2;
`;

class LeftArrow extends React.Component {
  render() {
    const { text, to } = this.props;
    return (
      <a href={to}>
        <div
          style={{
            position: "absolute",
            left: 100,
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <FaArrowAltCircleLeft
            style={{
              marginRight: 20,
              position: "relative"
            }}
            color={"white"}
          />
          <ArrowText>{text}</ArrowText>
        </div>
      </a>
    );
  }
}

export default LeftArrow;
