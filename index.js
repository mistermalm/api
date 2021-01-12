// packages
import _ from 'colors'
import env from 'dotenv'
import express from 'express'
import indexRoute from './routes/indexRoute.js'

// methods
env.config()

// constants
const app = express()
const PORT = process.env.PORT || 5000

// body parser
app.use(express.json())

// routes
app.use('/', indexRoute)

// server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
)
