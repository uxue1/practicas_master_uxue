const gridGatetes = document.querySelector('.grid_gatetes');

//funcion para mandar el gato 3
function sendGateteThree(gateteObject){
    return fetch('jsonRecive.php',{
        method: 'POST',
        body: JSON.stringify(gateteObject)
    })
    .then(response => response.json())
    .then(data => {
        const jsonRecibido = JSON.parse(data)
        document.body.innerHTML += jsonRecibido.url
    })
}

//funcion para crear los gatos
function crearGatos(gatetesObj){

    console.log(gatetesObj)
    gatetesObj.forEach(gateteItem => {
        const gatete = document.createElement("img");
        gatete.src= gateteItem.url;
        gridGatetes.appendChild(gatete);
    });

    //llamo a la funcion para enviar el gato 3
    sendGateteThree(gatetesObj[2]);
}

//obtenemos los gatos de forma asincrona
fetch('https://api.thecatapi.com/v1/images/search?api_key=live_DmO1eTEibqQmtbwFwefWC9aIyoilUhX6xsw16rtQ64NURqtOXPK74xKmePxkSMko&limit=10')
.then (response => response.json() )
.then (data => crearGatos(data) )
