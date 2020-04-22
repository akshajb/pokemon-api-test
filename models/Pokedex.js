
const Pokedex = require('pokedex-promise-v2');
var poke = new Pokedex();


class Regions{

    static getPokedexsList(){

        return poke.getPokedexsList()

    }

    static getPokedexByName(name) {

        return  poke.getPokedexByName(name)
    
    }

}


module.exports = Regions