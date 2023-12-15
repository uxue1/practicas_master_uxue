/*1-capturar lo necesario para la interaccion*/
const poster = document.querySelector(".wally__poster");
const wally = document.querySelector(".wally");
const image = document.querySelector(".image");
const levelBtnProfesional = document.querySelector(".level__btn-profesional");
const levelBtnAmateur = document.querySelector(".level__btn-amateur");

/*2-crear funcion que va a actuar cuando haga click*/
function mensajeError(){
    console.log("ahi no esta wally :(")
}

/*3-crear eventos*/
poster.addEventListener("click", mensajeError)
levelBtnProfesional.addEventListener("click", imgByn)
levelBtnAmateur.addEventListener("click", imgColor)

/*2-crear funciones*/
//Para que aparezcan las coordenadas
function mensajeAcierto(e){
    e.stopPropagation();
    const coordenadas = [e.pageX, e.pageY];

    coordenadas.push("Enhorabuena, Ahi está Wally!! :)");

    const mensajeFinal = coordenadas[2] + "tus coordenadas son: " + coordenadas[0] + "," + coordenadas[1];
    console.log(mensajeFinal);
}

//Para que en profesional la imagen este en byn y el boton cambie
function imgByn(){

    if (image.style.filter === 'grayscale(100%)') {
       image.style.filter = 'none';
       levelBtnAmateur.style.backgroundColor = 'white';
       levelBtnAmateur.style.borderColor = 'red';
       levelBtnProfesional.style.backgroundColor = 'red';
       levelBtnProfesional.style.borderColor = 'white';
    } else {
       image.style.filter = 'grayscale(100%)';
       levelBtnAmateur.style.backgroundColor = 'red';
       levelBtnAmateur.style.borderColor = 'white';
       levelBtnProfesional.style.backgroundColor = 'white';
       levelBtnProfesional.style.borderColor = 'red';
    }
}

//Para que en amateur la imagen este en color y el boton cambie
function imgColor(){

    if (image.style.filter = 'none') {
        levelBtnAmateur.style.backgroundColor = 'white';
       levelBtnAmateur.style.borderColor = 'red';
       levelBtnProfesional.style.backgroundColor = 'red';
       levelBtnProfesional.style.borderColor = 'white';
    }
}

/*3-crear evento*/
wally.addEventListener("click", mensajeAcierto);









