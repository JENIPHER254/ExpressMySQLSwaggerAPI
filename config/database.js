//importing method
const {createPool} = require('mysql');

const pool = createPool({
    port:3306,
    host: 'localhst',
    user:'root', 
    password: '',
    database:'test',
    connectionLimit:10 //how many connections we want to create in a pool
})

// export module as pool (helps in reuse of connection)
module.exports = pool;
