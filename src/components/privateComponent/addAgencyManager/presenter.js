import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/colors";
import {
  MiddleWhiteText,
  BiggerThanNormal150,
  Row
} from "../../../constants/styledComponents";
import { Divider, Button } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 100px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Title = styled.div`
  width: 100%;
  background: ${Colors.deepKoamaru};
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Presenter = ({ loading, users, fn }) => (
  <Container>
    <Title>
      <MiddleWhiteText
        style={{
          width: 800
        }}
      >
        {fn === "add-manager" && "기관 관리자 추가"}
        {fn === "remove-manager" && "기관 관리자 삭제"}
      </MiddleWhiteText>
    </Title>
    <Card>
      <Row>
        <BiggerThanNormal150>아이디</BiggerThanNormal150>
        <BiggerThanNormal150>이름</BiggerThanNormal150>
        <BiggerThanNormal150>이름(영문)</BiggerThanNormal150>
        <BiggerThanNormal150>유저 등급</BiggerThanNormal150>
      </Row>
      <Divider />
      {loading === true && "loading..."}
      {loading === false && (
        <>
          {users.map(user => {
            return (
              <Row
                style={{
                  marginBottom: 20
                }}
                key={user.id}
              >
                <BiggerThanNormal150>{user.id}</BiggerThanNormal150>
                <BiggerThanNormal150>{user.name}</BiggerThanNormal150>
                <BiggerThanNormal150>{user.ename}</BiggerThanNormal150>
                <BiggerThanNormal150>{user.user_level}</BiggerThanNormal150>
                {fn === "add-manager" && <Button>기관 관리자 추가</Button>}
                {fn === "remove-manager" && <Button>기관 관리자 삭제</Button>}
              </Row>
            );
          })}
        </>
      )}
    </Card>
  </Container>
);

export default Presenter;
