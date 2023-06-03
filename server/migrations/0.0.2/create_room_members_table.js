'use strict';
const {CHAT} = require('../constant/schemas.json');
const { ROOM_MEMBERS } = require('../constant/tables.json');

//
//  Basic schema constants
//
const up = async(knex) => {

	await knex.schema.withSchema(CHAT).createTable(ROOM_MEMBERS, (table) => {

		table.uuid('uuid').primary().defaultTo(knex.raw('gen_random_uuid()'));
		table.uuid('user_uuid').notNullable();
		table.uuid('room_uuid').notNullable();
        table.enu('status', ['ACTIVE','DEACTIVE']).defaultTo('ACTIVE')
		table.uuid('created_by').notNullable();
		table.datetime('created_at').defaultTo(knex.fn.now());
		table.uuid('updated_by').nullable();
		table.datetime('updated_at').defaultTo(knex.fn.now());

	});

};

const down = async(knex) => {

	await knex.schema
		.dropTable(`${CHAT}.${ROOM_MEMBERS}`);

};

module.exports = {
	up,
	down,
};