'use strict';
const {USERS} = require('../constant/schemas.json');
const { USER_SOCKET } = require('../constant/tables.json');
const moment = require('moment-timezone');
//
//  Basic schema constants
//
const up = async(knex) => {

	await knex.schema.withSchema(USERS).createTable(USER_SOCKET, (table) => {

		table.uuid('uuid').primary().defaultTo(knex.raw('gen_random_uuid()'));
		table.uuid('user_uuid').notNullable();
		table.text('socket_id').notNullable();
		table.datetime('created_at').defaultTo(knex.fn.now());
	});

};

const down = async(knex) => {

	await knex.schema
		.dropTable(`${USERS}.${USER_SOCKET}`);

};

module.exports = {
	up,
	down,
};