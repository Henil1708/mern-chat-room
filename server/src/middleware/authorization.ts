// Import Config
import i18n from "../config/i18n";
import config from "../config/constant";

// Import Static

// Import Middleware

// Import Controllers

// Import Helpers

// Import Transformers

// Import Libraries

// Import Models

// Import Thirdparty
import statusCodes from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import responseHelper from "../helpers/response.helper";

class Authorization {

    async isAuthenticated(req:any,res:any,next:NextFunction) {

        try {

            if (!req.logged_in_user) {
                
                const err:any = new Error(i18n.__('un_authorized'));
                err.statusCode = statusCodes.UNAUTHORIZED;
                throw err;

            }

            next();

        } catch (error) {
            
            if(res.from && res.from === "socket"){

                throw error;

            }else{

                res.status(await responseHelper.getStatusCode(error))
                .json(await responseHelper.validationErrorResponse(error));

            }
            

        }

    }

    /*
    * 😎 @author : Raj Jagani
    * 🚩 @uses : to validate the login
    * 🗓 Created : 21/4/2022
    */
    async validateLogin(req:any) {

        try {

            if(req.error && Object.keys(req.error).length) {

                const err:any = new Error(req.error.message);
                err.statusCode = req.error.code;
                throw err;

            } else {
                
                if (!req.user) {

                    const err:any = new Error(i18n.__('invalid_credentials'));
                    err.statusCode = statusCodes.BAD_REQUEST;
                    throw err;
        
                }

            }
            return true;

        } catch (error) {

            throw error;

        }

    }

}
export default new Authorization();
