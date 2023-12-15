setInterval (() -> {
    //Bucle IN
    document.querySelectorAll(".section div div").forEach(barra, index) -> ({
        //Definimos el tiempo de cambio a blanco con retraso acumulativo
        const time = (index+1)*100;
        //Creamos retardo en base al tiempo de cambio y añadimos class
        setTimeout(() => {
            barra.classList.add("white");
        }, timeout);
    });

    //Bcle OUT
    document.querySelectorAll(".section div div").forEach(barra, index) -> ({
        //Definimos el tiempo de cambio a color original con retraso acumulativo
        const time = (index+1)*200;
        //Creamos retardo en base al tiempo de cambio y retiramos class
        barra.classList.remove("white");
        }, timeout);
    });