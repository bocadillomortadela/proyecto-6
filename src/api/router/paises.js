const { getPais, getPaisByContinent, getPaisById, DeletePais, getPaisByPib, putPais, postPais } = require('../controllers/paises')
const pais = require('../models/paises')

const paisRouter = require('express').Router()

paisRouter.get('/pib/:pib', getPaisByPib)
paisRouter.get('/continentes/:continentes', getPaisByContinent)
paisRouter.get('/:id', getPaisById)
paisRouter.get('/', getPais)
paisRouter.post('/', postPais)
paisRouter.put('/:id', putPais)
paisRouter.delete('/:id', DeletePais)

module.exports = paisRouter
