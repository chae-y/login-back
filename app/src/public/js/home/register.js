"use strict";

//DOM-> Document Object Model
const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    password = document.querySelector('#password'),
    confirmPassword = document.querySelector('#confirm-password'),
    registerBtn = document.querySelector('#button');

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value){
        return alert("아이디를 입력해 주세요");
    }
    if(password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req={
        id: id.value,
        name: name.value,
        password: password.value,
    };
    
    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }else{
            console.log(res.message);
            alert(res.message);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러발생"));
        console.error("회원가입 중 에러발생");
    });
}