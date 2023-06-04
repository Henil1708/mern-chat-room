// import Config
import i18n from "../../../config/i18n";
import config from '../../../config/constant';

// Import Static

// Import Middleware

// Import Controllers

//import Library
import { NextFunction, Response } from "express";
import  statusCodes  from "http-status-codes";

//import Helpers
import responseHelper from "../../../helpers/response.helper";

// import Services
import signUpService from "../services/signUp.services";
import signInService from "../services/signIn.services"
import authorization from "../../../middleware/authorization";

// Import third party 
import jwt from 'jsonwebtoken';

/*============================
😎 @author: Henil Mehta
🚩 @uses: created auth controller
🗓 @created: 03/06/2023
============================*/
class AuthController {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: sign up user 
    🗓 @created: 03/06/2023
    ============================*/
    async signUp(req: any, res: Response, next: NextFunction) {

        try {

            const container = {
                input: {
                    body: req.body,
                    params: req.params
                },
                derived: {},
                output: {
                    result: {},
                    message: ""
                }
            };

            //
            //  get signup  data & save user data
            //
            await signUpService(container);

            //
            //  send the response
            //
            container.output.message = i18n.__('auth.signup');
            res.status(statusCodes.OK).json(await responseHelper.successResponse(container.output));

        } catch (error: any) {

            res.status(await responseHelper.getStatusCode(error))
                .json(await responseHelper.validationErrorResponse(error));

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: sign in user 
    🗓 @created: 03/06/2023
    ============================*/
    async signIn(req: any, res: Response, next: NextFunction) {

        try {

            const container:any = {
                input: {
                    body: req.body,
                    params: req.params,
                    user: req.user
                },
                derived: {},
                output: {
                    result:{}
                }
            }

            //
            // validate the login
            //
            await authorization.validateLogin(req);

            //
            // Prepare the Payload
            //
            const payload:any = {
                user_uuid: container.input.user.uuid
            }
            const secretKey:any = config.app.JWT_SECRET_KEY;
            const accessToken = jwt.sign(payload,secretKey);

            container.output.result = {access_token: accessToken};

            //
            // send the response
            //
            res.status(statusCodes.OK).json(await responseHelper.successResponse(container.output));
            
        } catch (error:any) {
            
            res.status(await responseHelper.getStatusCode(error)).json(await responseHelper.validationErrorResponse(error));

        }
    }

}

export default new AuthController();