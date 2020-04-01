// Import libraries
require('colors')
const express = require('express')
const dotenv = require('dotenv')
// Define application
const app = express()
// Define .env path
dotenv.config({ path: '.env' })
// Initiate Middlewares
app.use(express.json({ extended: false }))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  )
  next()
})
// Define Routes

// Define Host Port. If No Port Is Given, 5000 Is Set As Default.
const PORT = process.env.PORT || 5000
// Starting Server
app.listen(PORT, () =>
  console.log(
    'Server running in '.blue +
      process.env.MODE.yellow +
      ' mode on port '.blue +
      PORT.yellow
  )
)
