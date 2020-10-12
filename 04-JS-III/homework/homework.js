// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
 return array[0]
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return(array[array.length-1]);
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return(array.length);
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  let NewArray = []
    for(var i=0;i<array.length;i++) { 
     NewArray[i]= array[i] + 1 ;
   }
  return NewArray
}
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento)
  return array
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código: 
//ok!
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
//ok!
}

function dePalabrasAFrase(palabras) {
  let mem ='';
  for(var i=0;i<palabras.length-1;i++) {
  mem = mem + palabras[i]+' '};
  if (i=(palabras.length-1))
  { mem = mem + palabras[i];}
  else if(palabras.length===1)
  { mem = mem + palabras[i];}
  else {  mem = mem + palabras[i];}
return mem;
}

  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

function arrayContiene(array, elemento) {
    var elemento
     for(var i=0;i<array.length;i++) { 
      if(array[i]===elemento) {
        return true
      }
     } 
        return false
  
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  var array=0
  for(let i=0;i<numeros.length;i++) {
    array = array + numeros[i]
  }
  return array

  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  let soma=0
  let media
  for(let i=0;i<resultadosTest.length;i++) {
   soma = soma + resultadosTest[i]
  }
   media = soma / (resultadosTest.length)
  return media
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
var big =0
  for(let i=0;i<numeros.length;i++) {
    if (big < numeros[i]) {
      big=numeros[i]
    } else {
      big = big
      }
  }
  return big

  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  if (arguments.length<1) {
    return (0);
  }
  else {
  let arg = 1
    for(let i=0;i<arguments.length;i++) {
      arg = arg * arguments[i];
    }
    return arg
  }
}
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};

