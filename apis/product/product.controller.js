// import service 
const {create, read} = require('./product.service');

module.exports={
    //createProduct controller section
    createProduct: (req,res)=>{
        //get request pody
        const body = req.body;

        //create the product using the create service
        create(body, (err,result)=>{
            if(err){
                console.log(err);
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
    // end create product controller

    //readProduct controller
    readProduct:(req,res)=>{
         const body = req.body;
        read(body, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data: result
            })
        })

    }
}