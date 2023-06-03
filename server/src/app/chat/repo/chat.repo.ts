// Import Config
import knex from '../../../config/database';
import config from '../../../config/constant';
import i18n from '../../../config/i18n';

// Import Libraries
import { StatusCodes } from 'http-status-codes';

// import interface


class UserRepo {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: save room details  
    🗓 @created: 03/06/2023
    ============================*/
    async saveRoomData(data: any) {
        try {

            const [roomDetails] = await knex(`${config.schema.CHAT}.${config.tables.ROOMS}`)
                .insert(data, "*");

                return roomDetails;

        } catch (error) {

            throw error;

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: save room member details  
    🗓 @created: 03/06/2023
    ============================*/
    async saveRoomMemberDetails(data: any) {
        try {

            const [roomMemberDetails] = await knex(`${config.schema.CHAT}.${config.tables.ROOM_MEMBERS}`)
                .insert(data, "*");

            return roomMemberDetails;

        } catch (error) {

            throw error;

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: does room exists  
    🗓 @created: 03/06/2023
    ============================*/
    async doesRoomExists(uuid:string) {

        try {

            const [roomDetails] =await knex(`${config.schema.CHAT}.${config.tables.ROOMS}`)
            .where('uuid', uuid);

            if(!roomDetails){
                const err: any = new Error(i18n.__('room.invalid'))
                err.statusCode = StatusCodes.BAD_REQUEST;
                throw err;
            }

            return roomDetails;

        } catch (error) {
            
            throw error;

        }

    }


}

export default new UserRepo();