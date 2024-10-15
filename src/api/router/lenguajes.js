const { getLenguajesById, DeleteLenguajes, putLenguajes, postLenguajes, getLenguajes, removePaisFromArray } = require('../controllers/lenguajes')

const lenguajesRouter = require('express').Router()

lenguajesRouter.get('/:id', getLenguajesById)
lenguajesRouter.get('/', getLenguajes)
lenguajesRouter.post('/', postLenguajes)
lenguajesRouter.put('/:id', putLenguajes)
lenguajesRouter.delete('/:id', DeleteLenguajes)
lenguajesRouter.put('/:id/remove-pais', removePaisFromArray)

module.exports = lenguajesRouter
