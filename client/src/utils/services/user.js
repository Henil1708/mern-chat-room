import axiosInstance from "../config/axios";

class UserServices {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: get logged in user details 
    🗓 @created: 03/06/2023
    ============================*/
    async getMe(){

        try {

            const configs = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }

            const {data} = await axiosInstance.get('/user/me', configs)

            return data.data;

        } catch (error) {
            
            throw error;

        }

    }

}

export default new UserServices();