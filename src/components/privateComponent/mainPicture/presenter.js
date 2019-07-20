import React from "react";
import styled from "styled-components";
import { BigText } from "../../../constants/styledComponents";

const Container = styled.div`
  position: relative;
`;

const Presenter = () => (
  <Container>
    <img
      style={{
        width: "100%",
        height: 600
      }}
      src={require("../../../assets/blockchain.jpg")}
    />
    <BigText
      style={{
        position: "absolute",
        top: "45%",
        left: 100,
        color: "white"
      }}
    >
      국가 R&D 정보 공유 시스템
    </BigText>
  </Container>
);

export default Presenter;
