const personajes = {
    p0: {
        name: 'goku',
        force: '1'
    },
    p1: {
        name: 'vejeta',
        force: '2'
    }, 
    p2: {
        name: 'picollo',
        force: '3'
    } ,
};

const btnFigth = document.querySelector('.btn-fight');
const photoContainerLeft = document.querySelector('.game__fighter-left-in');
const photoContainerRight = document.querySelector('.game__fighter-right-in');

btnFigth.addEventListener('click', figth);


function figth() {
    //LEFT
        //generar numeros aleatorios entre el 0 y 2
    const keyLeft = Math.floor(Math.random() * 3);
        //crear url
    const urlPhotoLeft = 'img/'+ personajes['p'+keyLeft].name +'.webp';
    console.log(urlPhotoLeft);
        //crear una imagen
    const photoLeft = document.createElement('img');
        //asigno la url de la foto
    photoLeft.src = urlPhotoLeft;
        //vacio el div
    photoContainerLeft.innerHTML = "";
        //añado imagen al dom
    photoContainerLeft.appendChild(photoLeft);


    const forceLeft = personajes['p'+keyLeft].force;


    //RIGTH
        //generar numeros aleatorios entre el 0 y 2
    const keyRight = Math.floor(Math.random() * 3);
        //crear url
    const urlPhotoRight = 'img/'+ personajes['p'+keyRight].name +'.webp';
        //crear una imagen
    const photoRight = document.createElement('img');
        //asigno la url de la foto
    photoRight.src = urlPhotoRight;
        //vacio el div
    photoContainerRight.innerHTML = "";
        //añado imagen al dom
    photoContainerRight.appendChild(photoRight);


    const forceRight = personajes['p'+keyRight].force;

    //llamar a la funcion externa
    showWinner(forceLeft, forceRight);
    
}

/*
* funcion que muestra el ganador
*/
function showWinner(forceLeft, forceRight) { 
    //limpiar para que cuando se haga otra jugada no se quede el estilo de la anterior marcado. Concatenado el winner y el draw
    photoContainerLeft.parentNode.classList.remove('winner', 'draw');
    photoContainerRight.parentNode.classList.remove('winner', 'draw');


    if(forceLeft > forceRight) {
        //delay a 0 milisegundos
        setTimeout(() => {
            //ganadorL
            photoContainerLeft.parentNode.classList.add('winner');
        }, 0);
    }
    if(forceRight > forceLeft) {
        //delay a 0 milisegundos
        setTimeout(() => {
            //ganadorR
            photoContainerRight.parentNode.classList.add('winner');
        }, 0);

    } else {
        //delay a 0 milisegundos
        setTimeout(() => {
            //empate
            photoContainerLeft.parentNode.classList.add('draw');
            photoContainerRight.parentNode.classList.add('draw');
        }, 0);

    }
}