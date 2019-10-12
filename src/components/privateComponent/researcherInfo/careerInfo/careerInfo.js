import React from "react";
import {
  BiggerThanNormal,
  Row,
  BiggerThanNormalWithBackground,
  NormalText
} from "../../../../constants/styledComponents";

function CareerInfoComponent({ careerInfo }) {
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
          경력사항
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
          근무기관명
        </BiggerThanNormalWithBackground>
        <NormalText>{careerInfo.근무기관명}</NormalText>
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
          직급
        </BiggerThanNormalWithBackground>
        <NormalText>{careerInfo.직급}</NormalText>
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
          근무시작일
        </BiggerThanNormalWithBackground>
        <NormalText>{careerInfo.근무시작일}</NormalText>
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
          근무종료일
        </BiggerThanNormalWithBackground>
        <NormalText>{careerInfo.근무종료일}</NormalText>
      </Row>
    </>
  );
}

export default CareerInfoComponent;
