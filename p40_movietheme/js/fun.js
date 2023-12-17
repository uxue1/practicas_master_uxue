//capturar el container
const mainContainer = document.querySelector('.ranking');

//function looper - recorrer el json
function looper(jsonObj){
    jsonObj.forEach((item)=>{

        //crear contenedor principal
        const artistItem = document.createElement('div');
        artistItem.classList.add('ranking__artist-item');
        mainContainer.appendChild(artistItem);

        //crear contenedor izquierdo(foto)
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('ranking__photo-container');
        artistItem.appendChild(photoContainer);

        const photo = document.createElement('img');
        photo.classList.add('ranking__photo');
        photo.src= "img/silueta.png";
        photoContainer.appendChild(photo);

        //crear contenedor derecho(datos)
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('ranking__data-container');
        artistItem.appendChild(dataContainer);

        //lamo a itemCreator 4 veces(una por cada item-nombre, nombre alternativo, ranking, id-)
        itemCreator(dataContainer, 'h2', 'Nombre:', item.name);
        itemCreator(dataContainer, 'p', 'Nombre alternativo:', item.alternative_name);
        itemCreator(dataContainer, 'p', 'Rating:', item.rating);
        itemCreator(dataContainer, 'p', 'ID:', item.objectID);

        //llamar a la funcion de cambio de color
        colorRanking(artistItem, item.rating)
    });

    //crear funcion para cada item ya que son todos iguales (elemento: nombre) Se va cambiando automaticamnete
    function itemCreator(container, itemTag, itemLabel, itemValue){
        const newItem = document.createElement(itemTag);
        container.appendChild(newItem);
        const valueOfItem = itemValue ? itemValue : "no disponible";
        newItem.innerHTML = `<span class="ranking__data-item">${itemLabel}</span>${valueOfItem}`
    }

    //Crear funcion para los bordes de color(si el ranking es menos de tanto x color, si no y)
    function colorRanking(rankingItem, rating){
        if(rating > 3000){
            rankingItem.classList.add('ranking1')
        } else if (rating > 2000 && rating < 3000){
            rankingItem.classList.add('ranking2')
        } else if (rating > 1000 && rating < 2000){
            rankingItem.classList.add('ranking3')
        } else if (rating > 500 && rating < 1000){
            rankingItem.classList.add('ranking4')
        }
    }

}

//function initialize
function init(){
    fetch('movies.json')
    .then((response)=>{
        movies = response.json().then((data)=>{
            looper(data);
        })
    })
}

init();