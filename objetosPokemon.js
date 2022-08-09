/*const Charizard1 = new Charizard("charizard1","Fuego", 250,50)
const Charmeleon2  = new Charizard("Charmeleon", "Fuego", 270, 50)
const Bulbasaur3= new Bulbasaur("Bulbasaur", "Planta", 300, 40)
const Ivysaur4 = new Bulbasaur("Ivysaur ", "Planta", 320, 40)
const Squirtle5 = new Squirtle("Squirtle", "Agua", 350, 30)
const Wartortle6  = new Squirtle("Wartortle ", "Planta",370, 30)
let pokemonesPlanta = [Bulbasaur3, Ivysaur4]
let PokemonesAgua = [Squirtle5, Wartortle6]
let PokemonesFuego = [Charizard1, Charmeleon2]

const TodosLosPokemon = pokemonesPlanta.concat(PokemonesAgua).concat(PokemonesFuego)

do{
    Charizard1.lanzallamas(Squirtle5)
        if(Squirtle5.vida <= 0){
        break
    }
    Squirtle5.burbujas(Charizard1)
} while ( (Charizard1.vida > 0 ) || (Squirtle5.vida > 0) )
*/
const botonCompra1 = document.getElementById("botonCompra1")
const botonCompra2 = document.getElementById("botonCompra2")
const botonCompra3 = document.getElementById("botonCompra3")
const compra = document.getElementById("compra")
const buscador = document.getElementById("buscador")
const dinero = 50

botonCompra1.addEventListener("click", () => {
    Motog30.comprar
    console.log("comprado")
})
botonCompra2.addEventListener("click", () => {
   iPhone12.comprar
   console.log("comprado")
   console.log(dinero)
})
botonCompra3.addEventListener("click", () => {
    iPhone12.comprar
    console.log("s")
})


buscador.addEventListener("change",()=>{
   console.log(buscador.value)
})

