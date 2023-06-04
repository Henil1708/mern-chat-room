'use strict';
const {CHAT} = require('../constant/schemas.json');
const { ROOM_CHATS } = require('../constant/tables.json');

//
//  Basic schema constants
//
const up = async(knex) => {

	await knex.schema.withSchema(CHAT).createTable(ROOM_CHATS, (table) => {

		table.uuid('uuid').primary().defaultTo(knex.raw('gen_random_uuid()'));
		table.text('message').notNullable();
		table.uuid('room_uuid').notNullable();
		table.uuid('created_by').notNullable();
		table.datetime('created_at').defaultTo(knex.fn.now());

	});

};

const down = async(knex) => {

	await knex.schema
		.dropTable(`${CHAT}.${ROOM_CHATS}`);

};

module.exports = {
	up,
	down,
};