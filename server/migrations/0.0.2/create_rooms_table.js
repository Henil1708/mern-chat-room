'use strict';
const {CHAT} = require('../constant/schemas.json');
const { ROOMS } = require('../constant/tables.json');

//
//  Basic schema constants
//
const up = async(knex) => {

	await knex.schema.withSchema(CHAT).createTable(ROOMS, (table) => {

		table.uuid('uuid').primary().defaultTo(knex.raw('gen_random_uuid()'));
		table.text('title').notNullable();
        table.enu('status', ['ACTIVE','DEACTIVE']).defaultTo('ACTIVE')
		table.uuid('created_by').notNullable();
		table.datetime('created_at').defaultTo(knex.fn.now());

	});

};

const down = async(knex) => {

	await knex.schema
		.dropTable(`${CHAT}.${ROOMS}`);

};

module.exports = {
	up,
	down,
};