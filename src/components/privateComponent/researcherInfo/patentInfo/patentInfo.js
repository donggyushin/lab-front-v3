import React from "react";
import {
  BiggerThanNormal,
  Row,
  BiggerThanNormalWithBackground,
  NormalText
} from "../../../../constants/styledComponents";

function PatentInfoComponent({ patentInfo }) {
  return (
    <>
      <Row>
        <BiggerThanNormalWithBackground
          style={{
            width: "100%",
            borderTop: "1px solid gainsboro",
            borderRight: "1px solid gainsboro",
            borderLeft: "1px solid gainsboro"
          }}
        >
          특허실적
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
          특허명
        </BiggerThanNormalWithBackground>
        <NormalText>{patentInfo.특허명}</NormalText>
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
          등록구분
        </BiggerThanNormalWithBackground>
        <NormalText>{patentInfo.등록구분}</NormalText>
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
          특허번호
        </BiggerThanNormalWithBackground>
        <NormalText>{patentInfo.특허번호}</NormalText>
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
          발명인
        </BiggerThanNormalWithBackground>
        <NormalText>{patentInfo.발명인}</NormalText>
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
          발명일자
        </BiggerThanNormalWithBackground>
        <NormalText>{patentInfo.발명일자}</NormalText>
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
          등록국가
        </BiggerThanNormalWithBackground>
        <NormalText>{patentInfo.등록국가}</NormalText>
      </Row>
    </>
  );
}

export default PatentInfoComponent;
