/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("users", table => {
    table.increments()
    table.string("name")
    table.string("email")
    table.string("password")
    table.timestamps(true, true);
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => {
  return knex.schema.dropTable("users")
};
