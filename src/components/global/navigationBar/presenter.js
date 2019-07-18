import React from 'react';
import styled from 'styled-components';
import Colors from '../../../constants/colors';

const Container = styled.div`
width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
`;

const Row = styled.div`
    display:flex;
    height:100%;
    align-items:center;
    padding-left:20px;
`;

const Text = styled.div`
    cursor: pointer;
    color:${Colors.fontColor};
`;

const Presenter = ({ isLoggedIn }) => <Container>
    <Row style={{
        width: "20%",
        fontWeight: "900",
        fontSize: "19px"
    }}>
        <a href="/" style={{
            color: Colors.fontColor
        }}>
            R & D 정보 공유 시스템
        </a>

    </Row>
    <Row style={{
        width: "60%"
    }}></Row>
    <Row style={{
        width: "20%"
    }}>{!isLoggedIn && <>
        <a href="/">
            <Text style={{
                marginRight: "10px"
            }}>로그인</Text>
        </a>

        |
        <a href="/new-account">
            <Text style={{
                marginLeft: "10px"
            }}>회원가입</Text>
        </a>
    </>}</Row>
</Container>

export default Presenter;