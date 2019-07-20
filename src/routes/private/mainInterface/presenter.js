import React from "react";
import styled from "styled-components";
import MainPicture from "../../../components/privateComponent/mainPicture";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Presenter = () => (
  <Container>
    <MainPicture />
  </Container>
);

export default Presenter;
