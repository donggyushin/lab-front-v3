import React from "react";
import styled from "styled-components";
import MiddlePicture from "../../../components/privateComponent/middlePicture";
import SearchNumber from "../../../components/privateComponent/number";
import InfoInquiry from "../../../components/privateComponent/infoInquiry";

const Container = styled.div``;

const Presenter = ({ fn, k }) => {
  return (
    <Container>
      <MiddlePicture fn={fn} />
      {fn === "search-num" && <SearchNumber />}
      {k !== null && <InfoInquiry k={k} />}
    </Container>
  );
};
export default Presenter;
