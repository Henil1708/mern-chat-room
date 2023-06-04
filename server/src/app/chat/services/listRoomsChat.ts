// import services

// Import Repo
import { StatusCodes } from "http-status-codes";
import chatRepo from "../repo/chat.repo";

// Import Libraries

const listRoomsChat = async (container:any) => {

    try {

        const {
            input:{
                params
            }
        } = container;

        // 
        // validate room by uuid
        // 
        await chatRepo.doesRoomExists(params.room_uuid);

        // 
        // validate room by uuid
        // 
        container.output.result = await chatRepo.getAllChats(params.room_uuid);

    } catch (error) {
        
        throw error;

    }

}

export default listRoomsChat;