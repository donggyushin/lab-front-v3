import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/colors";
import { MiddleText } from "../../../constants/styledComponents";

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

const Presenter = ({ isLoggedIn, logout }) => (
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
        width: "60%"
      }}
    />
    <Row
      style={{
        width: "20%"
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
