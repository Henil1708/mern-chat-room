import axiosInstance from "../config/axios";
import { errorResponseHelper } from "../helpers/response";


class ChatServices {
    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: create room  
    🗓 @created: 03/06/2023
    ============================*/
    async createRoom({title}){

        try {
            
            const configs = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }

            const {data} = await axiosInstance.post('/room', {title} ,configs)

            return data.data;

        } catch (error) {
            
            throw error;

        }

    }
    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: create room  
    🗓 @created: 03/06/2023
    ============================*/
    async getRoom(uuid){

        try {
            
            const configs = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }

            const {data} = await axiosInstance.get(`/room/${uuid}`,configs)

            return data.data;

        } catch (error) {
            
            throw error;

        }

    }
}

export default new ChatServices();