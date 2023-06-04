// Import Library
import bcrypt from 'bcrypt'

class AuthHelper{
    
    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: compare the password 
    🗓 @created: 03/06/2023
    ============================*/
    async comparePassword(password:string,user_password:string) {

        try {

            return bcrypt.compare(password, user_password).then(response => {
                if (response !== true) {
                    return false;
                }
                return true;
            });

        } catch (error) {

            throw error;

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: generate the hash password
    🗓 @created: 03/06/2023
    ============================*/
    async generateHashPassword(password:string) {

        try {
            
            return new Promise((resolve,reject)=> {
                bcrypt.hash(password, 10, function(err:any, hash) {
                    if(err) {
    
                        reject(err);
    
                    }
                    resolve(hash);

                });
            });
            

        } catch (error) {

            throw error;

        }

    }
}


export default new AuthHelper();