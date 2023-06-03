// import services

// Import Repo
import { StatusCodes } from "http-status-codes";
import chatRepo from "../repo/chat.repo";

// Import Libraries

const getRoomDetails = async (container:any) => {

    try {

        const {
            input:{
                params
            }
        } = container;

        // 
        // validate room by uuid
        // 
        container.derived.roomDetails = await  chatRepo.doesRoomExists(params.room_uuid);

        // 
        // validate logged in user is owner of the room or not
        // 
        await validateOwner(container);

        container.output.result = container.derived.roomDetails 

    } catch (error) {
        
        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: validate owner 
🗓 @created: 03/06/2023
============================*/
const validateOwner = async (container:any) => {

    try {
        
        const {
            input:{
                logged_in_user
            },
            derived:{
                roomDetails
            }
        } = container;
        
        if(roomDetails.created_by !== logged_in_user.uuid){

            const err: any = new Error(i18n.__('room.not_allowed'))
            err.statusCode = StatusCodes.BAD_REQUEST;
            throw err;

        }

    } catch (error) {
        
        throw error;

    }

}

export default getRoomDetails;