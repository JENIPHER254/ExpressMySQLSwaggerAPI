//importing method
require("dotenv").config();
const {createPool} = require('mysql');

const pool = createPool({
    port:process.env.DB_PORT,
    host: process.env.DB_HOST,
    user:process.env.DB_USER, 
    password: process.env.DB_PASS,
    database:process.env.MUSQL_DB,
    connectionLimit:10 //how many connections we want to create in a pool
})

// export module as pool (helps in reuse of connection)
module.exports = pool;
