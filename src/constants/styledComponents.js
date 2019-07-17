import styled from 'styled-components'
import Colors from './colors';


export const BigText = styled.div`
    font-size:30px;
    font-weight:600;
`;

export const DeepKoamaruText = styled.div`
    color:${Colors.deepKoamaru};
`

export const NormalText = styled.div``;

export const MiddleText = styled.div`
    font-size:22px;
`;

export const Row = styled.div`
    display:flex;
    align-items:center;
`;

export const Column = styled.div`
    display:flex;
    flex-direction:column;
`;

export const SeaBrookText = styled.div`
    color:${Colors.seaBrook};
`;