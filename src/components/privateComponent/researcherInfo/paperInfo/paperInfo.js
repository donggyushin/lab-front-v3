import React from "react";
import {
  BiggerThanNormal,
  Row,
  BiggerThanNormalWithBackground,
  NormalText
} from "../../../../constants/styledComponents";

function PaperInfoComponent({ paperInfo }) {
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
          논문실적
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
          논문제목(국문)
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.논문제목_국문}</NormalText>
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
          논문제목(영문)
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.논문제목_영문}</NormalText>
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
          저자명
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.저자명}</NormalText>
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
          참여구분
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.참여구분}</NormalText>
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
          게재일자
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.게재일자}</NormalText>
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
          학술지명
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.학술지명}</NormalText>
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
          볼륨
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.볼륨}</NormalText>
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
          ISSN 번호
        </BiggerThanNormalWithBackground>
        <NormalText>{paperInfo.ISSN번호}</NormalText>
      </Row>
    </>
  );
}

export default PaperInfoComponent;
