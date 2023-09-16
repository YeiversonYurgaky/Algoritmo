//Esta función es para encontrar el número más alto, recibe una lista
function encontrarNumeroMasAlto(array) {
  // Almacenar los números repetidos, Set no permite duplicados
  const controlarRepetidos = new Set();

  // Recorremos la lista
  for (let i = 0; i < array.length; i++) {
    // Agregamos los números repetidos
    controlarRepetidos.add(array[i]);
  }

  // Devolvemos el número más alto de la lista
  return Math.max(...Array.from(controlarRepetidos));
}

//Inicializamos la lista
let numLista = [];
//Guardamos 5 números aletaroios, que se generan del 1 al 100
for (let i = 0; i < 5; i++) {
  let numAleatorio = Math.floor(Math.random() * 100) + 1;
  numLista.push(numAleatorio);
}
console.log(numLista);
console.log(encontrarNumeroMasAlto(numLista));
