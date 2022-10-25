const userid = document.querySelector(`#userid`);
const pwd1 = document.querySelector(`#pwd1`);
const pwd2 = document.querySelector(`#pwd2`);
const level = document.querySelector(`#level`);
const fullname = document.querySelector(`#fullname`);
const email = document.querySelector(`#email`);
const tel = document.querySelector(`#tel`);
const submitButton = document.querySelector(`#submit_button`);

submitButton.addEventListener(`click`, function(){
    //공통적인 확인 : 공백인가 아닌가.(required 여부)

     
    // 아이디: 공백여부 / 중복여부
    // 비밀번호: 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 확인
    // 비밀번호확인: 공백여부 / 비밀번호와 같은지 안같은지
    // 이름: 공백여부
    // 메일주소: 공백여부 / 메일형식에 맞는지(abcd@test.com)
    // 연락처(필수값 X): 전화번호 형식이 일치하는지(000-1111-1234)

})
// 각각 확인하는 함수 만들기.
        // function idConfirm() {}
        // function pwd1Confirm() {}
        // function pwd2onfirm() {}
        // function fullnameConfirm() {}
        // function emailConfirm() {}
        // function telConfirm() {}

//방법 1
    const idConf = idConfirm()
    const pwd1Conf = pwd1Confirm()
    const pwd2Conf = pwd2Confirm()
    const fullnameConf = fullnameConfirm()
    const emailConf = emailConfirm()
    const telConf = telConfirm()

    if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
        document.signup.submit();
    }

//방법 2
    // let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()];
    
    // let chkFlag = true

    // for (const chk of chkArray) {
    //     if (!chk) { //함수 리턴값이 false 라면 이라는 뜻이 된다.
    //         chkFlag = false
    //     }
    // }


    // if (chkFlag) {
    //     document.signup.submit()
    // }

function idConfirm() {
    const mustId = document.querySelector(".must_id");
    const overlap = document.querySelector(".overlap");
    
    //텍스트가 남아있는 걸 방지하기 위해
    mustId.style.display = "none";
    overlap.style.display = "none";
    
    //공백일때
    //replace(/ |0/g,"") : 넓은 공백 또는 0 제거
    //userid.value.replace(/ |0/g,"")
    if (!userid.value.replace(/ /g,"")) {
        mustId.style.display = "block";
        return false;
    } else {
        //유효식이 맞지 않으면
        if (!idCheck(userid.value)) {
        overlap.style.display = "block";
        return false;
        }
    }
    return true;
}



function pwd1Confirm() {
    const mustPwd1 = document.querySelector(".must_pwd1");
    const regPwd = document.querySelector(".reg_pwd");
  
    mustPwd1.style.display = "none";
    regPwd.style.display = "none";
  
    if (!pwd1.value.replace(/ /g,"")) {
      mustPwd1.style.display = "block";
      return false;
    } else {
      if (!pwdCheck(pwd1.value)) {
        regPwd.style.display = "block";
        return false;
      }
    }
    return true;
  }



function pwd2Confirm() {
    const mustPwd2 = document.querySelector(".must_pwd2");
    const same = document.querySelector(".same");
  
    mustPwd2.style.display = "none";
    same.style.display = "none";
  
    if (!pwd2.value.replace(/ /g,"")) {
      mustPwd2.style.display = "block";
      return false;
    } else {
      //두개의 패스워드 값이 있을때
      if (pwd1.value && pwd2.value) {
        //패스워드가 같지 않다면
        if (pwd1.value !== pwd2.value) {
          same.style.display = "block";
          return false;
        }
      }
    }
    return true;
  }
  

function fullnameConfirm() {
    const must_Fullname = document.querySelector(".must_fullname")

    must_Fullname.style.display = "none"

    //공백이면 실행되게 만든 if
    if (!fullname.value.replace(/ /g,"")) {
        must_Fullname.style.display = "block"
        return false
    }
    //공백이 아니면 바로 true값을 주면 된다.
    return true
}


function emailConfirm() {
    const mustEmail = document.querySelector(".must_email")

    regEmail.style.display = "none"

    if (!email.value.replace(/ /g,"")) {
        mustEmail.style.display ="block"
        return false
    } else { //공백이 아니라면 이메일 형식이 맞는지 체크 할 것.
        if (!emailCheck(email.value)) {
            regEmail.style.display = "block";
            return false;
        } 
    
            return true   
    }
}

function telConfirm() {
    const regTel = document.querySelector(".reg_tel")
    regTel.style.display = "none"

    //전화번호가 있고 정규식 체크에 통과하지 못했을 때 (유효성 체크)
    if (!telCheck(tel.value.replace(/ /g,"")) && tel.value) {
        regTel.style.display = "block"
        return false
    }
    return true
}








//중복된 아이디 체크
function idCheck(id) {
    return true;
  }
  
  // https://tjddnjs625.tistory.com/28
  //정규식 테스트 사이트: https://regexr.com/
  

//비밀번호 정규식 체크
  function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
  }
  
  function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
  }
  
  function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  }