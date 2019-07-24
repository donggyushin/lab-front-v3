import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/colors";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  widows: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: ${Colors.fontColor};
`;

const SelectedButton = styled.div`
  widows: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: ${Colors.lightBlue};
`;

const Presenter = ({ k, fn, userLevel }) => (
  <Container>
    {fn === "search-num" && userLevel === "agencyAdmin" && (
      <>
        <a href="/v1/search-num">
          {fn === "search-num" ? (
            <SelectedButton>과학기술인등록번호 조회</SelectedButton>
          ) : (
            <Button>과학기술인등록번호 조회</Button>
          )}
        </a>
        <a href="/v1/search-researcher?k=basic">
          <Button>연구자 정보 조회</Button>
        </a>
      </>
    )}
    {((fn === "search-num" && userLevel === "normal") ||
      fn === "add-researcher" ||
      fn === "edit-researcher") && (
      <>
        <a href="/v1/search-num">
          {fn === "search-num" ? (
            <SelectedButton>과학기술인등록번호 조회</SelectedButton>
          ) : (
            <Button>과학기술인등록번호 조회</Button>
          )}
        </a>
        <a href="/v1/add-researcher">
          {fn === "add-researcher" ? (
            <SelectedButton>연구자 정보 등록</SelectedButton>
          ) : (
            <Button>연구자 정보 등록</Button>
          )}
        </a>
        <a href="/v1/edit-researcher">
          {fn === "edit-researcher" ? (
            <SelectedButton>연구자 정보 수정</SelectedButton>
          ) : (
            <Button>연구자 정보 수정</Button>
          )}
        </a>
      </>
    )}
    {fn === "search-researcher" && (
      <>
        <a href="/v1/search-researcher?k=basic">
          {k === null || k === "basic" ? (
            <SelectedButton>기본 정보</SelectedButton>
          ) : (
            <Button>기본 정보</Button>
          )}
        </a>

        <a href="/v1/search-researcher?k=degree">
          {k === "degree" ? (
            <SelectedButton>학력 사항</SelectedButton>
          ) : (
            <Button>학력 사항</Button>
          )}
        </a>
        <a href="/v1/search-researcher?k=career">
          {k === "career" ? (
            <SelectedButton>경력 사항</SelectedButton>
          ) : (
            <Button>경력 사항</Button>
          )}
        </a>
        <a href="/v1/search-researcher?k=paper">
          {k === "paper" ? (
            <SelectedButton>논문 실적</SelectedButton>
          ) : (
            <Button>논문 실적</Button>
          )}
        </a>
        <a href="/v1/search-researcher?k=property">
          {k === "property" ? (
            <SelectedButton>지적 재산권 실적</SelectedButton>
          ) : (
            <Button>지적 재산권 실적</Button>
          )}
        </a>
      </>
    )}

    {(fn === "add-manager" || fn === "remove-manager") && (
      <>
        <a href="/v1/add-manager">
          {fn === "add-manager" ? (
            <SelectedButton>기관관리자 추가</SelectedButton>
          ) : (
            <Button>기관관리자 추가</Button>
          )}
        </a>

        <a href="/v1/remove-manager">
          {fn === "remove-manager" ? (
            <SelectedButton>기관관리자 제거</SelectedButton>
          ) : (
            <Button>기관관리자 제거</Button>
          )}
        </a>
      </>
    )}
  </Container>
);

export default Presenter;
