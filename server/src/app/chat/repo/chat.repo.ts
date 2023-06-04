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

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: list all the room 
    🗓 @created: 03/06/2023
    ============================*/
    async getAllRooms(){
        
        try {
            
            const rooms = await knex(`${config.schema.CHAT}.${config.tables.ROOMS}`)
            .orderBy('created_at', "desc");

            return rooms;

        } catch (error) {
            
            throw error;

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: get chats by room uuid  
    🗓 @created: 03/06/2023
    ============================*/
    async getAllChats(room_uuid:string) {

        try {
            
            const chats = await knex(`${config.schema.CHAT}.${config.tables.ROOM_CHATS} as c`)
            .select([
                'c.uuid',
                'c.room_uuid',
                'c.message',
                'c.created_at',
                'c.created_by'
            ])
            .select(knex.raw("CONCAT_WS(' ',u.first_name,u.last_name) as created_name"))
            .where('c.room_uuid', room_uuid)
            .join(`${config.schema.USERS}.${config.tables.USER} as u`,'c.created_by' ,'u.uuid');

            return chats;

        } catch (error) {
            
            throw error;

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: update room details  
    🗓 @created: 03/06/2023
    ============================*/
    async updateRoomData(uuid:string, details:any) {

        try {
            
            await knex(`${config.schema.CHAT}.${config.tables.ROOMS}`)
            .where('uuid', uuid)
            .update(details);

        } catch (error) {
            
            throw error;

        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: save message 
    🗓 @created: 03/06/2023
    ============================*/
    async saveMessage(details:any) {

        try {
            
            const [messageDetails] = await knex(`${config.schema.CHAT}.${config.tables.ROOM_CHATS}`)
            .insert(details, "*");

            return messageDetails;

        } catch (error) {
            
            throw error;

        }

    }

}

export default new UserRepo();