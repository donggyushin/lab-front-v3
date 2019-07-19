import React from "react";
import Presenter from "./presenter";
import axios from "axios";

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
    usertype: "전체",
    job: "선택",
    dept: "",
    position: "",
    organization: "",
    recommender: "",
    instit_job: "",
    idDoublechecked: false
  };
  render() {
    const {
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
      instit_job
    } = this.state;
    const {
      searchPostCodeButtonTapped,
      handleInput,
      handleBirthday,
      handleSelect,
      handleUsertype,
      handleJob,
      doublecheckButtonTapped,
      validationCheck
    } = this;
    return (
      <Presenter
        validationCheck={validationCheck}
        doublecheckButtonTapped={doublecheckButtonTapped}
        handleJob={handleJob}
        iconLoading={iconLoading}
        handleUsertype={handleUsertype}
        handleSelect={handleSelect}
        handleBirthday={handleBirthday}
        handleInput={handleInput}
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
    );
  }

  searchPostCodeButtonTapped = () => {
    daum.postcode.load(
      function() {
        new daum.Postcode({
          oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.

            this.setState({
              zipcode: data.zonecode,
              road_addr: data.address
            });
          }.bind(this)
        }).open();
      }.bind(this)
    );
  };

  iconLoadingStart = () => {
    this.setState({
      iconLoading: true
    });
  };

  handleJob = e => {
    this.setState({
      job: e
    });
  };

  handleUsertype = e => {
    this.setState({
      usertype: e
    });
  };

  handleBirthday = e => {
    this.setState({
      birth: e
    });
  };

  handleSelect = e => {
    this.setState({
      email_domain: e
    });
  };

  handleInput = e => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        this.setState({
          name: value
        });
        break;
      case "birth":
        this.setState({
          birth: value
        });
        break;
      case "gender":
        this.setState({
          gender: value
        });
        break;
      case "is_korean":
        this.setState({
          is_korean: value
        });
        break;
      case "ename":
        this.setState({
          ename: value
        });
        break;
      case "is_stay_in_korea":
        this.setState({
          is_stay_in_korea: value
        });
        break;
      case "id":
        this.setState({
          id: value,
          idDoublechecked: false
        });
        break;
      case "pw":
        this.setState({
          pw: value
        });
        break;
      case "pw2":
        this.setState({
          pw2: value
        });
        break;
      case "email_id":
        this.setState({
          email_id: value
        });
        break;
      case "email_domain":
        this.setState({
          email_domain: value
        });
        break;
      case "has_organization":
        this.setState({
          has_organization: value
        });
        break;
      case "organization":
        this.setState({
          organization: value
        });
        break;
      case "zipcode":
        this.setState({
          zipcode: value
        });
        break;
      case "road_addr":
        this.setState({
          road_addr: value
        });
        break;
      case "addr":
        this.setState({
          addr: value
        });
        break;
      case "cp_no1":
        this.setState({
          cp_no1: value
        });
        break;
      case "cp_no2":
        this.setState({
          cp_no2: value
        });
        break;
      case "cp_no3":
        this.setState({
          cp_no3: value
        });
        break;
      case "tel_no1":
        this.setState({
          tel_no1: value
        });
        break;
      case "tel_no2":
        this.setState({
          tel_no2: value
        });
        break;
      case "tel_no3":
        this.setState({
          tel_no3: value
        });
        break;
      case "fax_no1":
        this.setState({
          fax_no1: value
        });
        break;
      case "fax_no2":
        this.setState({
          fax_no2: value
        });
        break;
      case "fax_no3":
        this.setState({
          fax_no3: value
        });
        break;
      case "usertype":
        this.setState({
          usertype: value
        });
        break;
      case "job":
        this.setState({
          job: value
        });
        break;
      case "dept":
        this.setState({
          dept: value
        });
        break;
      case "position":
        this.setState({
          position: value
        });
        break;
      case "instit_job":
        this.setState({
          instit_job: value
        });
        break;
      case "recommender":
        this.setState({
          recommender: value
        });
        break;
      case "is_mailing":
        this.setState({
          is_mailing: value
        });
        break;
      default:
        break;
    }
  };

  validationCheck = () => {
    const {
      idDoublechecked,
      id,
      pw,
      pw2,
      name,
      email_id,
      zipcode,
      cp_no1,
      cp_no2,
      cp_no3,
      tel_no1,
      tel_no2,
      tel_no3,
      usertype,
      fax_no1,
      fax_no2,
      fax_no3
    } = this.state;
    const { iconLoadingStart } = this;
    iconLoadingStart();

    if (idDoublechecked == false) {
      alert("아이디 중복체크를 먼저 진행해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }
    if (!(pw === pw2)) {
      alert("비밀번호가 서로 일치하지 않습니다. 다시 한 번 확인해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    if (id === "" || id === " " || id === "  " || id === "   ") {
      alert("아이디를 입력해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    if (
      name === "" ||
      name === " " ||
      name === "  " ||
      name === "   " ||
      name === "    "
    ) {
      alert("이름을 입력해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    if (
      email_id === "" ||
      email_id === " " ||
      email_id === "  " ||
      email_id === "   " ||
      email_id === "    "
    ) {
      alert("이메일을 입력해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    if (zipcode === "") {
      alert("주소를 등록해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    let cp_check = false;
    let tel_check = false;

    if (cp_no1 == "" || cp_no2 == "" || cp_no3 == "") {
      cp_check = false;
    } else {
      cp_check = true;
    }

    if (tel_no1 == "" || tel_no2 == "" || tel_no3 == "") {
      tel_check = false;
    } else {
      tel_check = true;
    }

    if (cp_check == false && tel_check == false) {
      alert("전화번호와 휴대전화 둘 중에 하나는 입력해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    if (usertype == "전체") {
      alert("사용자 유형을 선택해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }

    // console.log("you can go to next step");
    this.tryNewAccout();
  };

  doublecheckButtonTapped = () => {
    const { id } = this.state;
    axios
      .post("/api/user/doublecheck", {
        id
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          alert("사용 가능한 아이디입니다. ");
          this.setState({
            idDoublechecked: true
          });
        } else {
          alert(data.error);
          this.setState({
            idDoublechecked: false
          });
        }
      })
      .catch(err => console.log(err));
  };

  tryNewAccout = () => {
    const {
      id,
      pw,
      birth,
      gender,
      is_korean,
      name,
      ename,
      is_stay_in_korea,
      email_id,
      email_domain,
      has_organization,
      organization,
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
      instit_job,
      is_mailing,
      recommender
    } = this.state;
    const birth_y = String(birth.getFullYear());
    const birth_m = String(birth.getMonth());
    const birth_d = String(birth.getDate());

    axios
      .post("/api/user/regist", {
        id,
        pw,
        birth_y,
        birth_m,
        birth_d,
        gender,
        is_korean,
        name,
        ename,
        is_stay_in_korea,
        email_id,
        email_domain,
        has_organization,
        organization,
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
        instit_job,
        is_mailing,
        recommender
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          alert("회원가입에 성공하였습니다. 로그인해주세요. ");
          window.location.href = "/";
          this.setState({
            iconLoading: false
          });
          return;
        } else {
          alert(data.error);
          this.setState({
            iconLoading: false
          });
          return;
        }
      })
      .catch(err => console.log(err));
  };
}

export default Container;
