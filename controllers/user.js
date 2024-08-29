
const users = require('../service/user-service')

const user = require('../models/user')

exports.postCreateUser = async(req,res,next) => {

    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;

    // console.log('hai') //control layer working

    try{
        console.log(JSON.stringify(req.body) , 'data from postman');
        const{
            firstName = firstName ,
            lastName = lastName ,
            email = email 
        } = req.body ;
        // console.log(req.body); 
        
        //adding service layer

        const userData = await users.userCreate(firstName, lastName, email);
        res.send (userData)
    }

    catch (err) {
        console.log('error', err)
        res.send(err,'error occured')
    }
}


exports.getUser = async (req,res,next) => {
    console.log('from cntrl layer getuser')//getuser wrkng
    try{
        
        const getuserData = await users.getAllUser()
        // console.log('from get All users')
        res.send (getuserData)
    }
    catch (err) {
        console.log(err)
        return err;
    }
}

exports.getUserById = async (req,res,next) => {
    const userId = req.params.userId;
    // console.log(userId)
    try {   
    //   console.log('hi from userby id ')  

    const usersData = await users.getUserId(userId)
    res.send(usersData)

    } 
    
    catch (err) {
       console.log(err) 
       return err;
    }
}
