function calcularAreaCuadrado(lado) {
  const area = lado * lado;
  return area;
}

const ladoCuadrado = 15;
const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
//console.log("Área cuadrado:", areaCuadrado);


function calcularAreaRectangulo(base, altura) {
  const area = base * altura;
  return area;
}


const baseRectangulo = 18;
const alturaRectangulo = 25;

const areaRectangulo = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);

//console.log("Área del rectángulo:", areaRectangulo);



let libro = "El cerebro femenino"; // esto es de tipo string 
let numero = 7;  // Esto es un number 
let boolean = true; // esto es un boolean  



let jugadora = {
  nombre: "Estefania",
  apellido: "Otagri",
  edad: 17,
  sexo: "Femenino",
  peso: 43,
}

//console.log(jugadora.nombre);

//console.log("Hola mundo")


function sumar (a) {
  return a + a 
}

console.log(sumar(7));

function restar (b,a) {
  return b-a
}

console.log(restar(10,8));


