// import Config

import { NextFunction, Response } from "express";
import createRoom from "../services/createRoom";
import { StatusCodes } from "http-status-codes";
import responseHelper from "../../../helpers/response.helper";
import getRoomDetails from "../services/getRoomDetails";
import listRooms from "../services/listRoom";
import listRoomsChat from "../services/listRoomsChat";
import updateRoom from "../services/updateRoom";
import socketlib from "../../../library/socketlib";
import addMessage from "../services/addMessage";

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
    🚩 @uses: update room 
    🗓 @created: 03/06/2023
    ============================*/
    async updateRoom(req: any, res: Response, next: NextFunction) {

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
            await updateRoom(container);

            socketlib.broadcastEventToAll('refresh_rooms', {});

            socketlib.broadcastEventToAll('refresh_room_details', {});

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
            // initializing get room details service 
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

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: list rooms 
    🗓 @created: 03/06/2023
    ============================*/
    async listRooms(req: any, res: Response, next: NextFunction) {

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
            // initializing list rooms service 
            // 
            await listRooms(container);

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
    🚩 @uses: list chats of the room 
    🗓 @created: 0//2023
    ============================*/
    async listChats(req: any, res: Response, next: NextFunction) {

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
            // initializing list rooms chat service 
            // 
            await listRoomsChat(container);

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
    🚩 @uses: add message  
    🗓 @created: 03/06/2023
    ============================*/
    async addMessage(container:any) {

        try {

            // 
            // initializing add message service
            // 
            await addMessage(container);

        } catch (error) {
            
            // socketlib.sendEvent()

        }

    }

}

export default new ChatController();