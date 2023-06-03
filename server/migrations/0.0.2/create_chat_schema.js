'use strict';
const create_schema = require('../helpers/create_schema');
const { CHAT } = require('../constant/schemas.json');
//
//  Basic schema constants
//
const up = async(knex) => {

	//
	// create the schema
	//
	await create_schema(knex, CHAT, true);

};

const down = async(knex) => {

	await knex.schema
		.dropSchema(CHAT);

};

module.exports = {
	up,
	down,
};