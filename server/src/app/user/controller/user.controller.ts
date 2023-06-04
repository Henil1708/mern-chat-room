// import Config

// Import Static

// Import Middleware

// Import Controllers

// Import Library
import { NextFunction, Response } from "express";
import  statusCodes  from "http-status-codes";

// Import Helpers
import responseHelper from "../../../helpers/response.helper";

// Import  Services
import getUserService from "../services/getUser.services";

class UserController{

    /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    👑 @creator : Henil mehta
    🚩 @uses : get user API  
    🗓 @created : 29/8/2022
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
    async getUser(req: any, res: Response, next: NextFunction) {

        try {

            const container:any = {
                input: {
                    body: req.body,
                    params: req.params,
                    logged_in_user: req.logged_in_user,
                    auth_token: req.auth_token
                },
                derived: {},
                output: {
                    result: {}
                }
            };
            console.log("from get user");
            
            //
            //  get loggedIn user full profile and user active subscription
            //
            await getUserService(container);
            
            //
            //  send the response
            //
            res.status(statusCodes.OK).json(await responseHelper.successResponse(container.output));

        } catch (error: any) {

            res.status(await responseHelper.getStatusCode(error))
                .json(await responseHelper.validationErrorResponse(error));

        }
    }
}

export default new UserController();