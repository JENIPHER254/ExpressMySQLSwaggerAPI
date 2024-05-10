// importing db credentials
const pool = require('../../config/database');

module.exports =({
    //SERVICE 1 = create
    //if code is successful a product will be added to db
    create: (data, callBack)=>{
        pool.query(
            `insert into product(productName, productDescription, price, productID, quantity) values(?,?,?,?,?)`,
            [
                data.productName,
                data.productDescription,
                data.price,
                data.productID,
                data.quantity

            ],
            (error, results, fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(results);
            }
        )
    },
    // End SERVICE 1

    //SERVICE 2 = read 
    // id code is successful the user should be able to read data in json format
    read:(data, callback)=>{
        //read query : pool= db credentials
        pool.query(
            `select * from product`,
            (error, results, fields)=>{
                if(error){
                    console.log(error);
                    return callback(error);
                }
                return callback(null, results);
            }

        )
    }
})