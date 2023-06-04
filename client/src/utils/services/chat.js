import axiosInstance from "../config/axios";

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
    async updateRoom(uuid, {title}){

        try {
            
            const configs = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }

            const {data} = await axiosInstance.put(`/room/${uuid}`, {title} ,configs)

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

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: list rooms  
    🗓 @created: 03/06/2023
    ============================*/
    async listRooms() {

        try {

            const configs = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }

            const {data} = await axiosInstance.get('/room', configs);

            return data.data;

        } catch (error) {
            
            throw error;

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: get room chats list 
    🗓 @created: 03/04/2023
    ============================*/
    async getRoomChats(uuid) {

        try {

            const configs = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }

            const {data} = await axiosInstance.get(`/room/${uuid}/chats`, configs);

            return data.data;

        } catch (error) {
            
            throw error;

        }

    }

}

export default new ChatServices();