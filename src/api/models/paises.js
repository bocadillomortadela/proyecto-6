const mongoose = require('mongoose')

const paisSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    pib: { type: Number, required: true },
    continentes: {
      type: String,
      required: true,
      enum: ['North America', 'Sounth America', 'Europe', 'Africa', 'Asia', 'Oceania']
    }
  },
  {
    timestamps: true,
    collection: 'paises'
  }
)

const Pais = mongoose.model('paises', paisSchema, 'paises')
module.exports = Pais
