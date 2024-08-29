const product = require('../models/productModel')


exports.productCreate = async(name, description, price) => {
    console.log('service layer wrkng')
    console.log('service layer name', name)
    console.log('service layer description', description)
    console.log('service layer price', price)

    try{

        const productDetails = await  product.createproduct(name, description, price);
        console.log('servicelayer products' , productDetails)
        if(productDetails){
            const productResponse = {
                name : name,
                description : description,
                price : price 
            }
            console.log('productresponse', productResponse);
            return productResponse;
        }else {
            const responseData = {message:'something went wrong'};
            return responseData;
        }
        
    }

    catch(err){
        console.log(err)
        return err;
    }

}

exports.getAllProducts = async () => {
    try{
        const productDetails = await product.fetchProducts()
        console.log('service layer get user')
        return productDetails;
    }
    catch{
        console.log(err)
        return err;
    }
}

