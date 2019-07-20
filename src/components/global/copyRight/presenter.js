import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/colors";
import { WhiteText, Row } from "../../../constants/styledComponents";

const Container = styled.div`
  background: ${Colors.midnightBlue};
  height: 150px;
  display: flex;
  justify-content: center;
  padding-right: 36px;
`;

const Presenter = () => (
  <Container>
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
