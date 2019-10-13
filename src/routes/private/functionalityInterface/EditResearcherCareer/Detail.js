import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 800px; */
`;

const Row = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  width: 100px;
`;

const Input = styled.input`
  width: 250px;
`;

const Button = styled.button``;

function DetailComponent({
  근무기관명,
  근무시작일,
  근무종료일,
  직급,
  handleInput,
  EditButtonClicked
}) {
  return (
    <Container>
      <Row>
        <Label>근무기관명</Label>
        <Input name={"근무기관명"} onChange={handleInput} value={근무기관명} />
      </Row>
      <Row>
        <Label>근무시작일</Label>
        <Input name={"근무시작일"} onChange={handleInput} value={근무시작일} />
      </Row>
      <Row>
        <Label>근무종료일</Label>
        <Input name={"근무종료일"} onChange={handleInput} value={근무종료일} />
      </Row>
      <Row>
        <Label>직급</Label>
        <Input name={"직급"} onChange={handleInput} value={직급} />
      </Row>

      <Button onClick={EditButtonClicked}>등록</Button>
    </Container>
  );
}

export default DetailComponent;
