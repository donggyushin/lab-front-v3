import React from "react";
import styled from "styled-components";
import { MiddleWhiteText } from "../../../constants/styledComponents";
import { FaArrowAltCircleRight } from "react-icons/fa";
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

const ArrowText = styled.div`
  color: white;
  z-index: 2;
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
    {fn === "search-researcher" && userLevel === "agencyAdmin" && (
      <LeftArrow text={"과학기술인등록번호 조회"} to={"/v1/search-num"} />
    )}
    {fn === "search-num" && userLevel === "agencyAdmin" && (
      <RightArrow
        text={"연구자 정보 조회"}
        to={"/v1/search-researcher?k=basic"}
      />
    )}
    {userLevel === "normal" && fn === "search-num" && (
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
    )}
    {userLevel === "normal" && fn === "edit-researcher" && (
      <LeftArrow text={"연구자 정보 등록"} to={"/v1/add-researcher"} />
    )}
    {userLevel === "normal" && fn === "edit-researcher" && (
      <RightArrow text={"조회"} to={"/v1/search"} />
    )}
    {userLevel === "normal" && fn === "search" && (
      <LeftArrow text={"연구자 정보 수정"} to={"/v1/edit-researcher?k=basic"} />
    )}
    {userLevel === "normal" && fn === "search" && (
      <RightArrow text={"과학기술인등록번호 조회"} to={"/v1/search-num"} />
    )}
    {userLevel === "intergrated" && fn === "add-manager" && (
      <RightArrow text={"기관관리자 삭제"} to={"/v1/remove-manager"} />
    )}
    {userLevel === "intergrated" && fn === "remove-manager" && (
      <LeftArrow text={"기관관리자 삭제"} to={"/v1/add-manager"} />
    )}
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
