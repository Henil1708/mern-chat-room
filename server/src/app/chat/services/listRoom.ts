// import services

// Import Repo
import { StatusCodes } from "http-status-codes";
import chatRepo from "../repo/chat.repo";

// Import Libraries

const listRooms = async (container:any) => {

    try {

        const {
            input:{
                params
            }
        } = container;

        // 
        // validate room by uuid
        // 
        container.output.result = await chatRepo.getAllRooms();

    } catch (error) {
        
        throw error;

    }

}

export default listRooms;