import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toggle = styled.div`
  color: #34495e;
  font-size: 22px;
  position: relative;
  top: -12px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 18px;
  color: #34495e;
  margin-top: 10px;
`;

const InfoContainer = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
`;

const Label = styled.div`
  width: 180px;
  color: #34495e;
`;

const NormalText = styled.input`
  color: #34495e;
  padding-left: 5px;
  width: 220px;
`;

const Row = styled.div`
  display: flex;
`;

class Career extends React.Component {
  async componentDidMount() {
    const { careers, visible } = this.state;
    const arrayLength = careers.length;
    for (let index = 0; index < arrayLength; index++) {
      visible.push(false);
    }
    this.setState({
      loading: false
    });
  }

  state = {
    careers: [
      {
        name: "test1",
        position: "test1",
        startDate: "test1",
        endDate: "test1"
      },
      {
        name: "test2",
        position: "test2",
        startDate: "test2",
        endDate: "test2"
      }
    ],
    visible: [],
    loading: true
  };
  render() {
    const { careers, loading, visible } = this.state;
    const { toggleVisible } = this;
    return (
      <Container>
        {careers.map((career, index) => (
          <Card>
            {loading === false && (
              <>
                <TitleContainer>
                  <Title>{career.name}</Title>
                  <Toggle onClick={() => toggleVisible(index)}>
                    {visible[index] === false ? "+" : "-"}
                  </Toggle>
                </TitleContainer>
                <InfoContainer visible={visible[index]}>
                  <Row>
                    <Label>직급</Label>
                    <NormalText value={career.position} />
                  </Row>
                  <Row>
                    <Label>근무 시작일</Label>
                    <NormalText value={career.startDate} />
                  </Row>
                  <Row>
                    <Label>근무 종료일</Label>
                    <NormalText value={career.endDate} />
                  </Row>
                </InfoContainer>
              </>
            )}
          </Card>
        ))}
      </Container>
    );
  }

  toggleVisible = index => {
    const { visible } = this.state;
    visible[index] = !visible[index];
    this.setState({
      visible
    });
  };
}

export default Career;
