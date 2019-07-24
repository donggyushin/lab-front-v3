import React from "react";
import styled from "styled-components";
import { NormalText, Row } from "../../../constants/styledComponents";
import { Input, Radio, Button } from "antd";
import { DateInput } from "@opuscapita/react-dates";
import SideNav from "../sideNav";

const Container = styled.div`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 400px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Presenter = ({ iconLoading, searchButtonTapped, fn, userLevel }) => (
  <Container>
    <Row>
      <div
        style={{
          position: "relative",
          right: 190
        }}
      >
        <SideNav userLevel={userLevel} fn={fn} />
      </div>
      <Inner>
        <Row>
          <NormalText
            style={{
              marginRight: 20
            }}
          >
            연구자 이름
          </NormalText>
          <Input
            style={{
              width: "150px"
            }}
          />
        </Row>
        <Row
          style={{
            marginTop: 20
          }}
        >
          <NormalText
            style={{
              marginRight: "61px"
            }}
          >
            성별
          </NormalText>
          <Radio.Group>
            <Radio value={"남"}>남</Radio>
            <Radio value={"여"}>여</Radio>
          </Radio.Group>
        </Row>
        <Row
          style={{
            marginTop: 20
          }}
        >
          <NormalText
            style={{
              marginRight: 36
            }}
          >
            생년월일
          </NormalText>
          <DateInput />
        </Row>
        <Row
          style={{
            marginTop: 20
          }}
        >
          <NormalText
            style={{
              marginRight: 20
            }}
          >
            휴대폰 번호
          </NormalText>
          <Input
            style={{
              width: 60
            }}
          />
          -
          <Input
            style={{
              width: 60
            }}
          />
          -
          <Input
            style={{
              width: 60
            }}
          />
        </Row>
      </Inner>
    </Row>

    <Button onClick={searchButtonTapped} loading={iconLoading}>
      조회하기
    </Button>
  </Container>
);

export default Presenter;
