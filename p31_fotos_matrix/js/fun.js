/*1-capturar elementos que necesitamos*/
/*2-defino array*/
/*3-addEvenListener Click*/
    //extraigo value o id de cada etiqueta option
    //cambio la url de la foto en base al array cuya posicion es el value
    
const photosUrls = {
    neo: "neo.jpg",
    trinity: "trinity.jpeg",
    morpheo: "morpheo.webp"
}

const selectorPhotos = document.querySelector(".matrix");
const photoSlot =document.querySelector(".photoSlot");

selectorPhotos.addEventListener("input", function() {
    console.log(selectorPhotos.value)
    photoSlot.style.backgroundImage = `url("img/${photosUrls[selectorPhotos.value]}")`;
});