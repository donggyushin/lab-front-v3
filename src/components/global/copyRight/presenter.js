import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/colors";
import { WhiteText, Row } from "../../../constants/styledComponents";

const Container = styled.div`
  background: ${Colors.midnightBlue};
  min-height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-right: 36px;
  padding-bottom: 20px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const WhiteBigText = styled.div`
  color: white;
  font-weight: 600;
  margin-bottom: 15px;
`;

const GreyNormalText = styled.div`
  color: white;
  opacity: 0.7;
`;

const Presenter = ({ isLoggedIn, userLevel }) => (
  <Container>
    <Row
      style={{
        width: "100%",
        paddingLeft: 100,
        marginBottom: 50,
        alignItems: "flex-start",
        marginTop: 30
      }}
    >
      <Column>
        {isLoggedIn === true && userLevel === "normal" && (
          <a href="/v1/search-num">
            <WhiteBigText>과학기술인 등록번호 조회</WhiteBigText>
          </a>
        )}
        {isLoggedIn === true && userLevel === "agencyAdmin" && (
          <a href="/v1/search-num">
            <WhiteBigText>과학기술인 등록번호 조회</WhiteBigText>
          </a>
        )}
        {isLoggedIn === true && userLevel === "intergrated" && (
          <a href="/v1/add-manager">
            <WhiteBigText>기관 관리자 추가</WhiteBigText>
          </a>
        )}
      </Column>
      <Column>
        {/* {isLoggedIn === true && userLevel === "normal" && (
          <a href="/v1/add-researcher">
            <WhiteBigText>연구자 정보 등록</WhiteBigText>
          </a>
        )} */}
        {isLoggedIn === true && userLevel === "intergrated" && (
          <a href="/v1/remove-manager">
            <WhiteBigText>기관 관리자 삭제</WhiteBigText>
          </a>
        )}
        {isLoggedIn === true && userLevel === "agencyAdmin" && (
          <>
            <a href="/v1/search-researcher?k=basic">
              <WhiteBigText>연구자 정보 조회</WhiteBigText>
            </a>
            <a href="/v1/search-researcher?k=basic">
              <GreyNormalText>기본정보</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=degree">
              <GreyNormalText>학력사항</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=career">
              <GreyNormalText>경력사항</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=paper">
              <GreyNormalText>논문실적</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=property">
              <GreyNormalText>특허실적</GreyNormalText>
            </a>
          </>
        )}
      </Column>
      <Column>
        {isLoggedIn === true && userLevel === "normal" && (
          <>
            <a href="/v1/edit-researcher-basic">
              <WhiteBigText>연구자 정보 수정</WhiteBigText>
            </a>
            <a href="/v1/edit-researcher?k=basic">
              <GreyNormalText>기본정보</GreyNormalText>
            </a>
            <a href="/v1/edit-researcher?k=degree">
              <GreyNormalText>학력사항</GreyNormalText>
            </a>
            <a href="/v1/edit-researcher?k=career">
              <GreyNormalText>경력사항</GreyNormalText>
            </a>
            <a href="/v1/edit-researcher?k=paper">
              <GreyNormalText>논문실적</GreyNormalText>
            </a>
            <a href="/v1/edit-researcher?k=property">
              <GreyNormalText>특허실적</GreyNormalText>
            </a>
          </>
        )}
      </Column>
      <Column>
        {isLoggedIn === true && userLevel === "normal" && (
          <>
            <a href={"/v1/search-researcher?k=basic"}>
              <WhiteBigText>연구자 정보 조회</WhiteBigText>
            </a>
            <a href="/v1/search-researcher?k=basic">
              <GreyNormalText>기본정보</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=degree">
              <GreyNormalText>학력사항</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=career">
              <GreyNormalText>경력사항</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=paper">
              <GreyNormalText>논문실적</GreyNormalText>
            </a>
            <a href="/v1/search-researcher?k=property">
              <GreyNormalText>특허실적</GreyNormalText>
            </a>
          </>
        )}
      </Column>
    </Row>

    <Row
      style={{
        justifyContent: "center"
      }}
    >
      <div>
        <a href={"https://www.kisti.re.kr/"}>
          <img
            style={{
              marginRight: "25px"
            }}
            width={80}
            src={require("../../../assets/kisti logo2.png")}
          />
        </a>
      </div>
      <div>
        <WhiteText>Copyright PEL ALL rights reserved</WhiteText>
        <WhiteText>상명대학교 프로토콜 공학연구실(PEL)</WhiteText>
      </div>
    </Row>
  </Container>
);

export default Presenter;
