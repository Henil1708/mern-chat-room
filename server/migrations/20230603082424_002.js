const create_chat_schema = require('./0.0.2/create_chat_schema');
const create_rooms_table = require('./0.0.2/create_rooms_table');
const create_room_members_table = require('./0.0.2/create_room_members_table');
const create_room_chats_table = require('./0.0.2/create_room_chats_table');

exports.up = async(knex) => {

    try {

        await create_chat_schema.up(knex);
        await create_rooms_table.up(knex);
        await create_room_members_table.up(knex);
        await create_room_chats_table.up(knex);

    } catch (error) {

        throw error;

    }
};

exports.down = async(knex) => {

    try {

        await create_room_chats_table.down(knex);
        await create_room_members_table.down(knex);
        await create_rooms_table.down(knex);
        await create_chat_schema.down(knex);

    } catch (error) {

        throw error;

    }

};