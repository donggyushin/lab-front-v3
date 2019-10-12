import React from "react";
import {
  BiggerThanNormal,
  Row,
  BiggerThanNormalWithBackground,
  NormalText
} from "../../../../constants/styledComponents";

function DegreeInfoComponent({ degreeInfo }) {
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
          학력사항
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
          학교명
        </BiggerThanNormalWithBackground>
        <NormalText>{degreeInfo.학교명}</NormalText>
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
          학과명
        </BiggerThanNormalWithBackground>
        <NormalText>{degreeInfo.학과명}</NormalText>
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
          전공명
        </BiggerThanNormalWithBackground>
        <NormalText>{degreeInfo.전공명}</NormalText>
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
          지도교수명
        </BiggerThanNormalWithBackground>
        <NormalText>{degreeInfo.지도교수명}</NormalText>
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
          학위구분
        </BiggerThanNormalWithBackground>
        <NormalText>{degreeInfo.학위구분}</NormalText>
      </Row>
    </>
  );
}

export default DegreeInfoComponent;
