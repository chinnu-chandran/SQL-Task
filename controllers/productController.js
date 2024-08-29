const products = require('../service/productSevice')

const product = require('../models/productModel')

exports.postProduct = async(req,res,next) => {
   // console.log('from product cntrl') //cntrler wrkng

//    const name = req.body.name;
//    const description = req.body.description;
//    const price = req.body.price;

//    console.log(req.body); 

try{
    console.log(JSON.stringify(req.body) , 'product data from postman');
    const {
        name = name ,
        description = description,
        price = price

    } =req.body;

    //adding service layer

    const productData = await products.productCreate(name, description, price)
    res.send({productData})

}

catch(err) {
    console.log(err)
    return err;
}
}

exports.getProduct = async (re,res,next) => {
try{
    const getproductData = await products.getAllProducts()
    // console.log('from get All users')
    res.send (getproductData)
}
catch (err) {
    console.log(err)
    return err;
}
}