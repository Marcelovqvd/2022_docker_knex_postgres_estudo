const dabatase = require('../database/index.js')

module.exports = class UsersController {
  async getAll() {
    const data = await database.select().from('users')
    return 'data'
  }
}