import React from 'react';
import Presenter from './presenter';

/*global daum*/

class Container extends React.Component {
    state = {
        iconLoading: false,
        name: "",
        birth: new Date(),
        birth_y: "",
        birth_m: "",
        birth_d: "",
        gender: "남자",
        is_korean: "내국인",
        ename: "",
        is_stay_in_korea: "국내",
        id: "",
        pw: "",
        pw2: "",
        email_id: "",
        email_domain: "google.com",
        is_mailing: true,
        has_organization: "개인",
        zipcode: "",
        road_addr: "",
        addr: "",
        cp_no1: "",
        cp_no2: "",
        cp_no3: "",
        tel_no1: "",
        tel_no2: "",
        tel_no3: "",
        fax_no1: "",
        fax_no2: "",
        fax_no3: "",
        usertype: '전체',
        job: "선택",
        dept: "",
        position: "",
        organization: "",
        recommender: "",
        instit_job: ""
    }
    render() {
        const { iconLoading,
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
            instit_job
        } = this.state;
        const { iconLoadingStart, searchPostCodeButtonTapped } = this;
        return <Presenter iconLoadingStart={iconLoadingStart} iconLoading={iconLoading}
            name={name}
            birth={birth}
            gender={gender}
            is_korean={is_korean}
            ename={ename}
            is_stay_in_korea={is_stay_in_korea}
            id={id}
            pw={pw}
            pw2={pw2}
            email_id={email_id}
            email_domain={email_domain}
            is_mailing={is_mailing}
            has_organization={has_organization}
            zipcode={zipcode}
            road_addr={road_addr}
            addr={addr}
            cp_no1={cp_no1}
            cp_no2={cp_no2}
            cp_no3={cp_no3}
            tel_no1={tel_no1}
            tel_no2={tel_no2}
            tel_no3={tel_no3}
            fax_no1={fax_no1}
            fax_no2={fax_no2}
            fax_no3={fax_no3}
            usertype={usertype}
            job={job}
            dept={dept}
            position={position}
            organization={organization}
            recommender={recommender}
            instit_job={instit_job}
            searchPostCodeButtonTapped={searchPostCodeButtonTapped}
        />
    }

    searchPostCodeButtonTapped = () => {
        console.log('우편번호 검색버튼 클릭')
        daum.postcode.load(function () {
            new daum.Postcode({
                oncomplete: function (data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                    // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                    console.log(data)
                    this.setState({
                        zipcode: data.zonecode,
                        road_addr: data.address
                    })
                }.bind(this)
            }).open();
        }.bind(this));
    }

    iconLoadingStart = () => {
        this.setState({
            iconLoading: true
        })
    }
}

export default Container;