// importing db credentials
const pool = require('../../config/database');

module.exports =({
    //SERVICE 2 = create
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
    }
})