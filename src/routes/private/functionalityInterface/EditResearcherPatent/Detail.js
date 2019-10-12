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
  등록구분,
  등록국가,
  발명인,
  발명일자,
  특허명,
  특허번호,
  handleInput
}) {
  return (
    <Container>
      <Row>
        <Label>등록구분</Label>
        <Input value={등록구분} name={"등록구분"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>등록국가</Label>
        <Input value={등록국가} name={"등록국가"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>발명인</Label>
        <Input value={발명인} name={"발명인"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>발명일자</Label>
        <Input value={발명일자} name={"발명일자"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>특허명</Label>
        <Input value={특허명} name={"특허명"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>특허번호</Label>
        <Input value={특허번호} name={"특허번호"} onChange={handleInput} />
      </Row>
      <Button>등록</Button>
    </Container>
  );
}

export default DetailComponent;
