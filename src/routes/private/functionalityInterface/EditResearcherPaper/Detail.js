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
  min-width: 300px;
`;

const Button = styled.button``;

function DetailComponent({
  ISSN번호,
  게재일자,
  논문제목_국문,
  논문제목_영문,
  저자명,
  참여구분,
  학술지명,
  handleInput,
  EditButtonClicked
}) {
  return (
    <Container>
      <Row>
        <Label>ISSN번호</Label>
        <Input value={ISSN번호} name={"ISSN번호"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>게재일자</Label>
        <Input value={게재일자} name={"게재일자"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>논문제목_국문</Label>
        <Input
          value={논문제목_국문}
          name={"논문제목_국문"}
          onChange={handleInput}
        />
      </Row>
      <Row>
        <Label>논문제목_영문</Label>
        <Input
          value={논문제목_영문}
          name={"논문제목_영문"}
          onChange={handleInput}
        />
      </Row>
      <Row>
        <Label>저자명</Label>
        <Input value={저자명} name={"저자명"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>참여구분</Label>
        <Input value={참여구분} name={"참여구분"} onChange={handleInput} />
      </Row>
      <Row>
        <Label>학술지명</Label>
        <Input value={학술지명} name={"학술지명"} onChange={handleInput} />
      </Row>
      <Button onClick={EditButtonClicked}>등록</Button>
    </Container>
  );
}

export default DetailComponent;
