"use strict"
let btnMode =document.querySelector(".btnMode");
let menu=document.querySelector(".menu")
let burgericone=document.querySelector(".fa-bars")
let body=document.querySelector("body");

    let pseudo = document.querySelector("#pseudo");
    console.log(pseudo);
let bt1=document.querySelector('#bt');
function check(e){
    e.preventDefault();
    let pseudoValue=pseudo.value;
    console.log(pseudoValue);
}


bt.addEventListener('click',check);

let passwordInput = document.getElementById('password');
function validatePassword(){

    let passwordError = document.getElementById('mdpError')

    let regexMotDePasse = /^(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?!.\s).{8,}$/;
    if (regexMotDePasse.test(passwordInput.value) && passwordInput.value.length >= 8){
        passwordError.textContent = '';
    
    }else{
        passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
    }   

}
passwordInput.addEventListener('input',validatePassword);

btnMode.addEventListener('click',changeMode)

function changeMode (){
    body.classList.toggle("dark")

}

function burger (){
    menu.classList.toggle("visible")

}

burgericone.addEventListener('click',burger)

