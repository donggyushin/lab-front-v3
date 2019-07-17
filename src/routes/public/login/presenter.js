import React from 'react';
import styled from 'styled-components';
import Colors from '../../../constants/colors';
import { Input, Button } from "antd"
const Container = styled.div`
    width:100%;
    min-height:700px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 400px;
    height: 400px;
    padding: 20px;
    border: 1px solid gainsboro;
    border-radius: 5px;
`;

const Title = styled.div`
    background-color:${Colors.deepKoamaru};
    color:white;
    border-radius:50%;
    padding:20px;
    font-weight:900;
`;

const Presenter = ({ enterIconLoading, iconLoading }) => <Container >
    <Card>
        <Title>KISTI</Title>
        <Input style={{
            marginTop: "80px",
            marginBottom: "20px"
        }}
            placeholder={'아이디를 입력해주세요. '}
        />
        <Input.Password style={{
            marginBottom: "20px"
        }} placeholder={'비밀번호를 입력해주세요. '} />
        <Button
            type="primary"
            icon="poweroff"
            loading={iconLoading}
            onClick={enterIconLoading}
        >
            로그인
        </Button>
    </Card>
</Container>

export default Presenter;