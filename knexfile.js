module.exports = {
  client: "pg",
  connection: {
      user: "marcelo",
      password: "123",
      database: "contele_db",
  },
  pool: {
      min: 2,
      max: 10,
  },
  migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname }/src/database/migrations`,
  },
  seeds: {
    directory: `${__dirname }/src/database/seeds`
  }
};