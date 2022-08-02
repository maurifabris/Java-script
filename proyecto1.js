class Pokemon{
  constructor(nombreParam, claseParam, vidaParam){
    this.nombre = nombreParam
    this.clase = claseParam
    this.vida = vidaParam
  }
  atacar(){
    console.log(`${this.nombre} ataco causando ${this.ataque} de daño`)
  }
}

class Ataque{
  constructor(NombreAtc, danioAtc){
    this.Nombre = NombreAtc
    this.daño = danioAtc
  }
}

const Charizard1 = new Pokemon("Charizard", "Fuego", 250)
const Charmeleon2  = new Pokemon("Charizard", "Fuego", 270)
const Bulbasaur3= new Pokemon("Bulbasaur", "Planta", 300)
const Ivysaur4 = new Pokemon("Ivysaur ", "Planta", 320)
const Squirtle5 = new Pokemon("Squirtle", "Agua", 350)
const Wartortle6  = new Pokemon("Wartortle ", "Planta",370)

const Latigazo = new Ataque("Latigo sepa", 50)
const lanzaLlamas = new Ataque("Lanza llamas", 70)
const burbujas = new Ataque("Burbujas", 45)


const ataques = [Latigazo, lanzaLlamas, burbujas]
let pokemonesPlanta = [Bulbasaur3, Ivysaur4]
let PokemonesAgua = [Squirtle5, Wartortle6]
let PokemonesFuego = [Charizard1, Charmeleon2]

const TodosLosPokemon = pokemonesPlanta.concat(PokemonesAgua).concat(PokemonesFuego)

console.log(TodosLosPokemon)



