//1 Capturar elementos//
const btnflechas = document.querySelector(".btnflechas");
const fotovoldemort = document.querySelector("#voldemort");

//2 Crear eventos de usuario//

btnflechas.addEventListener("click", cambiarfoto);

//3 Crear funcion que sucedera al ejecutar el evento//
let imageCounter = 1;
function cambiarfoto(){
    imageCounter= imageCounter+1;

    if(imageCounter==4){
        imageCounter=1
    }
        
    fotovoldemort.src="img_voldemort/" + imageCounter + ".jpg";
    console.log(imageCounter);
}