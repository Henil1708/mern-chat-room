// Import Libraries
import moment from 'moment-timezone';
import i18n from "../../../config/i18n";

// Import services

// Import Interface

//  Import Repo
import userRepo from "../../user/repo/user.repo";

// Import Thirdparty library
import { StatusCodes } from 'http-status-codes';

/*============================
😎 @author: Henil Mehta
🚩 @uses: user sign up service
🗓 @created: 03/06/2023
============================*/
const signUpService =async (container:any) => {

    try {
        const {
            input:{
                body
            } 
        }= container;

        if(body.email.includes('+')){

            const err:any = new Error(i18n.__('firebase_auth.invalid_email'));
            err.statusCode = StatusCodes.BAD_REQUEST;
            throw err;

        }

        return container;

    } catch (error) {
        
        throw error;

    }
    
}

export default signUpService;

