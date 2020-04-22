
const Pokedex = require('pokedex-promise-v2');
var poke = new Pokedex();


class Regions{

    static getRegionList() {
   
        return  poke.getRegionsList()

    }

    static getRegionByName(name) {

        return  poke.getRegionByName(name)
    
    }

}


module.exports = Regions