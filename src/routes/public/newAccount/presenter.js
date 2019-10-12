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


const Presenter = ({ 
    scienceId,
    iconLoading,
    name,
    birth,
    gender,
    is_korean,
    ename,
    is_stay_in_korea,
    id,
    pw,
    pw2,
    email_id,
    email_domain,
    is_mailing,
    has_organization,
    zipcode,
    road_addr,
    addr,
    cp_no1,
    cp_no2,
    cp_no3,
    tel_no1,
    tel_no2,
    tel_no3,
    fax_no1,
    fax_no2,
    fax_no3,
    usertype,
    job,
    dept,
    position,
    organization,
    recommender,
    instit_job,
    searchPostCodeButtonTapped,
    handleInput,
    handleBirthday,
    handleSelect,
    handleUsertype,
    handleJob,
    doublecheckButtonTapped,
    validationCheck
}) => <Container>

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
                    <Input name={'name'} onChange={handleInput} value={name}></Input>
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
                        value={birth}
                        name={'birth'}
                        onChange={handleBirthday}
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
                    <Radio.Group name={'gender'} onChange={handleInput} value={gender}>
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
                    <Radio.Group name={'is_korean'} onChange={handleInput} value={is_korean}>
                        <Radio value={'내국인'}>내국인</Radio>
                        <Radio value={'외국인'}>외국인</Radio>
                    </Radio.Group>
                </Column>
            </Row>
            <Row>
            <Column style={{
                    marginRight: "30px",
                    marginTop:"20px"
                }}>
                    <MiddleText style={{
                        marginBottom: "16px"
                    }}>과학기술인등록번호</MiddleText>
                    <Input name={'scienceId'} onChange={handleInput} value={scienceId}></Input>
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
                    <Input name={'ename'} onChange={handleInput} value={ename} />
                </Column>
            </Row>
            <Divider style={{
                marginTop: "68px"
            }} />
            <Row style={{
                marginBottom: 20
            }}>
                <MiddleText>거주지구분</MiddleText>
            </Row>
            <Row>
                <Radio.Group name={'is_stay_in_korea'} onChange={handleInput} value={is_stay_in_korea}>
                    <Radio value={'국내'}>국내</Radio>
                    <Radio value={'국외'}>국외</Radio>
                </Radio.Group>
            </Row>
            <Divider style={{
                marginTop: "50px"
            }} />
            <Row>
                <Column style={{
                    marginRight: "30px"
                }}>
                    <MiddleText style={{
                        marginBottom: "16px"
                    }}>사용자 ID</MiddleText>
                    <Input name={'id'} onChange={handleInput} value={id} />
                </Column>
                <Button
                onClick={doublecheckButtonTapped}
                style={{
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
                    <Input.Password name={'pw'} onChange={handleInput} value={pw} />
                </Column>
                <Column >
                    <MiddleText style={{
                        marginBottom: "16px"
                    }}>비밀번호 확인</MiddleText>
                    <Input.Password name={'pw2'} onChange={handleInput} value={pw2} />
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
                        }} placeholder={'email id'}
                            value={email_id}
                            name={'email_id'}
                            onChange={handleInput}
                        />
                        <NormalText style={{
                            marginRight: "20px"
                        }}>@</NormalText>
                        <Select onChange={handleSelect} value={email_domain} style={{
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
                        <Radio.Group name={'is_mailing'} onChange={handleInput} value={is_mailing}>
                            <Radio value={true}>예</Radio>
                            <Radio value={false}>아니오</Radio>
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
                        <Radio.Group name={'has_organization'} onChange={handleInput} value={has_organization}>
                            <Radio value={'기관'}>기관</Radio>
                            <Radio value={'개인'}>개인</Radio>
                        </Radio.Group>
                    </Row>
                    {has_organization === "기관" && <Input name={'organization'} onChange={handleInput} value={organization} />}
                    
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
                <Button
                    onClick={searchPostCodeButtonTapped}
                    style={{
                        gridArea: 'c',
                        marginBottom: '20px',
                        width: '114px'
                    }}>우편번호검색</Button>
                <Input
                    value={zipcode}
                    style={{
                        gridArea: 'd',
                        width: '130px'
                    }} />
                <Input
                    value={road_addr}
                    style={{
                        gridArea: 'e'
                    }} />
                <Input
                    value={addr}
                    name={'addr'}
                    onChange={handleInput}
                    style={{
                        gridArea: 'f'
                    }} />
            </div>
            <Divider style={{
                marginTop: '50px'
            }} />

            <Row style={{
                marginBottom: 20
            }}>
                <SeaBrookText>연락할 수 있는 전화번호 2개중 하나는 (필수입력)으로 선택해야 합니다. </SeaBrookText>
            </Row>
            <div style={{
                display: 'grid',
                gridTemplateAreas: `
                'a b c'
                'd e f'
                `,
                gridTemplateColumns: '250px 250px 250px'
            }}>
                <div style={{
                    gridArea: 'a'
                }}>
                    <Row style={{
                        marginBottom: 20
                    }}>
                        <MiddleText>휴대전화 번호</MiddleText>
                        <SeaBrookText>(필수입력 선택)</SeaBrookText>
                    </Row>
                </div>
                <div style={{
                    gridArea: 'b'
                }}>
                    <Row>

                        <MiddleText>전화 번호</MiddleText>
                        <SeaBrookText>(필수입력 선택)</SeaBrookText>
                    </Row>
                </div>
                <div style={{
                    gridArea: 'c'
                }}>
                    <Row >

                        <MiddleText>팩스 번호</MiddleText>
                        <SeaBrookText>(선택입력)</SeaBrookText>
                    </Row>
                </div>
                <div style={{
                    gridArea: 'd'
                }}>
                    <Row>

                        <Input
                            value={cp_no1}
                            maxLength={3}
                            name={'cp_no1'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                        -
                        <Input
                            value={cp_no2}
                            maxLength={4}
                            name={'cp_no2'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                        -
                        <Input
                            value={cp_no3}
                            maxLength={4}
                            name={'cp_no3'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                    </Row>
                </div>
                <div style={{
                    gridArea: 'e'
                }}>
                    <Row>

                        <Input
                            value={tel_no1}
                            maxLength={3}
                            name={'tel_no1'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                        -
                        <Input
                            value={tel_no2}
                            maxLength={4}
                            name={'tel_no2'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                        -
                        <Input
                            value={tel_no3}
                            name={'tel_no3'}
                            onChange={handleInput}
                            maxLength={4}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                    </Row>
                </div>
                <div style={{
                    gridArea: 'f'
                }}>
                    <Row>
                        <Input
                            value={fax_no1}
                            maxLength={3}
                            name={'fax_no1'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                        -
                        <Input
                            value={fax_no2}
                            maxLength={4}
                            name={'fax_no2'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                        -
                        <Input
                            value={fax_no3}
                            maxLength={4}
                            name={'fax_no3'}
                            onChange={handleInput}
                            style={{
                                width: 60,
                                marginRight: 3,
                                marginLeft: 3
                            }} />
                    </Row>
                </div>
            </div>
            <Divider />
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
                <Select value={usertype} onChange={handleUsertype} style={{ width: 230, gridArea: 'i' }}>
                    <Option value={'전체'}>전체</Option>
                    <Option value={1}>연구자(대학,출연(연),연구소 등)</Option>
                    <Option value={7} >연구자(기업)</Option>
                    <Option value={2}>과제관리기관</Option>
                    <Option value={3}>부처</Option>
                    <Option value={6}>일반이용자</Option>
                </Select>
                <Select value={job} onChange={handleJob} style={{ width: 200, gridArea: 'j' }}>
                    <Option value={'선택'}>선택</Option>
                    <Option value={'공무원'}>공무원</Option>
                    <Option value={'연구원'}>연구원</Option>
                    <Option value={'교수'}>교수</Option>
                    <Option value={'학생'}>학생</Option>
                    <Option value={'사무직'}>사무직</Option>
                    <Option value={'제조업'}>제조업</Option>
                    <Option value={'IT관련종사자'}>IT관련종사자</Option>
                </Select>
                <Input
                    value={dept}
                    name={'dept'}
                    onChange={handleInput}
                    style={{
                        gridArea: 'k',
                        width: 200
                    }} />
                <Input
                    value={position}
                    name={'position'}
                    onChange={handleInput}
                    style={{
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
                    'a b'
                    'c d'
                `,
                gridTemplateColumns: '230px 230px'
            }}>
                <div style={{
                    gridArea: 'a',
                    marginBottom: 20
                }}>
                    <MiddleText>담당업무</MiddleText>
                </div>
                <div style={{
                    gridArea: 'b'
                }}>
                    <MiddleText>추천인ID</MiddleText>
                </div>
                <div style={{
                    gridArea: 'c'
                }}>
                    <Input name={'instit_job'} onChange={handleInput} value={instit_job} style={{
                        width: 200
                    }} />
                </div>
                <div style={{
                    gridArea: 'd'
                }}>
                    <Input name={'recommender'} onChange={handleInput} value={recommender} style={{
                        width: 200
                    }} />
                </div>
            </div>

            <Row style={{
                marginTop: 50,
                justifyContent: 'center'
            }}>
                <Button loading={iconLoading} onClick={validationCheck}>회원가입</Button>
            </Row>
        </Inner>
    </Container>

export default Presenter;