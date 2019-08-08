import React from "react";
import styled from "styled-components";
import { MiddleWhiteText } from "../../../constants/styledComponents";
import LeftArrow from "./leftArrow";
import RightArrow from "./rightArrow";

const Container = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Presenter = ({ fn, userLevel, k }) => (
  <Container>
    <img
      width={"100%"}
      style={{
        position: "absolute"
      }}
      src={"https://www.kisti.re.kr/resources/images/lead/main2.jpg"}
    />
    {/* 기관 관리자유저일때 */}
    {fn === "search-researcher" &&
      userLevel === "agencyAdmin" &&
      k === "basic" && (
        <>
          <LeftArrow
            text={"지적 재산권 실적"}
            to={"/v1/search-researcher?k=property"}
          />
          <RightArrow
            text={"학력 사항"}
            to={"/v1/search-researcher?k=degree"}
          />
        </>
      )}
    {fn === "search-researcher" &&
      userLevel === "agencyAdmin" &&
      k === "degree" && (
        <>
          <LeftArrow text={"기본 정보"} to={"/v1/search-researcher?k=basic"} />
          <RightArrow
            text={"경력 사항"}
            to={"/v1/search-researcher?k=career"}
          />
        </>
      )}
    {fn === "search-researcher" &&
      userLevel === "agencyAdmin" &&
      k === "career" && (
        <>
          <LeftArrow text={"학력 사항"} to={"/v1/search-researcher?k=degree"} />
          <RightArrow text={"논문 실적"} to={"/v1/search-researcher?k=paper"} />
        </>
      )}
    {fn === "search-researcher" &&
      userLevel === "agencyAdmin" &&
      k === "paper" && (
        <>
          <LeftArrow text={"경력 사항"} to={"/v1/search-researcher?k=career"} />
          <RightArrow
            text={"지적재산권 실적"}
            to={"/v1/search-researcher?k=property"}
          />
        </>
      )}
    {fn === "search-researcher" &&
      userLevel === "agencyAdmin" &&
      k === "property" && (
        <>
          <LeftArrow text={"논문 실적"} to={"/v1/search-researcher?k=paper"} />
          <RightArrow text={"기본 정보"} to={"/v1/search-researcher?k=basic"} />
        </>
      )}
    {/* {fn === "search-num" && userLevel === "agencyAdmin" && (
      <RightArrow
        text={"연구자 정보 조회"}
        to={"/v1/search-researcher?k=basic"}
      /> */}
    )}
    {/* 기관 관리자유저일때 */}
    {/* 일반 유저일때 */}
    {/* {userLevel === "normal" && fn === "search-num" && (
      <LeftArrow text={"조회"} to={"/v1/search"} />
    )}
    {userLevel === "normal" && fn === "search-num" && (
      <RightArrow text={"연구자 정보 등록"} to={"/v1/add-researcher"} />
    )}
    {userLevel === "normal" && fn === "add-researcher" && (
      <LeftArrow text={"과학기술인등록번호 조회"} to={"/v1/search-num"} />
    )}
    {userLevel === "normal" && fn === "add-researcher" && (
      <RightArrow
        text={"연구자 정보 수정"}
        to={"/v1/edit-researcher?k=basic"}
      />
    )} */}
    {/* 일반 유저일때 */}
    {/* 연구자 정보 수정 부분 */}
    {userLevel === "normal" && fn === "edit-researcher" && k === "basic" && (
      <LeftArrow text={"특허 실적"} to={"/v1/edit-researcher?k=property"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "basic" && (
      <RightArrow text={"학력 사항"} to={"/v1/edit-researcher?k=degree"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "degree" && (
      <LeftArrow text={"기본 정보"} to={"/v1/edit-researcher?k=basic"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "degree" && (
      <RightArrow text={"경력 사항"} to={"/v1/edit-researcher?k=career"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "career" && (
      <LeftArrow text={"학력 정보"} to={"/v1/edit-researcher?k=degree"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "career" && (
      <RightArrow text={"논문 실적"} to={"/v1/edit-researcher?k=paper"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "paper" && (
      <LeftArrow text={"경력 사항"} to={"/v1/edit-researcher?k=career"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "paper" && (
      <RightArrow text={"특허 실적"} to={"/v1/edit-researcher?k=property"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "property" && (
      <LeftArrow text={"논문 실적"} to={"/v1/edit-researcher?k=paper"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && k === "property" && (
      <RightArrow text={"기본 정보"} to={"/v1/edit-researcher?k=basic"} />
    )}
    {/* 연구자 정보 수정 부분 */}
    {/* 일반 유저 연구자 조회 부분 */}
    {/* {userLevel === "normal" && fn === "search" && (
      <LeftArrow text={"연구자 정보 수정"} to={"/v1/edit-researcher?k=basic"} />
    )}
    {userLevel === "normal" && fn === "search" && (
      <RightArrow text={"과학기술인등록번호 조회"} to={"/v1/search-num"} />
    )} */}
    {/* 일반 유저 연구자 조회 부분 */}
    {/* 기관 관리자 부분 */}
    {/* {userLevel === "intergrated" && fn === "add-manager" && (
      <RightArrow text={"기관관리자 삭제"} to={"/v1/remove-manager"} />
    )}
    {userLevel === "intergrated" && fn === "remove-manager" && (
      <LeftArrow text={"기관관리자 추가"} to={"/v1/add-manager"} />
    )} */}
    {/* 기관 관리자 부분 */}
    <MiddleWhiteText
      style={{
        zIndex: 2
      }}
    >
      {fn === "search-num" && "과학기술인등록번호 조회"}
      {fn === "add-researcher" && "연구자 정보 등록"}
      {fn === "edit-researcher" && "연구자 정보 수정"}
      {fn === "search-researcher" && "연구자 정보 조회"}
      {fn === "add-manager" && "기관관리자 추가"}
      {fn === "remove-manager" && "기관관리자 삭제"}
      {fn === "search" && "연구자 조회"}
    </MiddleWhiteText>
  </Container>
);

export default Presenter;
