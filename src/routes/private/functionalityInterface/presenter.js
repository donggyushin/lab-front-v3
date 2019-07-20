import React from "react";
import styled from "styled-components";
import MiddlePicture from "../../../components/privateComponent/middlePicture";
import SearchNumber from "../../../components/privateComponent/number";

const Container = styled.div``;

const Presenter = ({ fn }) => {
  return (
    <Container>
      <MiddlePicture fn={fn} />
      {fn === "search-num" && <SearchNumber />}
    </Container>
  );
};
export default Presenter;
