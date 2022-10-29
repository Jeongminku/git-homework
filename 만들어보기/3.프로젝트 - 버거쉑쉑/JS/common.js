const btn_auth = document.querySelector('.btn_auth');
const panel = document.querySelector('.acc_cont');
const chknum = document.querySelector('.numSubmit');
const tel = document.querySelector(".tel")
const pwd1 = document.querySelector(`#pwd1`);
const pwd2 = document.querySelector(`#pwd2`);
const order = document.querySelector('.btn_order');

//이용약관 자세히보기 버튼 클릭
btn_auth.addEventListener('click', () => {
    if (panel.style.display == 'none') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
});



// 인증번호 - 4자리 랜덤 숫자 생성
chknum.addEventListener('click', () =>{
    const randomnum = function(n) {
        let num =''
        for (let i = 0; i < n; i++) {
            num += Math.floor(Math.random()*10)
        }
        return num
    }
    alert("인증번호는 " + randomnum(4) + " 입니다")
})

// 인증번호가 동일한지 확인
// function numConfirm() {
//     let n1 = document.querySelector('.cert_num');
//     let n2 = randomnum(4);
//     if( n1 != n2) {
//         alert("인증번호가 일치하지 않습니다");
//         return false;
//     } else{
//         alert("인증번호가 일치합니다");
//         return true
//     }
// }

function telConfirm() {
    //전화번호가 있고 정규식 체크에 통과하지 못했을 때 (유효성 체크)
    if (!telCheck(tel.value.replace(/ /g,"")) && tel.value) {
        alert("전화번호 형식이 맞지 않습니다.")
        return false
    }
    return true
}

  function telCheck(tel) {
    const reg = /^\d{2,3}\d{3,4}\d{4}$/;
    return reg.test(tel);
  }


// 비밀번호가 동일한지 확인
function pwdConfirm() {
    let p1 = document.querySelector('#pwd1').value;
    let p2 = document.querySelector('#pwd2').value;
    if( p1 != p2 ) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    } else{
      alert("비밀번호가 일치합니다");  //추후 지울것
      return true;
    }
}


//비회원 주문 클릭 시 주문화면으로 넘어갈지 정하기.
order.addEventListener('click', () =>{
    //pwdConfirm() /* 패스워드 동일한지 확인하는 함수 */
    // numConfirm() 인증번호 확인 넣고싶은데 작동을 안함. 원리를 모르겠음.
    telConfirm()
})

