import styled from "styled-components";
import Colors from "./colors";

export const BigText = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const DeepKoamaruText = styled.div`
  color: ${Colors.deepKoamaru};
`;

export const NormalText = styled.div`
  color: ${Colors.midnightBlue};
`;

export const MiddleText = styled.div`
  font-size: 22px;
  color: ${Colors.midnightBlue};
`;

export const MiddleWhiteText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SeaBrookText = styled.div`
  color: ${Colors.seaBrook};
`;

export const WhiteText = styled.div`
  color: white;
`;

export const BiggerThanNormal = styled.div`
  font-size: 18px;
  color: ${Colors.midnightBlue};
`;

export const NavigationText = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${Colors.midnightBlue};
  &:hover {
    color: ${Colors.lightBlue};
  }
`;

export const BiggerThanNormal150 = styled.div`
  font-size: 18px;
  color: ${Colors.midnightBlue};
  width: 150px;
`;

export const BiggerThanNormalWithBackground = styled.div`
  font-size: 18px;
  color: ${Colors.midnightBlue};
  background-color: ${Colors.citiLights};
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 600;
  width: 150px;
`;
