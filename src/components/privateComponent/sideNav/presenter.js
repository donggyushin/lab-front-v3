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

const Presenter = ({ k }) => (
  <Container>
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
  </Container>
);

export default Presenter;
