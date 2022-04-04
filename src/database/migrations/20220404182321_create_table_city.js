/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => knex.schema.createTable("city", table => {
  table.increments()
  table.string("name")
  table.string("state")
  table.string("country")
  
})

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = knex => {
return knex.schema.dropTable("city")
};
