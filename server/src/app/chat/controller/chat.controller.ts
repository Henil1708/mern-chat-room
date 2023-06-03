// import Config

import { NextFunction, Response } from "express";
import createRoom from "../services/createRoom";
import { StatusCodes } from "http-status-codes";
import responseHelper from "../../../helpers/response.helper";
import getRoomDetails from "../services/getRoomDetails";

// Import Static

// Import Middleware

// Import Controllers

//import Library

//import Helpers

// import Services

/*============================
😎 @author: Henil Mehta
🚩 @uses: chat controller
🗓 @created: 03/06/2023
============================*/
class ChatController {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: create room 
    🗓 @created: 03/06/2023
    ============================*/
    async createRoom(req: any, res: Response, next: NextFunction) {

        try {

            const container:any = {
                input: {
                    body: req.body,
                    logged_in_user: req.logged_in_user,
                },
                derived: {},
                output: {
                    result: {}
                }
            };

            // 
            // initializing create room service 
            // 
            await createRoom(container);

            //
            //  send the response
            //
            res.status(StatusCodes.OK).json(await responseHelper.successResponse(container.output));

        } catch (error: any) {

            res.status(await responseHelper.getStatusCode(error))
                .json(await responseHelper.validationErrorResponse(error));

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: get room details  
    🗓 @created: 03/06/2023
    ============================*/
    async getRoomDetails(req: any, res: Response, next: NextFunction) {

        try {

            const container:any = {
                input: {
                    body: req.body,
                    params: req.params,
                    logged_in_user: req.logged_in_user,
                },
                derived: {},
                output: {
                    result: {}
                }
            };

            // 
            // initializing create room service 
            // 
            await getRoomDetails(container);

            //
            //  send the response
            //
            res.status(StatusCodes.OK).json(await responseHelper.successResponse(container.output));

        } catch (error: any) {

            res.status(await responseHelper.getStatusCode(error))
                .json(await responseHelper.validationErrorResponse(error));

        }

    }

}

export default new ChatController();