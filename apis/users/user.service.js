//import required dependencies
const pool = require('../../config/database');

module.exports =({
    //if code is successfull then display the second method if failure then first
    create:(data, callBack)=>{
        pool.query{
            `insert into users(firstname, lastname, gender, email, password, number) values(?,?,?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, result, fields)=>{
                if(error){
                  return  callBack(error);
                }
                return callBack(null, result)
            }
        }
    }
})