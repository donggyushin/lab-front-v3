import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.div`
  width: 114px;
`;

const Input = styled.input`
  width: 200px;
`;

const Button = styled.button`
  margin-top: 45px;
`;

class EditPaperDetail extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <Row>
            <Label>논문 제목(국문)</Label>
            <Input />
          </Row>
          <Row>
            <Label>논문 제목(영문)</Label>
            <Input />
          </Row>
          <Row>
            <Label>저자명</Label>
            <Input />
          </Row>
          <Row>
            <Label>참여구분</Label>
            <Input />
          </Row>
          <Row>
            <Label>게제일자</Label>
            <Input />
          </Row>
          <Row>
            <Label>학술지명</Label>
            <Input />
          </Row>
          <Row>
            <Label>볼륨</Label>
            <Input />
          </Row>
          <Row>
            <Label>ISSN 번호</Label>
            <Input />
          </Row>
          <Row>
            <Label>시작 페이지</Label>
            <Input />
          </Row>
          <Row>
            <Label>끝 페이지</Label>
            <Input />
          </Row>
        </Card>
        <Button>수정하기</Button>
      </Container>
    );
  }
}

export default EditPaperDetail;
