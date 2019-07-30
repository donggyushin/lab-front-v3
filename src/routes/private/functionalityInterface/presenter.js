import React from "react";
import styled from "styled-components";
import MiddlePicture from "../../../components/privateComponent/middlePicture";
import SearchNumber from "../../../components/privateComponent/number";
import InfoInquiry from "../../../components/privateComponent/infoInquiry";
import AgencyManager from "../../../components/privateComponent/addAgencyManager";
import ResearchInfo from "../../../components/privateComponent/researcherInfo";
import AddResearcher from "../../../components/privateComponent/AddResearcher";
import EditResearcher from "../../../components/privateComponent/editResearcher";

const Container = styled.div``;

const Presenter = ({ fn, k, userLevel }) => {
  return (
    <Container>
      <MiddlePicture fn={fn} userLevel={userLevel} k={k} />
      {fn === "search-num" && <SearchNumber userLevel={userLevel} fn={fn} />}
      {fn === "search-researcher" && <InfoInquiry fn={fn} k={k} />}
      {(fn === "add-manager" || fn === "remove-manager") && (
        <AgencyManager fn={fn} />
      )}
      {fn === "search" && <ResearchInfo />}
      {fn === "add-researcher" && <AddResearcher fn={fn} />}
      {fn === "edit-researcher" && <EditResearcher fn={fn} k={k} />}
    </Container>
  );
};
export default Presenter;
