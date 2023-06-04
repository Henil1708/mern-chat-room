// Import Libraries

// Import services

//  Import Repo
import socketRepo from "../repo/socket.repo";

/*============================
😎 @author: Henil Mehta
🚩 @uses: create user socket details  
🗓 @created: 03/06/2023
============================*/
const socketService =async (id:string,user_uuid:string) => {

    try {
        
        //
        //  save user data
        //
        await saveSocketUser(id, user_uuid);
        
    } catch (error) {

        throw error;

    }

}

/*============================
😎 @author: Henil Mehta
🚩 @uses: save socket id and user uuid 
🗓 @created: 03/06/2023
============================*/
const saveSocketUser = async (id:string,user_uuid:string) => {

    try {

        //
        //  prepare data model to save socket data
        //
        const socketUserDataModel:any = {
            user_uuid: user_uuid,
            socket_id: id
        }

        //
        //  check if user already exists or not 
        //
        const [user] = await socketRepo.getSocketId(user_uuid);
        
        if(user){

            //
            //  update socket data model
            //
            const updateSocketData:any = {
                socket_id: id
            }

            await socketRepo.updateSocketId(user_uuid,updateSocketData);

        }else{
            
            //
            //  save socket data
            //
            await socketRepo.saveSocketData(socketUserDataModel);

        }

        
    } catch (error) {
        
        throw error;

    }
    
}

export default socketService;