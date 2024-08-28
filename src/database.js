const dotEnv = require('dotenv')
dotEnv.config();

const mySql = require('promise-mysql')


const connection = mySql.createConnection(
    {
        host: process.env.host,
        database:process.env.database,
        user:process.env.user,
        password: process.env.password
    }
)

const getConnection = async ()=> await connection;

module.exports = {
    getConnection
}
