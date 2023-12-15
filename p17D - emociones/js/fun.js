//Capturo elementos
const emotionsBtn = document.querySelectorAll(".emotions__item button")
const message = document.querySelector(".message")

const btniluminacion = document.querySelector("#btniluminacion");
const btnpaz = document.querySelector("#btnpaz");
const btnalegria = document.querySelector("#btnalegria");
const btnamor = document.querySelector("#btnamor");
const btnrazonamiento = document.querySelector("#btnrazonamiento");
const btnaceptacion = document.querySelector("#btnaceptacion");
const btnvoluntad = document.querySelector("#btnvoluntad");
const btnneutralidad = document.querySelector("#btnneutralidad");
const btncoraje = document.querySelector("#btncoraje");
const btnorgullo = document.querySelector("#btnorgullo");
const btnira = document.querySelector("#btnira");
const btndeseo = document.querySelector("#btndeseo");
const btnmiedo = document.querySelector("#btnmiedo");
const btntristeza = document.querySelector("#btntristeza");
const btnapatia = document.querySelector("#btnapatia");
const btnculpa = document.querySelector("#btnculpa");
const btnverguenza = document.querySelector("#btnverguenza");


//Recorrer la lista con un buble y asignar a un color automaticamente
emotionsBtn.forEach((boton, index) =>{
    console.log(index);
    console.log(boton);
    const colorMutation = Math.floor(280 -(index*(280/emotionsBtn.length)))
    const color = "hsl("+colorMutation+", 100%, 50%)";
    boton.style.color= color;

    boton.addEventListener("click", cargarMensaje);
})

function cargarMensaje(){
    console.log("holi");
}

//Determinarle a cada boton un mensaje
btniluminacion.addEventListener("click", function() {
    message.innerHTML = "En mi barrio me llaman la Dalai Lama de Javascript"
});
btnpaz.addEventListener("click", function() {
    message.innerHTML = "He terminado el proyecto"
});
btnalegria.addEventListener("click", function() {
    message.innerHTML = "Ohhhh siii, es viernes!!!!!"
});
btnamor.addEventListener("click", function() {
    message.innerHTML = "Me quiero tanto que en San Valentín reservo cena para 2 y voy sol@"
});
btnrazonamiento.addEventListener("click", function() {
    message.innerHTML = "Math.floor(x+34-y/array.lenght)... JAJA! FUUTT FUUUU! (cerebro chamuscado)"
});
btnaceptacion.addEventListener("click", function() {
    message.innerHTML = "Hoy me ha vencido del código, mañana será otro día."
});
btnvoluntad.addEventListener("click", function() {
    message.innerHTML = "Si digo que acabo hoy el programa, lo acabo hoy."
});
btnneutralidad.addEventListener("click", function() {
    message.innerHTML = "Soy programador y los programadores no tienen emociones"
});
btncoraje.addEventListener("click", function() {
    message.innerHTML = "No me sale ni una práctica pero VAMOS VAMOS!!, que rule JS!!!"
});
btnorgullo.addEventListener("click", function() {
    message.innerHTML = "Mira que PEASO de web he hecho"
});
btnira.addEventListener("click", function() {
    message.innerHTML = "GRFTXFGRR!!! No me funciona!!!!"
});
btndeseo.addEventListener("click", function() {
    message.innerHTML = "Amo css with all my soul"
});
btnmiedo.addEventListener("click", function() {
    message.innerHTML = "Uuuuuuuuuuhhh!! Que viene Javascript!!"
});
btntristeza.addEventListener("click", function() {
    message.innerHTML = "No valgo para programar"
});
btnapatia.addEventListener("click", function() {
    message.innerHTML = "Paso de programar hoy, es más, paso de pasar de programar..."
});
btnculpa.addEventListener("click", function() {
    message.innerHTML = "Tenía que haber hecho el código más limpio pero me pudo la pereza :/"
});
btnverguenza.addEventListener("click", function() {
    message.innerHTML = "Me da verguenzilla preguntar dudas"
});
