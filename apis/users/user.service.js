//import required dependencies
const pool = require('../../config/database');

module.exports =({
    // SERVICE 1 = create
    //if code is successfull then display the second method if failure then first
    create:(data, callBack)=>{
        pool.query(
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
        )
    },
    // END SERVICE 1 = create

    // SERVICE 1 = read
    //if code is successfull then display the second method if failure then first
    read: (data, callBack)=>{
        pool.query(
            `select * from users `,
             (error,result,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,result)
             }

        )
    },
    // END SERVICE 1 = read


    // SERVICE 1 = read
    //if code is successfull then display the second method if failure then first
    update:(data,callback)=>{
       
        pool.query(
            `update users set firstname=?, lastname=?, gender=?, email=?, password=?, number=? where id= ?`,
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, result, fields)=>{
                if(error){
                    return callback(error)
                }
                return callback(null,result);
            }
        )
    }
})