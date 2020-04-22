const express = require('express');
const router = express.Router();
const regions_ctrl = require('../controllers/regions')
const pokedex_ctrl = require('../controllers/pokedex')

router.get('/region-list', regions_ctrl.getregionlist)

router.get('/region/:name', regions_ctrl.getregionbyname)

router.get('/pokedex-list', pokedex_ctrl.getpokedexslist)

router.get('/pokedex/:name', pokedex_ctrl.getpokedexbyname)

router.get('/',(req, res) => res.send('Hello Trainer!'))

module.exports = router;