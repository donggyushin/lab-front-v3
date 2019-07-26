import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/colors";
import {
  NavigationText,
  BiggerThanNormal
} from "../../../constants/styledComponents";
import styles from "./styles.module.css";
const Container = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 20px;
`;

const Text = styled.div`
  cursor: pointer;
  color: ${Colors.fontColor};
`;

const Presenter = ({ isLoggedIn, logout, userLevel }) => (
  <Container>
    <Row
      style={{
        width: "20%"
      }}
    >
      <a
        href="/"
        style={{
          color: Colors.fontColor
        }}
      >
        <img
          style={{
            width: 300,
            marginTop: 19
          }}
          src={require("../../../assets/kisti logo.png")}
        />
      </a>
    </Row>
    <Row
      style={{
        width: "60%",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
        top: "13px",
        height: "21px"
      }}
    >
      {userLevel == "normal" && (
        <>
          <a href="/v1/search-num">
            <NavigationText>과학기술인등록번호 조회</NavigationText>
          </a>
          <a href="/v1/add-researcher">
            <NavigationText
              style={{
                marginRight: 15,
                marginLeft: 15
              }}
            >
              연구자 정보 등록
            </NavigationText>
          </a>
          <a href="/v1/edit-researcher">
            <NavigationText
              style={{
                marginRight: 15,
                marginLeft: 15
              }}
            >
              {" "}
              연구자 정보 수정
            </NavigationText>
          </a>
          <a href="/v1/search">
            <NavigationText>조회</NavigationText>
          </a>
        </>
      )}
      {userLevel == "agencyAdmin" && (
        <>
          <a href="/v1/search-num">
            <NavigationText>과학기술인등록번호 조회</NavigationText>
          </a>

          <div
            className={styles.container}
            style={{
              zIndex: 3
            }}
          >
            <a href="/v1/search-researcher?k=basic">
              <NavigationText
                className={styles.text}
                style={{
                  marginRight: 15,
                  marginLeft: 15
                }}
              >
                연구자 정보 조회
              </NavigationText>
            </a>
            <div className={styles.menu}>
              <a href={"/v1/search-researcher?k=basic"}>
                <NavigationText className={styles.item}>
                  기본정보
                </NavigationText>
              </a>
              <a href="/v1/search-researcher?k=degree">
                <NavigationText className={styles.item}>
                  학력사항
                </NavigationText>
              </a>
              <a href="/v1/search-researcher?k=career">
                <NavigationText className={styles.item}>
                  경력사항
                </NavigationText>
              </a>
              <a href="/v1/search-researcher?k=paper">
                <NavigationText className={styles.item}>
                  논문실적
                </NavigationText>
              </a>
              <a href="/v1/search-researcher?k=property">
                <NavigationText className={styles.item}>
                  지적 재산권 실적
                </NavigationText>
              </a>
            </div>
          </div>
        </>
      )}
      {userLevel == "intergrated" && (
        <>
          <a href="/v1/add-manager">
            <NavigationText>기관관리자 추가</NavigationText>
          </a>
          <a href="/v1/remove-manager">
            <NavigationText
              style={{
                marginRight: 15,
                marginLeft: 15
              }}
            >
              기관관리자 삭제
            </NavigationText>
          </a>
        </>
      )}
    </Row>
    <Row
      style={{
        width: "20%",
        position: "relative",
        top: 10
      }}
    >
      {!isLoggedIn && (
        <>
          <a href="/">
            <Text
              style={{
                marginRight: "10px"
              }}
            >
              로그인
            </Text>
          </a>
          |
          <a href="/new-account">
            <Text
              style={{
                marginLeft: "10px"
              }}
            >
              회원가입
            </Text>
          </a>
        </>
      )}
      {isLoggedIn && (
        <>
          <Text onClick={logout}>로그아웃</Text>
        </>
      )}
    </Row>
  </Container>
);

export default Presenter;
