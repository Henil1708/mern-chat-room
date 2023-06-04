// import services
import config from '../../../config/constant';

// Import Repo
import socketlib from "../../../library/socketlib";
import socketRepo from "../../socket/repo/socket.repo";
import userRepo from '../../user/repo/user.repo';
import chatRepo from "../repo/chat.repo";

// Import Libraries
import moment from "moment-timezone";

const addMessage = async (container:any) => {

    try {

        const {
            input:{
                body,
                logged_in_user
            }
        } = container;

        // 
        // get user by socket id
        // 
        const [userDetails] = await socketRepo.getUserBySocketId(body.socket_id);

        container.input.logged_in_user = userDetails;

        // 
        // validate room by uuid 
        // 
        container.derived.roomDetails = await chatRepo.doesRoomExists(body.room_uuid);

        // 
        // save room details 
        // 
        await saveMessage(container);
        
        socketlib.sendEvent(body.room_uuid ,config.socket_events.ADD_MESSAGE, container.derived.messageDetails);

    } catch (error) {
        
        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: save message  
🗓 @created: 03/06/2023
============================*/
const saveMessage = async (container:any) => {

    try {
        
        const {
            input:{
                body,
                logged_in_user
            }
        } = container;

        const messageDetails = {
            message: body.message,
            room_uuid: body.room_uuid,
            created_by: logged_in_user.uuid,
            created_at: moment.utc().format('YYYY-MM-DD HH:mm:ss')
        }

        container.derived.messageDetails = await chatRepo.saveMessage(messageDetails);

        container.derived.messageDetails = {
            ...container.derived.messageDetails,
            created_name: `${logged_in_user.first_name} ${logged_in_user.last_name}`
        }

    } catch (error) {
        
        throw error;

    }

}

export default addMessage;