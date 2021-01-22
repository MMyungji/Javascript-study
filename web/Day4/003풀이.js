const id = document.querySelector(".id");
const password = document.querySelector(".password");
const passwordCheck = document.querySelector(".password-check");
const passwordStatus = document.querySelector(".password-status");

const checkInput = document.querySelector(".check-input");

const signup = document.querySelector(".signup");

signup.addEventListener("click", function(){
    if(id.value && password.value && passwordCheck.value && checkInput.value){
        if(password.value === passwordCheck.value){
            alert("회원가입이 완료되었습니다.");
        } else {
            passwordStatus.textContent = "비밀번호가 서로 일치하지 않습니다.";
        }
    } else {
        if(!id.value){
            alert("아이디 입력해주세요.");
        } else if(!password.value || !passwordCheck.value){
            alert("비밀번호 입력해주세요.");
        } else if(!checkInput.checked){
            alert("개인정보 이용동의에 체크해주세요.")
        }
    }
});

passwordCheck.addEventListener("keyup", function(e) {
    if (e.target.value === password.value){
        passwordStatus.textContent = "비밀번호가 일치합니다.";
    }
    else {
        passwordStatus.textContent = "비밀번호가 일치하지 않습니다.";
    }
})