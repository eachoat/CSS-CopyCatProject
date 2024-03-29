const express = require ('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send('Welsome to an Awesome App about Breads!')
})

//Breads
const breadsController = require ('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

console.log(PORT)