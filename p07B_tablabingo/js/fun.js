//capturar los elementos
const table = document.querySelector(".myTable");
const celdas = document.querySelectorAll(".celdas");
const button = document.querySelector(".button");

//poner la funcion del boton
button.addEventListener("click", cambiarNumeros);

//crear funcion para poner colores aleatorios a ala tabla cuando cargue la pagina
function colorearTabla() {

  for (var i = 0; i < celdas.length; i++) {
      var aleatorio = Math.floor(Math.random() * 16777215);
      var color = '#' + aleatorio.toString(16);
      celdas[i].style.backgroundColor = color;
  }
}

colorearTabla();

// Función para cambiar aleatoriamente los números de la tabla al hacer click
function cambiarNumeros() {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = Math.floor(Math.random() * 100);
      table.rows[i].cells[j].style.backgroundColor = getRandomColor();
    }
  }
}

// Función para cambiar aleatoriamente los colores de la tabla al hacer click
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
