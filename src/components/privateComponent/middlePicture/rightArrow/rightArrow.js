import React from "react";
import styled from "styled-components";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ArrowText = styled.div`
  color: white;
  z-index: 2;
`;

class RightArrow extends React.Component {
  render() {
    const { text, to } = this.props;
    return (
      <a href={to}>
        <div
          style={{
            position: "absolute",
            right: 100,
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <ArrowText>{text}</ArrowText>
          <FaArrowAltCircleRight
            style={{
              marginLeft: 20,
              position: "relative"
            }}
            color={"white"}
          />
        </div>
      </a>
    );
  }
}

export default RightArrow;
