//importing required libraries
const {create} = require('./user.service');
const { genSaltSync, hashSync}= require('dcrypt');

module.exports ={
    createUser: (req, res) => {
        //getting the request body as an associative array
        const body = req.body

        //encrypting password before uploading to db
        //requires dcrypt package to be installed
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

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
    }
}