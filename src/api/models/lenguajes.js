const mongoose = require('mongoose')

const lenguajeSchema = new mongoose.Schema(
  {
    idioma: { type: String, required: true },
    hablantes: { type: Number, required: true },
    paises: [{ type: mongoose.Types.ObjectId, ref: 'paises', required: false }]
  },
  {
    timestamps: true,
    collection: 'lenguajes'
  }
)

const Lenguajes = mongoose.model('lenguajes', lenguajeSchema, 'lenguajes')
module.exports = Lenguajes
