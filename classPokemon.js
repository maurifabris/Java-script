class Pokemon {
  constructor(nombreParam, claseParam, vidaParam) {
    this.nombre = nombreParam
    this.clase = claseParam
    this.vida = vidaParam
  }

  //este metodo es para que reciban los ataques, tambien quiero hacer uno de usar pociones
  recibirAtaque(danio) {
    if (this.vida - danio <= 0) {
      this.vida -= danio
      console.log(`${this.nombre} se devilito`)
    } else {
      this.vida -= danio
      console.log(`${this.nombre} aguanto el ataque y ahora tiene ${this.vida}`)
    }
  }
}

class Charizard extends Pokemon {
  constructor(nombreParam, claseParam, vidaParam, danioLanzallamas) {
    super(nombreParam, claseParam, vidaParam)
    this.danioLanzallamas = danioLanzallamas
  }

  //mas adelante la idea es que el usuario pueda elegir a quien atacar, lo podria hacer con un promt?
  lanzallamas(PokemonAtacado) {
      switch (PokemonAtacado.clase) {
        case "Agua": {
          console.log(`${this.nombre} uso ¡Lanza llamas! Causando ${this.danioLanzallamas * 0.85} porque su rival es de tipo agua`)
          PokemonAtacado.recibirAtaque(this.danioLanzallamas * 0.85)
          break
        }
        case "Planta": {
          console.log(`${this.nombre} uso ¡Lanza llamas! Causando ${this.danioLanzallamas * 1.25} porque su rival es de tipo planta`)
          PokemonAtacado.recibirAtaque(this.danioLanzallamas * 1.25)
          break
        }
        case "Fuego": {
          console.log(`${this.nombre} uso ¡Lanza llamas! Causando ${this.danioLanzallamas} porque su rival es de tipo fuego`)
          PokemonAtacado.recibirAtaque(this.danioLanzallamas)
          break
        }
      }
  }
}



        class Bulbasaur extends Pokemon {
          constructor(nombreParam, claseParam, vidaParam, danioLatigazo) {
            super(nombreParam, claseParam, vidaParam)
            this.danioLatigazo = danioLatigazo
          }
          latigazo(PokemonAtacado) {
            switch (PokemonAtacado.clase) {
              case "Agua": {
                console.log(`${this.nombre} uso ¡Latigazo! Causando ${this.danioLatigazo * 1.25} porque su rival es de tipo agua`)
                PokemonAtacado.recibirAtaque(this.danioLatigazo * 1.25)
                break
              }
              case "Planta": {
                console.log(`${this.nombre} uso ¡Latigazo! Causando ${this.danioLatigazo} porque su rival es de tipo planta`)
                PokemonAtacado.recibirAtaque(this.danioLatigazo)
                break
              }
              case "Fuego": {
                console.log(`${this.nombre} uso ¡Latigazo! Causando ${this.danioLatigazo * 0.85} porque su rival es de tipo fuego`)
                PokemonAtacado.recibirAtaque(this.danioLatigazo * 0.85)
                break
              }
            }
        }
      }

        class Squirtle extends Pokemon {
          constructor(nombreParam, claseParam, vidaParam, danioBurbujas) {
            super(nombreParam, claseParam, vidaParam)
            this.danioBurbujas = danioBurbujas
          }
          burbujas(PokemonAtacado) {
            switch (PokemonAtacado.clase) {
              case "Agua": {
                console.log(`${this.nombre} uso ¡Burbujas! Causando ${this.danioBurbujas} porque su rival es de tipo agua`)
                PokemonAtacado.recibirAtaque(this.danioBurbujas * 0.85)
                break
              }
              case "Planta": {
                console.log(`${this.nombre} uso ¡¡Burbujas! Causando ${this.danioBurbujas * 0.85} porque su rival es de tipo planta`)
                PokemonAtacado.recibirAtaque(this.danioBurbujas * 1.25)
                break
              }
              case "Fuego": {
                console.log(`${this.nombre} uso ¡Burbujas! Causando ${this.danioBurbujas * 1.25} porque su rival es de tipo fuego`)
                PokemonAtacado.recibirAtaque(this.danioBurbujas)
                break
              }
            }
        }
      }