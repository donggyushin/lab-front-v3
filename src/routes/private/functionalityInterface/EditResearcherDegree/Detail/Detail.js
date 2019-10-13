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

const Input = styled.input``;

const Button = styled.button``;

function DetailComponent({
  전공명,
  지도교수명,
  학과명,
  학교명,
  학교입학일,
  학교졸업일,
  학위구분,
  학위논문명,
  handleInput,
  고유키,
  EditButtonClicked
}) {
  return (
    <Container>
      <Row>
        <Label>전공명</Label>
        <Input onChange={handleInput} name={"전공명"} value={전공명} />
      </Row>
      <Row>
        <Label>학위논문명</Label>
        <Input onChange={handleInput} name={"학위논문명"} value={학위논문명} />
      </Row>
      <Row>
        <Label>학위구분</Label>
        <Input onChange={handleInput} name={"학위구분"} value={학위구분} />
      </Row>
      <Row>
        <Label>학과명</Label>
        <Input onChange={handleInput} name={"학과명"} value={학과명} />
      </Row>
      <Row>
        <Label>학교명</Label>
        <Input onChange={handleInput} name={"학교명"} value={학교명} />
      </Row>
      <Row>
        <Label>학교입학일</Label>
        <Input onChange={handleInput} name={"학교입학일"} value={학교입학일} />
      </Row>
      <Row>
        <Label>학교졸업일</Label>
        <Input onChange={handleInput} name={"학교졸업일"} value={학교졸업일} />
      </Row>
      <Row>
        <Label>지도교수명</Label>
        <Input onChange={handleInput} name={"지도교수명"} value={지도교수명} />
      </Row>
      <Button onClick={EditButtonClicked}>등록</Button>
    </Container>
  );
}

export default DetailComponent;
