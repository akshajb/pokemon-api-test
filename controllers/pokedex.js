const Pokedex = require('../models/Pokedex')

exports.getpokedexslist = (req,res) => {
    const response = Pokedex.getPokedexsList()

    response.then(response =>{
        const data = [];
        for (let index = 1; index < 5; index++) {
            data.push(response.results[index]);
        }
        res.send(data)
    }).catch(error =>{
        res.send(error)
    })
}

exports.getpokedexbyname = (req,res) => {
    const response = Pokedex.getPokedexByName(req.params.name)

    response.then(data =>{
        res.send({
            name: data.name,
            pokemons: data.pokemon_entries
        })
    }).catch(error =>{
        res.send(error)
    })
}