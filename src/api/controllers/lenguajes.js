const Lenguajes = require('../models/lenguajes')

// Funcionalidades que queramos que ocurra con el modelo lenguajes

const getLenguajes = async (req, res, next) => {
  try {
    const lenguajes = await Lenguajes.find().populate('paises')
    return res.status(200).json(lenguajes)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getLenguajesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const lenguaje = await Lenguajes.findById(id)
    return res.status(200).json(lenguaje)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postLenguajes = async (req, res, next) => {
  try {
    const newLenguajes = new Lenguajes(req.body)
    const lenguajeSaved = await newLenguajes.save()
    return res.status(201).json(lenguajeSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putLenguajes = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldLenguaje = await Lenguajes.findById(id)

    const newPaises = req.body.paises

    if (newPaises && newPaises.length) {
      const combinedPaises = [...oldLenguaje.paises, ...newPaises]
      oldLenguaje.paises = [...new Set(combinedPaises)]
    }

    const lenguajeUpdated = await Lenguajes.findByIdAndUpdate(id, oldLenguaje, {
      new: true
    })

    return res.status(200).json(lenguajeUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const DeleteLenguajes = async (req, res, next) => {
  try {
    const { id } = req.params
    const lenguajeDeleted = await Lenguajes.findByIdAndDelete(id)
    return res.status(200).json(lenguajeDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const removePaisFromArray = async (req, res, next) => {
  try {
    const { id } = req.params
    const { paisId } = req.body

    const lenguajeUpdated = await Lenguajes.findByIdAndUpdate(id, { $pull: { paises: paisId } }, { new: true })
    return res.status(200).json(lenguajeUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = { getLenguajes, getLenguajesById, postLenguajes, putLenguajes, DeleteLenguajes, removePaisFromArray }
