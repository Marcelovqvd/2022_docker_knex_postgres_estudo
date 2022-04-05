const knex = require('knex')
const knexfile = require('../../knexfile')

const database = knex(knexfile);

module.exports = class UsersController {
  async getAll() {
    const data = await database.select().from('users')
    console.log(data)
  }
}