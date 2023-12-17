const audiotrack = new Audio('audio/bamboleo.mp3');
const controls = document.querySelector('.player__buttons');
const playButton = document.querySelector('.player__buttons--play');
const stopButton = document.querySelector('.player__buttons--stop');

console.log(controls);

/*funcion principal que gestiona el audio del sistema*/
function audioEngine(e) {
    if(e.target.dataset.value === "stop") stopEngine();
    if(e.target.dataset.value === "play") playEngine();
}

/*funcion que gestiona cuando se hace click en el boton play*/
function playEngine() {
    audiotrack.play();
    playButton.src = 'vectores/play-on.svg';
    stopButton.src = 'vectores/stop-off.svg';
}

/*funcion que gestiona cuando se hace click en el boton stop*/
function stopEngine() {
    audiotrack.pause();
    audiotrack.currentTime = 0;
    stopImageEngine()
}

function stopImageEngine() {
    stopButton.src = 'vectores/stop-on.svg';
    playButton.src = 'vectores/play-off.svg';
}

controls.addEventListener('click', audioEngine);