// Import Config
import knex from '../../../config/database';
import config from '../../../config/constant';
import i18n from '../../../config/i18n';

// Import Libraries
import { StatusCodes } from 'http-status-codes';

// import interface


class UserRepo {

    /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    👑 @creator : Henil mehta
    🚩 @uses : to save user data
    🗓 @created : 23/8/2022
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
    async saveUserData(data: any) {
        try {

            await knex(`${config.schema.USERS}.${config.tables.USER}`)
                .insert(data);

        } catch (error) {

            throw error;

        }
    }


    /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    👑 @creator : Henil mehta
    🚩 @uses : to get user by email
    🗓 @created : 23/8/2022
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
    async getUserByEmail(email: string) {

        try {

            let [user] = await knex(`${config.schema.USERS}.${config.tables.USER}`)
                .where('email', email);

            return user;

        } catch (error) {
            
            throw error;

        }

    }


    /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    👑 @creator : Henil mehta
    🚩 @uses : update user by firebase Id
    🗓 @created : 24/8/2022
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
    async updateUserByUuid(uuid: string, updateUserDataModel: any) {

        try {

            await knex(`${config.schema.USERS}.${config.tables.USER}`)
                .update(updateUserDataModel)
                .where('uuid', uuid);

        }
        catch (error) {

            throw error;

        }
    }

    /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    👑 @creator : Henil mehta
    🚩 @uses : to get user by uuid
    🗓 @created : 29/8/2022
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
    async getUserByUuid(uuid: any) {

        try {

            let [user] = await knex(`${config.schema.USERS}.${config.tables.USER}`)
                .where('uuid', uuid);

            //
            //  throw error if user does not exists
            //
            if (!user) {

                const err: any = new Error(i18n.__('no_user_exist'))
                err.statusCode = StatusCodes.BAD_REQUEST;
                throw err;

            }

            return user;

        } catch (error) {

            throw error;

        }

    }

}

export default new UserRepo();