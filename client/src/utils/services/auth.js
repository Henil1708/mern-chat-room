import axiosInstance from "../config/axios";


class AuthService {
    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: sign in service 
    🗓 @created: 03/06/2023
    ============================*/
    async signIn(body){

        try {
            
            const response = await axiosInstance.post('/auth/signin', body)
            
            return response.data.data;

        } catch (error) {

            throw error;

        }

    }
    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: sign up service 
    🗓 @created: 03/06/2023
    ============================*/
    async signUp({email,password, confirmPassword, firstName, lastName}){

        try {

            const response = await axiosInstance.post('/auth/signup', {
                email,
                password,
                first_name: firstName,
                last_name: lastName,
                confirm_password: confirmPassword
            })
            
            return response.data.data;

        } catch (error) {

            throw error;

        }

    }
}

export default new AuthService();