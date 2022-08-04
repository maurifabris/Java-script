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
      console.log(`${this.nombre} uso ¡Latigazo! causando ${this.danioLanzallamas}`)
      PokemonAtacado.recibirAtaque(this.danioLanzallamas)

      /*if(PokemonAtacado.clase = "Agua"){
        console.log(`${this.nombre} uso ¡Lanza llamas! causando ${(this.danioLanzallamas * 0.90)} por que su enemigo es de tipo agua`) } else { 
      PokemonAtacado.recibirAtaque(this.danioLanzallamas)
      console.log(`${this.nombre} uso ¡Lanza llamas! causando ${this.danioLanzallamas}`)
      PokemonAtacado.recibirAtaque(this.danioLanzallamas)
    }*/
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
      console.log(`${this.nombre} uso ¡Burbujas! causando ${this.danioBurbujas}`)
      PokemonAtacado.recibirAtaque(this.danioBurbujas)
    }
    
  }


