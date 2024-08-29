const user = require('../models/user')

exports.userCreate = async (firstName, lastName, email) => {
    console.log('service layer wrkng')
    console.log('service layer fstname', firstName)
    console.log('service layer lstname', lastName)
    console.log('service layer email', email)

try {
    //add model
const emailDetails = await  user.getEmail(email);
console.log('servicelayer email' , emailDetails)

if (emailDetails.length > 0){
//return obj already having mailid
    const emailExists = { message: `email already exists, email: ${email}.`}
    return emailExists;

} else{
    //when no duplicate entry we have to create a new user
    const userData =  await user.createUser(firstName, lastName, email);
    // console.log('service layer userdata' , userData)
    // return userData [0];
   
    if(userData && userData.insertId){
        const userResponse = {
            firstName : firstName,
            lastName : lastName,
            email : email  
        }
        console.log('useresponse', userResponse);
        return userResponse;
        
    }else {
        const responseData = {message:'something went wrong'};
        return responseData;
    }


}
}


catch(err) {
    console.log(err)
    return err;
}

}

exports.getAllUser = async (userId) => {
    // console.log('from sevice layer getuser')
    // console.log('service layer getuser', firstName)

    try{
        const userDetails = await user.fetchAll()
        console.log('service layer get user')
        return userDetails;
    }

    catch (err) {
        console.log(err)
        return err;
    }
}

exports.getUserId = async(userId) => {
    // console.log('hi')
    try {
       const useridData = await user.fetchById(userId) 
       return useridData[0];
    } 
    
    catch (err) {
        console.log(err)
        return err;
        
    }
}
    


// module.exports = userCreate;