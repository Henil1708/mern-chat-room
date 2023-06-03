// Import Config
import config from '../../../config/constant';

// Import Libraries
import moment from "moment";
import path from 'path';
import fs from 'fs';

// Import services

//  Import Repo
import userRepo from "../repo/user.repo";

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
👑 @creator : Henil mehta
🚩 @uses : get update user data from firebase and update user
🗓 @created : 26/8/2022
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const getUserService = async (container: any) => {

    try {
        const {
            input: {
                logged_in_user
            }
        } = container;

        delete logged_in_user["password"];

        container.output.result = logged_in_user;
        

        return container;

    } catch (error) {

        throw error;

    }

}


export default getUserService;