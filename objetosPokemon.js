const Charizard1 = new Charizard("charizard1","Fuego", 250,50)
const Charmeleon2  = new Charizard("Charmeleon", "Fuego", 270, 50)
const Bulbasaur3= new Bulbasaur("Bulbasaur", "Planta", 300, 40)
const Ivysaur4 = new Bulbasaur("Ivysaur ", "Planta", 320, 40)
//const Squirtle5 = new Squirtle("Squirtle", "Agua", 350, 30)
//const Wartortle6  = new Squirtle("Wartortle ", "Planta",370, 30)
let pokemonesPlanta = [Bulbasaur3, Ivysaur4]
//let PokemonesAgua = [Squirtle5, Wartortle6]
let PokemonesFuego = [Charizard1, Charmeleon2]

//const TodosLosPokemon = pokemonesPlanta.concat(PokemonesAgua).concat(PokemonesFuego)

do{
    Charizard1.lanzallamas(Bulbasaur3)
        if(Bulbasaur3.vida <= 0){
        break
    } else {
        Bulbasaur3.latigazo(Charizard1)
    }
    
} while ( (Charizard1.vida > 0 ) || (Bulbasaur3.vida > 0) )




