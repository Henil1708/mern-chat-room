// import services
import config from '../../../config/constant';

// Import Repo
import socketlib from "../../../library/socketlib";
import socketRepo from "../../socket/repo/socket.repo";
import chatRepo from "../repo/chat.repo";

// Import Libraries
import moment from "moment-timezone";

const createRoom = async (container:any) => {

    try {

        const {
            input:{
                logged_in_user
            }
        } = container;

        // 
        // save room details 
        // 
        await saveRoom(container);

        socketlib.broadcastEventToAll(config.socket_events.ADD_ROOM, container.derived.roomDetails)

        container.output.result = container.derived.roomDetails;

    } catch (error) {
        
        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: save room details 
🗓 @created: 01/03/2023
============================*/
const saveRoom = async (container:any) => {
    
    try {

        const {
            input:{
                body,
                logged_in_user
            }
        } = container;

        const roomDetails = {
            title: body.title,
            created_by: logged_in_user.uuid,
            created_at: moment.utc().format('YYYY-MM-DD HH:mm:ss')
        }

        container.derived.roomDetails = await chatRepo.saveRoomData(roomDetails);

    } catch (error) {

        throw error;

    }

}

export default createRoom;