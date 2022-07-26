/* La idea es que sea una especie de validacion en la compra de unas zapatillas*/

let confirmacion = true
while(confirmacion){
    let marca = prompt("Que marca desea?")
    let talle = parseFloat(prompt("Cual es su talle?"))
    let color = prompt("en que color le gustarian?")

    console.log(`Usted desea unas ${marca} de talle ${talle}  de color ${color}`)

    let repetir = prompt("Desea hacer algun cambio?").toLocaleLowerCase()

    if(repetir === "no"){
    confirmacion = false}
}


 




