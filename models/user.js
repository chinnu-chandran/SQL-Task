const db = require('../util/database');

module.exports = class user {

    constructor(firstName,lastName,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    static getEmail = async(email) => {
        console.log('from model layer getemail' , email) //getemail wrkng
       try{

        //add query
        const emailData = await db.execute ('SELECT * FROM users WHERE email= ? ' , [email])
        console.log('model layer mail', emailData);
        return emailData[0];
       }
       catch(err){
        console.log(err)
        return err;
       }
        
    }

    static createUser = async (firstName, lastName, email) => {
        try {
            //add sql query

            const userData = await db.execute('INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)', 
                [firstName, lastName, email])
                return userData[0];
        }

        catch (err) {
            console.log(err)
            return err;
        }
        // console.log ('from model create user') //createuser wrkng
    }

    static fetchAll = async() => {
        try{
        const getData = await   db.execute('SELECT * FROM users');
        console.log(getData[0])
        return getData[0];
        }

        catch(err) {
            console.log(err)
            return err;
        }
       
      }

      static fetchById = async(userId) => {
        try {
           const userDatas = await db.execute('SELECT * FROM users WHERE userId = ?', [userId]); 
           console.log(userDatas[0]);
           return userDatas[0]
        } 
        
        catch (err) {
            console.log(err)
            return err;
        }
      }


      static getEmailId = async(userId) => {
        console.log('from model layer getemailId') //getemail wrkng
       try{

        //add query
        const emailDatas = await db.execute ('SELECT email FROM users WHERE userId= ? ' , [userId])
        console.log('usermodel layer mail', emailDatas);
        return emailDatas[0];
       }
       catch(err){
        console.log(err)
        return err;
       }
        
    }
      
      }

