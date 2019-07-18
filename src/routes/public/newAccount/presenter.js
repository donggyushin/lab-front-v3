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
    padding-bottom:100px;
`;


const Presenter = ({ iconLoadingStart,
    iconLoading }) => <Container>

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
            <div style={{
                display: 'grid',
                gridTemplateAreas: `
                'a a b b b'
                'c d e e e'
                'f f f f f'
            `,
                gridTemplateColumns: '150px 150px 150px 150px 150px'

            }}>
                <MiddleText style={{
                    gridArea: 'a',
                    marginBottom: '20px'
                }}>우편번호</MiddleText>
                <MiddleText style={{
                    gridArea: 'b'
                }}>주소</MiddleText>
                <Button style={{
                    gridArea: 'c',
                    marginBottom: '20px',
                    width: '114px'
                }}>우편번호검색</Button>
                <Input style={{
                    gridArea: 'd',
                    width: '130px'
                }} />
                <Input style={{
                    gridArea: 'e'
                }} />
                <Input style={{
                    gridArea: 'f'
                }} />
            </div>
            <Divider style={{
                marginTop: '50px'
            }} />
            <div style={{
                display: 'grid',
                gridTemplateAreas: `
                'a a a a a a'
                'b c d e f g'
                'h h i i j j'
            `
            }}>
                <SeaBrookText style={{
                    gridArea: 'a',
                    marginBottom: '20px'
                }}>연락할 수 있는 전화번호 2개중 하나는 (필수입력)으로 선택해야 합니다. </SeaBrookText>
                <MiddleText style={{
                    gridArea: 'b',
                    marginBottom: '20px',

                }}>휴대전화 번호</MiddleText><SeaBrookText style={{
                    gridArea: 'c',
                    marginTop: '4px',
                    position: 'relative',
                    right: '43px',

                }}>(필수입력 선택)</SeaBrookText>
                <MiddleText style={{
                    gridArea: 'd'
                }}>전화 번호</MiddleText><SeaBrookText style={{
                    gridArea: 'e',
                    marginTop: '4px',
                    position: 'relative',
                    right: '60px'
                }}>(필수입력 선택)</SeaBrookText>
                <MiddleText style={{
                    gridArea: 'f'
                }}>팩스</MiddleText><SeaBrookText style={{
                    gridArea: 'g',
                    marginTop: '4px',
                    position: 'relative',
                    right: '94px'
                }}>(선택 입력)</SeaBrookText>
                <Input style={{
                    gridArea: 'h',
                    width: '220px'
                }} />
                <Input style={{
                    gridArea: 'i',
                    width: '220px'
                }} />
                <Input style={{
                    gridArea: 'j',
                    width: '220px'
                }} />
            </div>
            <Divider style={{
                marginTop: 50
            }} />
            <div style={{
                display: 'grid',
                gridTemplateAreas: `
            'a b c d e f g h'
            'i i j j k k l l'
            `
            }}>
                <MiddleText style={{
                    gridArea: 'a',
                    marginBottom: '20px'
                }}>사용자 유형</MiddleText>
                <SeaBrookText style={{
                    gridArea: 'b',
                    position: 'relative',
                    top: '4px',
                    right: '30px',
                }}>(필수입력)</SeaBrookText>
                <MiddleText style={{
                    gridArea: 'c'
                }}>직업</MiddleText>
                <MiddleText style={{
                    gridArea: 'e'
                }}>부서명</MiddleText>
                <MiddleText style={{
                    gridArea: 'g'
                }}>직위</MiddleText>
                <Select style={{ width: 230, gridArea: 'i' }}>
                    <Option value={'전체'}>전체</Option>
                    <Option value={'연구자(대학,출연(연),연구소 등)'}>연구자(대학,출연(연),연구소 등)</Option>
                    <Option value={'연구자(기업)'} >연구자(기업)</Option>
                    <Option value={'과제관리기관'}>과제관리기관</Option>
                    <Option value={'부처'}>부처</Option>
                    <Option value={'일반이용자'}>일반이용자</Option>
                </Select>
                <Select style={{ width: 200, gridArea: 'j' }}>
                    <Option value={'선택'}>선택</Option>
                    <Option value={'공무원'}>공무원</Option>
                    <Option value={'연구원'}>연구원</Option>
                    <Option value={'교수'}>교수</Option>
                    <Option value={'학생'}>학생</Option>
                    <Option value={'사무직'}>사무직</Option>
                    <Option value={'제조업'}>제조업</Option>
                    <Option value={'IT관련종사자'}>IT관련종사자</Option>
                </Select>
                <Input style={{
                    gridArea: 'k',
                    width: 200
                }} />
                <Input style={{
                    gridArea: 'l',
                    width: 200
                }} />
            </div>
            <Divider style={{
                marginTop: 50
            }} />
            <div style={{
                display: 'grid',
                gridTemplateAreas: `
                'a b c d'
                'e e f f'
            `,
                gridTemplateColumns: '150px 150px 150px 150px'
            }}>
                <MiddleText style={{
                    gridArea: 'a',
                    marginBottom: '20px'
                }}>담당업무</MiddleText>
                <MiddleText style={{
                    gridArea: 'c'
                }}>추천인ID</MiddleText>
                <Input style={{
                    gridArea: 'e',
                    width: 200
                }} />
                <Input style={{
                    gridArea: 'f',
                    width: 200
                }} />
            </div>
            <Row style={{
                marginTop: 50,
                justifyContent: 'center'
            }}>
                <Button loading={iconLoading} onClick={iconLoadingStart}>회원가입</Button>
            </Row>
        </Inner>
    </Container>

export default Presenter;