// Import Config
import knex from '../../../config/database';
import config from '../../../config/constant';

// Import Libraries


class SocketRepo {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: save user socket data
    🗓 @created: 03/06/2023
    ============================*/
    async saveSocketData(data: any) {

        try {

            await knex(`${config.schema.USERS}.${config.tables.USER_SOCKET}`)
                .insert(data);

        } catch (error) {

            throw error;

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: update socket by uuid
    🗓 @created: 03/06/2023
    ============================*/
    async updateSocketId(userUuid: string, updateSocketData:any) {

        try {

            await knex(`${config.schema.USERS}.${config.tables.USER_SOCKET}`)
                    .update(updateSocketData)
                    .where('user_uuid',userUuid)

        } catch (error) {

            throw error;

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: get socket id by user uuid
    🗓 @created: 03/06/2023
    ============================*/
    async getSocketId(userUuid:[]|string) {

        try {
            
            const socket = knex(`${config.schema.USERS}.${config.tables.USER_SOCKET}`)
                .select(['socket_id','user_uuid'])

                if(Array.isArray(userUuid)){

                    socket.whereIn('user_uuid', userUuid)

                }else{

                    socket.where('user_uuid', userUuid)

                }

            return await socket;

        } catch (error) {

            throw error;

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: delete user socket
    🗓 @created: 03/06/2023
    ============================*/
    async deleteSocketUser(uuid: string) {
        try {

            await knex(`${config.schema.USERS}.${config.tables.USER_SOCKET}`)
                .where('user_uuid', uuid)
                .del();

        } catch (error) {

            throw error;

        }
    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: get user by socket id 
    🗓 @created: 03/06/2023
    ============================*/
    async getUserBySocketId(socketId:string){

        try {
            
            const socket = knex(`${config.schema.USERS}.${config.tables.USER_SOCKET} as us`)
                .select(['us.socket_id','us.user_uuid', 'u.uuid', 'u.first_name', 'u.last_name'])
                .where('socket_id', socketId)
                .join(`${config.schema.USERS}.${config.tables.USER} as u`, 'us.user_uuid' ,'u.uuid');

            return await socket;

        } catch (error) {
            
            throw error;

        }

    }

}

export default new SocketRepo();