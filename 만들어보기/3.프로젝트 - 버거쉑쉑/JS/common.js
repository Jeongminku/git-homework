const btn_auth = document.querySelector('.btn_auth'); // 이용약관 상세보기 버튼
const panel = document.querySelector('.acc_cont'); // 이용약관 상세 내용
const chknum = document.querySelector('.numSubmit'); // 인증번호 발송 버튼
const tel = document.querySelector(".tel"); //휴대폰번호 tel
const pwd1 = document.querySelector(`#pwd1`); // 비밀번호 
const pwd2 = document.querySelector(`#pwd2`); // 비밀번호 확인
const order = document.querySelector('.btn_order'); //비회원 주문 버튼


//비회원 주문 버튼 클릭 이벤트 
order.addEventListener('click', function () {
    const telConf = telConfirm();
    const pwdConf = pwdConfirm();
    const numConf = numConfirm();
    const chkConf = is_checked();
    if (chkConf && telConf && numConf && pwdConf) {
        alert("주문페이지로 이동합니다.")
      }
});



// 이용약관 동의했는지 확인하는 함수.
function is_checked () {  
    const checkbox = document.querySelector('#check01');
    const is_checked = checkbox.checked;
    if (!is_checked) {
        alert("약관에 동의하셔야 주문할 수 있습니다.")
    } else {

    }
    return true
}


// 이용약관 상세보기 (none / block)
const opener = function(){
    if (panel.style.display == 'none' || panel.style.display == '') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

// 인증번호용 4자리 랜덤숫자 함수
const randomnum = function(n) {
    let num =''
    for (let i = 0; i < n; i++) {
        num += Math.floor(Math.random()*10)
    }
    return num
}

// 랜덤숫자함수 이름
const cert_num = randomnum(4) 

// 인증번호 발송 버튼 클릭시
chknum.addEventListener('click', () =>{
        alert("인증번호는 " + cert_num + " 입니다")
})



// 발급한 인증번호와 입력이 동일한지 확인
function numConfirm() {
    let n1 = document.querySelector('.cert_num').value;
    let n2 = cert_num
    if( n1 != n2) {
        alert("인증번호가 일치하지 않습니다");
        return false;
    } else{

        return true
    }
}

// 휴대폰번호 확인 함수
function telConfirm() {
    //전화번호가 있고 정규식 체크에 통과하지 못했을 때 (유효성 체크)
    if(!tel.value.replace(/ /g,"")) { //공백일때 경고창
        alert("휴대폰 번호를 반드시 입력해주세요")
    } else {
        if (!telCheck(tel.value.replace(/ /g,""))) {
            alert("휴대폰 번호 형식이 맞지 않습니다.")
            return false
            
        } else {
            return true
        }
    }
    
}

// 휴대폰번호 정규식
  function telCheck(tel) {
    var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    return reg.test(tel);
  }


// 비밀번호가 동일한지 확인
function pwdConfirm() {
    let p1 = document.querySelector('#pwd1').value;
    let p2 = document.querySelector('#pwd2').value;
    
     if(!pwd1.value.replace(/ /g,"") || p1.length <= 3) { //비밀번호가 공백 or 3자리 이하일때
      alert("비밀번호 4~6자리를 반드시 입력해주세요")
    } else{ if( p1 != p2 ) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    } else{
      return true;
    }}
}


