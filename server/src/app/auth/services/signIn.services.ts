// import services

// Import Repo
import userRepo from "../../user/repo/user.repo";

// Import Libraries
import moment from "moment";

/*============================
😎 @author: Henil Mehta
🚩 @uses: user sign in service 
🗓 @created: 03/06/2023
============================*/
const signInService =async (container:any) => {

    try {
        const {
            input:{
                body
            } 
        }= container;
        
        return container;
        
    } catch (error) {
        
        throw error;

    }
    
}

export default signInService;