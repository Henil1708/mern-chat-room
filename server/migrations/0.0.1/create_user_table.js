'use strict';
const {USERS} = require('../constant/schemas.json');
const { USER } = require('../constant/tables.json');
//
//  Basic schema constants
//
const up = async(knex) => {

	await knex.schema.withSchema(USERS).createTable(USER, (table) => {

		table.uuid('uuid').primary().defaultTo(knex.raw('gen_random_uuid()'));
		table.string('first_name',254).nullable();
		table.string('last_name',254).nullable();
		table.string('email',100).nullable();
		table.string('password',254).nullable();
		table.datetime('last_login').nullable();
		table.enu('status',['ACTIVE','DEACTIVE']).nullable();
		table.datetime('created_at').defaultTo(knex.fn.now());
		table.datetime('updated_at').nullable();

	});

};

const down = async(knex) => {

	await knex.schema
		.dropTable(`${USERS}.${USER}`);

};

module.exports = {
	up,
	down,
};