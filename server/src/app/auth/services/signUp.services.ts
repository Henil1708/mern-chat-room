// Import Config
import config from '../../../config/constant';

// Import Validator

// Import Static

// Import Middleware

// Import Controllers

// Import Helpers

// Import Transformers

// Import Libraries

// Import Repos

// Import Thirdparty
import jwt from 'jsonwebtoken';
import moment from 'moment-timezone';
import userRepo from '../../user/repo/user.repo';
import authHelper from '../helper/auth.helper';

/*============================
😎 @author: Henil Mehta
🚩 @uses: sign up user
🗓 @created: 03/06/2022
============================*/
const signUp = async (container:any) =>{
    
    try {
        
        const {
            input:{
                body
            }
        } = container;

        // 
        // validate user unique email
        // 
        await userRepo.isEmailExist(body.email);

        // 
        // save user details 
        // 
        await saveUserDetails(container);

        // 
        // generate access and refresh token
        // 
        await generateAccessAndRefreshToken(container);

    } catch (error) {
        
        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: save user details 
🗓 @created: 03/06/2022
============================*/
const saveUserDetails = async (container:any) => {

    try {
        
        const {
            input:{
                body
            }
        } = container;

        // 
        // generate hashed password
        // 
        const hasedPassword:any =await authHelper.generateHashPassword(body.password);

        // 
        // create user data model
        // 
        const userDataModel = {
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: hasedPassword,
            created_at: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
        }

        // 
        // save user details 
        // 
        container.derived.user = await userRepo.saveUserData(userDataModel);

    } catch (error) {
        
        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: generate access and refresh token 
🗓 @created: 03/06/2023
============================*/
const generateAccessAndRefreshToken =async (container:any) => {

    try {
        
        const {
            derived:{
                user
            }
        } = container;

        
        //
        // Prepare the Payload
        //
        const payload:any =  {
            user_uuid: user.uuid
        }

        const secretKey:any = config.app.JWT_SECRET_KEY;
        const token = jwt.sign(payload,secretKey,{
            expiresIn: "24h"
        });


        container.output.result = {
            access_token:token
        };


    } catch (error) {
        
        throw error;

    }

} 

export default signUp;
