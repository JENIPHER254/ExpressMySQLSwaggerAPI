//importing required libraries
const {create, read, update, delete_user} = require('./user.service');
//const { genSaltSync, hashSync}= require('dcrypt');

module.exports ={
    createUser: (req, res) => {
        //getting the request body as an associative array
        const body = req.body

        //encrypting password before uploading to db
        //requires dcrypt package to be installed
        //const salt = genSaltSync(10);
        //body.password = hashSync(body.password, salt);

        //calling the create service
        create(body, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    messege:'Database connection error'
                })
            }
            return res.status(200).json({
                success:1,
                data: results
            })
        })

       
    },

    //readUser controller
    readUser:(req,res)=>{
        const body= req.body;
        //calling read service
        read(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'
                })
            }
            return res.status(200).json({
                success:1,
                data:result
            })
        })
    },

    //updateUser controller
    updateUser:(req, res)=>{
        const body = req.body;

        update(body, (err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: 'Database connection error'
                })
            }
            return res.status(200).json({
                success:1,
                data: result
            })
        })
    },

    //deleteUser controller
    deleteUser:(req,res)=>{
        const body = req.body;

        delete_user(body, (err, result)=>{
            if(err){
                console.Console.log(err);
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'       
                         })
            }
            return res.status(200).json({
                success:1,
                message:result
            })
        })
    }
}