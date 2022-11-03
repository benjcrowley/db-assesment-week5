require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

// let Rollbar = require('rollbar')
// let rollbar = new Rollbar({
//   accessToken: process.env.ROLLBAR_TOKEN,
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })
// rollbar.log('Hello world round 2')
app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

app.listen(PORT, () => console.log(`up on ${PORT}`))