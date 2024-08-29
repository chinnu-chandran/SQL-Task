const db = require('../util/database');

module.exports = class products {
    static createproduct = async(name, description, price) => {
        // console.log('product name from model layer', name)
        try {
            const productData = await db.execute ('INSERT INTO products (name, description, price) VALUES (?, ?, ?)' ,
                [name, description, price]);
                console.log('product details from model layer', productData)
                return productData[0];
        }

        catch (err){
            console.log (err);
            return err;
        }
    }

    static fetchProducts = async() => {
        try{
         const getData = await   db.execute('SELECT * FROM products');
        console.log(getData[0])
        return getData[0];
        }

        catch(err){
            console.log(err)
            return err;
        }
    }
}

