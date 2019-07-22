import React from "react";
import styled from "styled-components";
import { MiddleWhiteText } from "../../../constants/styledComponents";

const Container = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Presenter = ({ fn }) => (
  <Container>
    <img
      width={"100%"}
      style={{
        position: "absolute"
      }}
      src={"https://www.kisti.re.kr/resources/images/lead/main2.jpg"}
    />
    <MiddleWhiteText
      style={{
        zIndex: 3
      }}
    >
      {fn === "search-num" && "과학기술인등록번호 조회"}
      {fn === "add-researcher" && "연구자 정보 등록"}
      {fn === "edit-researcher" && "연구자 정보 수정"}
      {fn === "search-researcher" && "연구자 정보 조회"}
      {fn === "add-manager" && "기관관리자 추가"}
      {fn === "remove-manager" && "기관관리자 삭제"}
    </MiddleWhiteText>
  </Container>
);

export default Presenter;
