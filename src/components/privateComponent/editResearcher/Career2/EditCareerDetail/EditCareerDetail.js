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

class EditCareerDetail extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <Row>
            <Label>근무기관명</Label>
            <Input />
          </Row>
          <Row>
            <Label>직급</Label>
            <Input />
          </Row>
          <Row>
            <Label>근무시작일</Label>
            <Input />
          </Row>
          <Row>
            <Label>근무종료일</Label>
            <Input />
          </Row>
        </Card>
        <Button>수정하기</Button>
      </Container>
    );
  }
}

export default EditCareerDetail;
