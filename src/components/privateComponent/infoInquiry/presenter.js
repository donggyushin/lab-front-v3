import React from "react";
import styled from "styled-components";
import {
  MiddleWhiteText,
  Row,
  BiggerThanNormal,
  Column
} from "../../../constants/styledComponents";
import Colors from "../../../constants/colors";
import SideNav from "../sideNav";
import { Divider } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const TitleBackground = styled.div`
  background: ${Colors.deepKoamaru};
  opacity: 0.9;
  width: 100%;
  height: 50px;
`;

const Card = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 150px;
`;

const Presenter = ({ k, fn }) => (
  <Container>
    <>
      <TitleContainer>
        <TitleBackground />
        <MiddleWhiteText
          style={{
            position: "absolute",
            width: "800px",
            top: "8px"
          }}
        >
          {(k === null || k === "basic") && "기본정보 조회"}
          {k === "degree" && "학력사항 조회"}
          {k === "career" && "경력사항 조회"}
          {k === "paper" && "논문실적 조회"}
          {k === "property" && "지적재산권 조회"}
        </MiddleWhiteText>
      </TitleContainer>
      <Row
        style={{
          width: "100%",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            position: "relative",
            right: 190
          }}
        >
          <SideNav fn={fn} k={k} />
        </div>

        <Card>
          <Row>
            <BiggerThanNormal>연구자 과학기술인등록번호 : </BiggerThanNormal>
            <BiggerThanNormal> 349085</BiggerThanNormal>
          </Row>
          <Divider />
          <Row>
            <BiggerThanNormal>
              {(k === null || k === "basic") && "연구자 이름(국문) : "}
              {k === "degree" && "학교명 : "}
              {k === "career" && "근무지명 : "}
              {k === "paper" && "논문 제목(국문) : "}
              {k === "property" && "특허명 : "}
            </BiggerThanNormal>
            <BiggerThanNormal> 홍길동</BiggerThanNormal>
          </Row>
          <Divider />
          <Row>
            <BiggerThanNormal>
              {(k === null || k === "basic") && "연구자 이름(영문) : "}
              {k === "degree" && "학과명 : "}
              {k === "career" && "직급명 : "}
              {k === "paper" && "논문 제목(영어) : "}
              {k === "property" && "특허구분 : "}
            </BiggerThanNormal>
            <BiggerThanNormal> Hong gil dong</BiggerThanNormal>
          </Row>
          <Divider />
          <Row>
            <BiggerThanNormal>
              {(k === null || k === "basic") && "생년월일 : "}
              {k === "degree" && "전공명 : "}
              {k === "career" && "근무시작일 : "}
              {k === "paper" && "저자명 : "}
              {k === "property" && "특허번호 : "}
            </BiggerThanNormal>
            <BiggerThanNormal> 2019년 5월 13일</BiggerThanNormal>
          </Row>

          {k !== null && k !== "basic" && <Divider />}
          <Row>
            <BiggerThanNormal>
              {k === "degree" && "지도교수명 : "}
              {k === "career" && "근무시작일 : "}
              {k === "paper" && "저자역할 : "}
              {k === "property" && "발명인 : "}
            </BiggerThanNormal>
            <BiggerThanNormal>
              {k === "degree" && "박현희"}
              {k === "career" && "오늘 "}
              {k === "paper" && "슈퍼맨 "}
              {k === "property" && "나 "}
            </BiggerThanNormal>
          </Row>
        </Card>
      </Row>
    </>
  </Container>
);

export default Presenter;
