//capturar constantes y variables
const cronoButtons =document.querySelector(".crono__buttons");
const cronoSeconds =document.querySelector(".crono__seconds");
const cronoCentiseconds = document.querySelector(".crono__miliseconds");

let counterSeconds = 0;
let counterCentisecods = 0;
let cronoInterval = "";
let isRunning = false; //para que cada vez que se le de a start


//funciones

function showHTML(seconds, centiseconds) {
    cronoSeconds.innerHTML = seconds;
    cronoCentiseconds.innerHTML = centiseconds;
}

/*
* This function start crono
* */
function startCrono() {
if(!isRunning){
    cronoInterval = setInterval(() => {
        counterCentisecods++;

        if( counterCentisecods === 100) {
            counterSeconds += 1;
            counterCentisecods = 0;
        }
        
        showHTML(counterSeconds,counterCentisecods);

    }, 10);
}

isRunning= true;
}

/*
* This function stop interval starte in startCrono
* */
function stoptCrono() {
    clearInterval(cronoInterval);
    isRunning= false;
}

/*
* This function stop crono
* */
function zeroCrono() {
    counterSeconds = 0
    counterCentisecods = 0
    showHTML(0,0)
    isRunning= false;
}

//llamadas a la funcion
cronoButtons.addEventListener("click", function(e){

    e.target.value == "start" && startCrono();
    e.target.value == "stop" && stoptCrono();
    e.target.value == "zero" && zeroCrono();

})