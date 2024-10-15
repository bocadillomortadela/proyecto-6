const Pais = require('../models/paises')
const pais = require('../models/paises')

// Funcionalidades que queramos que ocurra con el modelo paises

const getPais = async (req, res, next) => {
  try {
    const paises = await Pais.find()
    return res.status(200).json(paises)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getPaisByContinent = async (req, res, next) => {
  try {
    const { continentes } = req.params
    const paises = await Pais.find({ continentes })
    return res.status(200).json(paises)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getPaisByPib = async (req, res, next) => {
  try {
    const { pib } = req.params
    const paises = await Pais.find({ pib: { $lte: pib } })
    return res.status(200).json(paises)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getPaisById = async (req, res, next) => {
  try {
    const { id } = req.params
    const pais = await Pais.findById(id)
    return res.status(200).json(pais)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postPais = async (req, res, next) => {
  try {
    const newPais = new Pais(req.body)
    const paisSaved = await newPais.save()
    return res.status(201).json(paisSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putPais = async (req, res, next) => {
  try {
    const { id } = req.params
    const newPais = new Pais(req.body)
    newPais._id = id
    const paisUpdated = await Pais.findByIdAndUpdate(id, newPais, {
      new: true
    })
    return res.status(200).json(paisUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const DeletePais = async (req, res, next) => {
  try {
    const { id } = req.params
    const paisDeleted = await Pais.findByIdAndDelete(id)
    return res.status(200).json(paisDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = { getPais, getPaisByContinent, getPaisByPib, getPaisById, postPais, putPais, DeletePais }
