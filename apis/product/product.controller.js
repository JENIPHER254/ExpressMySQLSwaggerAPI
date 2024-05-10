// import service 
const {create, read, delete_product, update} = require('./product.service');

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

    },
    // end readProduct controller

    //deleteProduct controller
    deleteProduct:(req, res)=>{
        // get   request body data
        const body = req.body;

        delete_product(body, (err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: 'Database connection error'
                })
                
            }return res.status(200).json({
                    success:1,
                    data: result
                })
        })

    },
    //end deleteProduct controller

    //updateProduct controller
    updateProduct: (req, res)=>{
        //get the request body
        const body = req.body;

        update(body, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: 'Database connection error'
                })
            }return res.status(200).json({
                success:0,
                data: result
            })
        })
    }

}