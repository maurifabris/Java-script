class Pokemon{
    constructor(nombreParam, claseParam, vidaParam){
      this.nombre = nombreParam
      this.clase = claseParam
      this.vida = vidaParam
    }

    //este metodo es para que reciban los ataques, tambien quiero hacer uno de usar pociones
    recibirAtaque(danio){ 
      if(this.vida - danio <= 0){
        console.log(`${this.nombre} se devilito`)
      } else {
        console.log(`${this.nombre} aguanto el ataque y ahora tiene ${this.vida}`)
    }
        this.vida -= danio
        }
  }
 
class Charizard  extends Pokemon {
    constructor(nombreParam, claseParam, vidaParam, danioLanzallamas){
        super(nombreParam, claseParam, vidaParam)
        this.danioLanzallamas = danioLanzallamas
    }

    //mas adelante la idea es que el usuario pueda elegir a quien atacar, lo podria hacer con un promt?
    lanzallamas(PokemonAtacado){ 
      if(PokemonAtacado.clase == "Agua"){
          const parraLanzallamasAgua = document.getElementById("dialogojs")
          parraLanzallamasAgua.innerText = (`${this.nombre} uso ¡Lanza llamas! Causando ${(this.danioLanzallamas * 0.85)} porque su rival es de tipo agua`)
          PokemonAtacado.recibirAtaque(this.danioLanzallamas * 0.90)
      }
      if(PokemonAtacado.clase === "Planta"){
      console.log(`${this.nombre} uso ¡Lanza llamas! Causando ${this.danioLanzallamas * 1.25} porque su rival es de tipo planta`)
      PokemonAtacado.recibirAtaque(this.danioLanzallamas * 1.25)}
      if(PokemonAtacado.clase === "Fuego"){
      console.log(`${this.nombre} uso ¡Lanza llamas! Causando ${this.danioLanzallamas}`)
      PokemonAtacado.recibirAtaque(this.danioLanzallamas)
      } 
    }
  }

  

  class Bulbasaur  extends Pokemon {
    constructor(nombreParam, claseParam, vidaParam, danioLatigazo){
        super(nombreParam, claseParam, vidaParam)
        this.danio = danioLatigazo
    }
    latigazo(PokemonAtacado){
      console.log(`${this.nombre} uso ¡Latigazo! causando ${this.danioLatigazo}`)
      PokemonAtacado.recibirAtaque(this.danioLatigazo)
    }
  }


  class Squirtle extends Pokemon {
    constructor(nombreParam, claseParam, vidaParam, danioBurbujas){
        super(nombreParam, claseParam, vidaParam)
        this.danioBurbujas = danioBurbujas
    }
    burbujas(PokemonAtacado){
      if(PokemonAtacado.clase === "Planta"){
        const parraLanzallamasAgua = document.getElementById("dialogo2")
        parraLanzallamasAgua.innerText = (`${this.nombre} uso ¡Burbujas! Causando ${(this.danioBurbujas * 0.85)} porque su rival es de tipo Planta`)
        PokemonAtacado.recibirAtaque(this.danioBurbujas * 0.90)
    }
    if(PokemonAtacado.clase === "Fuego"){
      const parraLanzallamasAgua = document.getElementById("dialogo2")
      parraLanzallamasAgua.innerText = `${this.nombre} uso ¡Burbujas! Causando ${(this.danioBurbujas * 1.25)} porque su rival es de tipo Fuego`
    PokemonAtacado.recibirAtaque(this.danioBurbujas * 1.25)}
    if(PokemonAtacado.clase === "Agua"){
    console.log(`${this.nombre} uso ¡Burbujas! Causando ${this.danioBurbujas}`)
    PokemonAtacado.recibirAtaque(this.danioBurbujas)
    } 
  }
}


