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
    // if code is successful the user should be able to read data in json format
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
    },
    // end SERVICE 2

    //START SERVICE 3 = delete
    // if code is successful user should be able to delete product according to productID
    delete_product:(data, callBack)=>{

        pool.query(
            `delete from product where productID=?`,
            [
                data.productID
            ],
            (error, results, fields)=>{
                if(error){
                    console.log(error);
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    //end SERVICE3 
    //end delete service


    //SERVICE 4
    //if code works user should be able to update respective product
    update: (data, callBack)=>{
        pool.query(
            `update product set productName=?, productDescription=?, price=?, quantity=? ,productID=? where id=? `,
        [
            data.productName,
            data.productDescription,
            data.price,
            data.quantity,
            data.productID,
            data.id
        ],(error, result, fields)=>{
            if(error){
                console.log(error);
                return callBack(error);
            }
            return callBack(null, result);
        }
        )
        

    }

})