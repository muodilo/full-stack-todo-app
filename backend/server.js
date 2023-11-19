const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler }= require('./middleware/errorHandlerMiddleware')

const PORT = process.env.PORT
connectDB()

const app = express()

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}...`))