// import services

// Import Repo
import chatRepo from "../repo/chat.repo";

// Import Libraries
import moment from "moment-timezone";

const createRoom = async (container:any) => {

    try {

        // 
        // save room details 
        // 
        await saveRoom(container);

        // 
        // add logged in user to members table
        // 
        await saveMember(container);

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

/*============================
😎 @author: Henil Mehta
🚩 @uses: save member details  
🗓 @created: 03/06/2023
============================*/
const saveMember = async (container:any) => {

    try {
        
        const {
            input:{
                logged_in_user
            },
            derived:{
                roomDetails
            }
        } = container;

        const memberDetails = {
            user_uuid: logged_in_user.uuid,
            room_uuid: roomDetails.uuid,
            created_by: logged_in_user.uuid,
            created_at: moment.utc().format('YYYY-MM-DD HH:mm:ss')
        }

        container.derived.memberDetails = await chatRepo.saveRoomMemberDetails(memberDetails);

    } catch (error) {
        
        throw error;

    }

}

export default createRoom;