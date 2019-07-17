import React from 'react';
import styled from 'styled-components'
import { BigText, DeepKoamaruText, NormalText, MiddleText, Row, Column, SeaBrookText } from '../../../constants/styledComponents'
import { Divider, Input, Radio, Button, Select } from 'antd'
import { DateInput } from "@opuscapita/react-dates"

const { Option } = Select;

const Container = styled.div`margin-top:100px;
    min-height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Inner = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:900px;
    margin-top:55px;
`;


const Presenter = () => <Container>

    <Inner>
        <Row>
            <BigText style={{
                marginRight: "10px",
                position: "relative",
                bottom: "5px"
            }}>회원정보입력</BigText>
            <SeaBrookText>(선택입력)</SeaBrookText>
            <NormalText>을 제외한 모든 항목은 필수 입력입니다. </NormalText>
        </Row>
        <Divider />
        <Row>
            <Column style={{
                marginRight: "30px"
            }}>
                <MiddleText style={{
                    marginBottom: "16px"
                }}>이름</MiddleText>
                <Input></Input>
            </Column>
            <Column style={{
                marginRight: "30px"
            }}>
                <MiddleText style={{
                    marginBottom: "16px"
                }}>출생연도</MiddleText>
                <DateInput
                    dateFormat="dd/MM/yyyy"
                    disabled={false}
                    locale="en"
                />
            </Column>
            <Column style={{
                marginRight: "30px"
            }}>
                <MiddleText style={{
                    position: "relative",
                    bottom: "6px",
                    marginBottom: "10px"
                }}>성별</MiddleText>
                <Radio.Group>
                    <Radio value={'남자'}>남자</Radio>
                    <Radio value={'여자'}>여자</Radio>
                </Radio.Group>
            </Column>
            <Column>
                <MiddleText style={{
                    position: "relative",
                    bottom: "6px",
                    marginBottom: "10px"
                }}>내외국인구분</MiddleText>
                <Radio.Group>
                    <Radio value={'내국인'}>내국인</Radio>
                    <Radio value={'외국인'}>외국인</Radio>
                </Radio.Group>
            </Column>
        </Row>
        <Divider style={{
            marginTop: "85px"
        }} />
        <Row>
            <Column>
                <Row style={{
                    marginBottom: "16px"
                }}>
                    <MiddleText>영문이름</MiddleText> <SeaBrookText>(선택입력)</SeaBrookText>
                </Row>
                <Input />
            </Column>
        </Row>
        <Divider style={{
            marginTop: "68px"
        }} />
        <Row>
            <Column style={{
                marginRight: "30px"
            }}>
                <MiddleText style={{
                    marginBottom: "16px"
                }}>사용자 ID</MiddleText>
                <Input />
            </Column>
            <Button style={{
                position: "relative",
                top: "24px",
                marginRight: "30px"
            }}>중복확인</Button>
            <Column style={{
                marginRight: "30px"
            }}>
                <MiddleText style={{
                    marginBottom: "16px"
                }}>비밀번호</MiddleText>
                <Input.Password />
            </Column>
            <Column >
                <MiddleText style={{
                    marginBottom: "16px"
                }}>비밀번호 확인</MiddleText>
                <Input.Password />
            </Column>
        </Row>
        <Divider style={{
            marginTop: "60px"
        }} />
        <Row>
            <Column>
                <MiddleText style={{
                    marginBottom: "16px"
                }}>이메일</MiddleText>
                <Row>
                    <Input style={{
                        width: "185px",
                        marginRight: "20px"
                    }} placeholder={'email id'} />
                    <NormalText style={{
                        marginRight: "20px"
                    }}>@</NormalText>
                    <Select value={'google.com'} style={{
                        width: "300px"
                    }}>
                        <Option value="naver.com">naver.com</Option>
                        <Option value="google.com">google.com</Option>
                    </Select>
                </Row>

                <Row>
                    <SeaBrookText style={{
                        marginRight: "20px",

                    }}>입력하신 이메일로 이메일을 수신하겠습니까? </SeaBrookText>
                    <Radio.Group>
                        <Radio value={'1'}>예</Radio>
                        <Radio value={'2'}>아니오</Radio>
                    </Radio.Group>
                </Row>

            </Column>

        </Row>
        <Divider style={{
            marginTop: "50px"
        }} />
        <Row>
            <Column style={{
                marginRight: "30px"
            }}>
                <MiddleText>소속 기관</MiddleText>
            </Column>
            <Column>
                <Row style={{
                    marginBottom: "10px"
                }}>
                    <Radio.Group>
                        <Radio value={'기관'}>기관</Radio>
                        <Radio value={'개인'}>개인</Radio>
                    </Radio.Group>
                </Row>
                <Input />
                <NormalText>개인 등록자는 일부 NTIS 서비스에 대하여 사용권한이 제한될 수 있습니다.</NormalText>
            </Column>
        </Row>
        <Divider style={{
            marginTop: "50px"
        }} />
    </Inner>
</Container>

export default Presenter;