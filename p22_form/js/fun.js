const ojo = document.querySelector(".eye img");
const password = document.querySelector(".password");


ojo.addEventListener('click', function(){
    if(password.type === "password"){
        password.type = "text";
        ojo.src = "vectores/eye close.svg";
    } else {
        password.type = "password";
        ojo.src = "vectores/eye open.svg";
    }
});