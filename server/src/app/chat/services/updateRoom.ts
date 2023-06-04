// import services
import i18n from '../../../config/i18n'
// Import Repo
import { StatusCodes } from "http-status-codes";
import chatRepo from "../repo/chat.repo";

// Import Libraries
import moment from "moment-timezone";

const updateRoom = async (container:any) => {

    try {

        const {
            input:{
                params,
                logged_in_user
            },
            derived
        } = container;

        // 
        // validate room by uuid
        // 
        derived.roomDetails = await chatRepo.doesRoomExists(params.room_uuid);

        if(derived.roomDetails.created_by !== logged_in_user.uuid){

            const err: any = new Error(i18n.__('room.not_allowed'))
            err.statusCode = StatusCodes.BAD_REQUEST;
            throw err;

        }

        // 
        // save room details 
        // 
        await upsertRoom(container);

        container.output.result = container.derived.roomDetails;

    } catch (error) {
        
        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: upsert room details 
🗓 @created: 01/03/2023
============================*/
const upsertRoom = async (container:any) => {
    
    try {

        const {
            input:{
                body,
                params,
                logged_in_user
            }
        } = container;

        const roomDetails = {
            title: body.title
        }

        container.derived.roomDetails = await chatRepo.updateRoomData(params.room_uuid,roomDetails);

    } catch (error) {

        throw error;

    }

}

export default updateRoom;