import React from "react";
import styled from "styled-components";
import MiddlePicture from "../../../components/privateComponent/middlePicture";
import SearchNumber from "../../../components/privateComponent/number";
import InfoInquiry from "../../../components/privateComponent/infoInquiry";
import AgencyManager from "../../../components/privateComponent/addAgencyManager";
import ResearchInfo from "../../../components/privateComponent/researcherInfo";
import AddResearcher from "../../../components/privateComponent/AddResearcher";
import EditResearcher from "../../../components/privateComponent/editResearcher";
import EditCareerDetail from "../../../components/privateComponent/editResearcher/Career2/EditCareerDetail";
import EditPaperDetail from "../../../components/privateComponent/editResearcher/Paper/EditPaperDetail";
import EditPropertyDetail from "../../../components/privateComponent/editResearcher/Property/EditPropertyDetail";
import CareerDetail from "../../../components/privateComponent/infoInquiry/Career/CareerDetail";

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
      {fn === "edit-researcher-detail" && k === "career" && (
        <EditCareerDetail />
      )}
      {fn === "edit-researcher-detail" && k === "paper" && <EditPaperDetail />}
      {fn === "edit-researcher-detail" && k === "property" && (
        <EditPropertyDetail />
      )}
      {fn === "search-researcher-detail" && k === "career" && <CareerDetail />}
    </Container>
  );
};
export default Presenter;
