//1.capturar elementos
const starBtn = document.querySelector(".no-me-fio__start");
const subItems = document.querySelectorAll(".no-me-fio__item");
const general = document.querySelector(".no-me-fio")

//2.generar el evento sobre la variable capturada
starBtn.addEventListener("click", moveItems);
general.addEventListener("click", changeItems);

//3.declaro funcion que va a suceder cuando haga click en el boton
function moveItems(){
    subItems.forEach(item =>{
        item.classList.toggle("play");
    })
}

function changeItems(){
    general.forEach
}