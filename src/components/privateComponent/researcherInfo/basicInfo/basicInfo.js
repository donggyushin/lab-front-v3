import React from "react";
import {
  BiggerThanNormal,
  Row,
  BiggerThanNormalWithBackground,
  NormalText
} from "../../../../constants/styledComponents";

function BasicInfoComponent({ basicInfo }) {
  return (
    <>
      {" "}
      <Row>
        <BiggerThanNormalWithBackground
          style={{
            width: "100%",
            marginTop: 40,

            borderTop: "1px solid gainsboro",
            borderRight: "1px solid gainsboro",
            borderLeft: "1px solid gainsboro"
          }}
        >
          기본 사항
        </BiggerThanNormalWithBackground>
      </Row>
      <Row
        style={{
          borderTop: "1px solid gainsboro",
          borderRight: "1px solid gainsboro",
          borderLeft: "1px solid gainsboro"
        }}
      >
        <BiggerThanNormalWithBackground
          style={{
            borderRight: "1px solid gainsboro",
            marginRight: 20
          }}
        >
          성명(한글)
        </BiggerThanNormalWithBackground>

        <NormalText>
          {basicInfo.연구자명_국문 ? basicInfo.연구자명_국문 : "..."}
        </NormalText>
      </Row>
      <Row
        style={{
          borderTop: "1px solid gainsboro",
          borderRight: "1px solid gainsboro",
          borderLeft: "1px solid gainsboro"
        }}
      >
        <BiggerThanNormalWithBackground
          style={{
            borderRight: "1px solid gainsboro",
            marginRight: 20
          }}
        >
          성명(영문)
        </BiggerThanNormalWithBackground>
        <NormalText>
          {basicInfo.연구자명_영문 ? basicInfo.연구자명_영문 : "..."}
        </NormalText>
      </Row>
      <Row
        style={{
          borderTop: "1px solid gainsboro",
          borderRight: "1px solid gainsboro",
          borderLeft: "1px solid gainsboro"
        }}
      >
        <BiggerThanNormalWithBackground
          style={{
            borderRight: "1px solid gainsboro",
            marginRight: 20
          }}
        >
          휴대폰
        </BiggerThanNormalWithBackground>
        <NormalText>
          {basicInfo.휴대폰번호 ? basicInfo.휴대폰번호 : "..."}
        </NormalText>
      </Row>
      <Row
        style={{
          borderTop: "1px solid gainsboro",
          borderRight: "1px solid gainsboro",
          borderLeft: "1px solid gainsboro"
        }}
      >
        <BiggerThanNormalWithBackground
          style={{
            borderRight: "1px solid gainsboro",
            marginRight: 20
          }}
        >
          이메일
        </BiggerThanNormalWithBackground>
        <NormalText>{basicInfo.이메일 ? basicInfo.이메일 : "..."}</NormalText>
      </Row>{" "}
    </>
  );
}

export default BasicInfoComponent;
