require('dotenv').config()
const express = require('express')
const sequelize = require('./bd')
const models = require('./models/models')
const PORT = process.env.PORT 
const cors =require('cors')
const app = express()
const router = require('./routes/index')


app.use(cors())
app.use(express.json())
app.use('/api',router)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))        
    }
    catch (e) {
        console.log(e)
    }
}
start()

