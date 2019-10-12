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
import AddResearcherDegree from "./AddResearcherDegree/AddResearcherDegree";
import AddResearcherCareer from "./AddResearcherCareer";
import AddResearcherPaper from "./AddResearcherPaper";
import AddResearcherPatent from "./AddResearcherPatent";
import EditResearcherBasic from "./EditResearcherBasic";
import EditResearcherDegree from "./EditResearcherDegree";
import EditResearcherCareer from "./EditResearcherCareer/Career";
import EditResearcherPatent from "./EditResearcherPatent";
import EditResearcherPaper from "./EditResearcherPaper";

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
      {/* 연구자 등록 부분 */}
      {/* {fn === "add-researcher-degree" && <AddResearcher fn={fn} />} */}
      {fn === "add-researcher-degree" && <AddResearcherDegree />}
      {fn === "add-researcher-career" && <AddResearcherCareer />}
      {fn === "add-researcher-paper" && <AddResearcherPaper />}
      {fn === "add-researcher-patent" && <AddResearcherPatent />}
      {/* 연구자 등록 부분 */}
      {/* 연구자 수정 부분 */}
      {fn === "edit-researcher-basic" && <EditResearcherBasic />}
      {fn === "edit-researcher-career" && <EditResearcherCareer />}
      {fn === "edit-researcher-paper" && <EditResearcherPaper />}
      {fn === "edit-researcher-patent" && <EditResearcherPatent />}
      {fn === "edit-researcher-degree" && <EditResearcherDegree />}
      {/* 연구자 수정 부분 */}

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
