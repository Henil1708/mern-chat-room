const create_user_schema = require('./0.0.1/create_user_schema');
const create_user_table = require('./0.0.1/create_user_table');
const create_user_socket_table = require('./0.0.1/create_user_socket_table');

exports.up = async(knex) => {

    try {

        await create_user_schema.up(knex);

        //
        // Create the User Table
        //
        await create_user_table.up(knex);

        await create_user_socket_table.up(knex);


    } catch (error) {

        throw error;

    }
};

exports.down = async(knex) => {

    try {

        //
        // Down the User table
        //
        await create_user_socket_table.down(knex);

        await create_user_table.down(knex);

        await create_user_schema.down(knex);

    } catch (error) {

        throw error;

    }

};