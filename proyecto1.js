/*
let nike = 50

let puma = 40
let adidas = 55
let sandalias = 30
let precio = 0
let confirm = si

function agregar(marca){
  do{
    marca = prompt("que marca desea agregar?").toLocaleLowerCase
    confirm = prompt("desea agregar mas productos?").toLocaleLowerCase
    return precio + marca
  } while( confirm === si)
}
agregar(puma)
console.log(precio)*/
////////////////////////////
////////////////////////


let velocidad = parseFloat(prompt("velocidad?"))

function aumentarVelocidad(vel){
  while(vel < 100){ 
  vel += 10
  console.log(vel)
}}
function reducirVelocidad(vel){
  while(vel > 100){ 
  vel -= 10
  console.log(vel)
}}

if( velocidad > 100 ) {
  reducirVelocidad(velocidad)
} else{
  aumentarVelocidad(velocidad)
}








////////////////////////////////////////////////
/*
let velocidad = 50
let variacion
do {
  variacion = prompt(`Ingrese una opcion:  1-subri velocidad  2-bajar velocidad 3-mantener`)
  switch

} while(velocidad=50)*/