const express = require('express')
const morgan = require ('morgan')
const database = require('./database')
const cors = require('cors')

//configuración inicial
const app = express();
app.set('port', 4000)
app.listen(app.get('port'));
console.log("Escuchando en puerto " + app.get('port'))

//middlewares
app.use(cors({
    origin:['http://127.0.0.1:5500', 'http://127.0.0.1:5501']
}))
app.use(morgan('dev'))


//routes
app.get('/dinosaurios', async (req, res)=>{
    const connection = await database.getConnection();
    const result = await connection.query('SELECT * from dinosaurios')
    res.json(result)
})