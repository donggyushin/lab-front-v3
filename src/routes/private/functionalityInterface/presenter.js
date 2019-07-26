import React from "react";
import styled from "styled-components";
import MiddlePicture from "../../../components/privateComponent/middlePicture";
import SearchNumber from "../../../components/privateComponent/number";
import InfoInquiry from "../../../components/privateComponent/infoInquiry";
import AgencyManager from "../../../components/privateComponent/addAgencyManager";

const Container = styled.div``;

const Presenter = ({ fn, k, userLevel }) => {
  return (
    <Container>
      <MiddlePicture fn={fn} />
      {fn === "search-num" && <SearchNumber userLevel={userLevel} fn={fn} />}
      {fn === "search-researcher" && <InfoInquiry fn={fn} k={k} />}
      {(fn === "add-manager" || fn === "remove-manager") && (
        <AgencyManager fn={fn} />
      )}
    </Container>
  );
};
export default Presenter;
