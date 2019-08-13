import React from "react";
import styled from "styled-components";
import { Input, Radio, Button } from "antd";
import { BiggerThanNormal150 } from "../../../constants/styledComponents";
import Career from "./Career";
import Career2 from "./Career2";
import Paper from "./Paper";
import Property from "./Property";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
`;

const MarginRight = styled.div`
  width: 50px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid gainsboro;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 100px;
`;

class EditResearcher extends React.Component {
  render() {
    const { k } = this.props;
    return (
      <Container>
        <Title>
          {k === "basic" && "기본 정보"}
          {k === "property" && "특허 실적"}
          {k === "degree" && "학력 사항"}
          {k === "career" && "경력 사항"}
          {k === "paper" && "논문 실적"}
        </Title>
        {k === "property" && (
          <>
            <Property />
            {/* <Row>
              <BiggerThanNormal150>특허명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>등록 구분</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>특허 번호</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>발명인</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>발명 일자</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>등록 국가</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row> */}
          </>
        )}
        {k === "paper" && (
          <>
            <Paper />
            {/* <Row>
              <BiggerThanNormal150>논문 제목(국문)</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>논문 제목(영문)</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>저자명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>참여 구분</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>게재 일자</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>학술지명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>볼륨</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>ISSN 번호</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>시작 페이지</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>끝 페이지</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row> */}
          </>
        )}
        {k === "career" && (
          <>
            {/* <Career /> */}
            <Career2 />
            {/* <Row>
              <BiggerThanNormal150>근무기관명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>직급</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>근무 시작일</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>근무 종료일</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row> */}
          </>
        )}
        {k === "degree" && (
          <>
            <Row>
              <BiggerThanNormal150>학교명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>학과명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>전공명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>지도교수명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>학위논문명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>학교 입학일</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>학교 졸업일</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>학위 구분</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Button
              style={{
                marginTop: 50,
                width: 200
              }}
            >
              등록하기
            </Button>
          </>
        )}
        {k === "basic" && (
          <>
            <Row>
              <BiggerThanNormal150>과학기술인등록번호</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>연구자명(국문)</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>연구자명(영문)</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>생년월일</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150
                style={{
                  position: "relative",
                  right: "110px"
                }}
              >
                성별
              </BiggerThanNormal150>
              <MarginRight />
              <Radio.Group>
                <Radio value={1}>남자</Radio>
                <Radio value={2}>여자</Radio>
              </Radio.Group>
            </Row>
            <Row>
              <BiggerThanNormal150>이메일</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>휴대폰 번호</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>소속기관명</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>소속기관 주소</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>소속 부서</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>직급</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>중복가입확인코드</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>고유식별코드</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Row>
              <BiggerThanNormal150>가입일자</BiggerThanNormal150>
              <MarginRight />
              <Input
                style={{
                  width: 350
                }}
              />
            </Row>
            <Button
              style={{
                marginTop: 50,
                width: 200
              }}
            >
              등록하기
            </Button>
          </>
        )}
      </Container>
    );
  }
}

export default EditResearcher;
