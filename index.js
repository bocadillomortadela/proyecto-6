const express = require('express')
const { connectDB } = require('./src/config/db')
const paisRouter = require('./src/api/router/paises')
const pais = require('./src/api/models/paises')
const lenguajesRouter = require('./src/api/router/lenguajes')
const app = express()

require('dotenv').config()

// configurar nuestro servidor para que pueda recibir datos en formato json
app.use(express.json())

connectDB()
app.use('/api/v1/lenguajes', lenguajesRouter)
app.use('/api/v1/paises', paisRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000 ')
})
