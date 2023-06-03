'use strict';
// Import Config
import i18n from '../config/i18n';

// Import Static

// Import Middleware

// Import Controllers

// Import Interface

// Import Validators

// Import Helpers

// Import Transformers

// Import Libraries

// Import Models

// Import Thirdparty
import statusCodes from 'http-status-codes';

class ResponseHelper {
    
    
    //
    // Success Format the response
    //
    async successResponse (data:any)  {

        let responseFormat : any = {
            status: 'success',
            data: data.result
        };

        if('meta' in data) {

            responseFormat.meta = data.meta;

        }

        if('message' in data) {

            responseFormat.message = data.message;

        }

        return responseFormat

    }

    //
    // Format Validation error response
    //
    async validationErrorResponse(data:any) {

        let validationErrorFormat : any = {
            status: 'error',
        };

        if ('validationErrors' in data) {

            validationErrorFormat.errors = data.validationErrors;

        }

        if('message' in data) {

            validationErrorFormat.message = data.message;

        }
        
        return validationErrorFormat

    }

    /*
    * 😎 @author : Raj Jagani
    * 🚩 @uses : to get the statusCode
    * 🗓 Created : 21/4/2022
    */
    async getStatusCode(error:any) {

        return isNaN(error.statusCode) ? 500 : error.statusCode;

    }

    /*
    * 😎 @author : Raj Jagani
    * 🚩 @uses : to format the validation errors
    * 🗓 Created : 22/4/2022
    */
    async getValidationError(errors:any) {

        try {

            const errFormat:any = new Error(i18n.__('validation_error'));
            errFormat.validationErrors = errors;
            errFormat.statusCode = statusCodes.BAD_REQUEST
            throw errFormat;

        } catch (err) {

            throw err;

        }
        

    }

}

export default new ResponseHelper()
