/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = async function(knex) {
  await knex('users').del();
   return await knex('users').insert([
     { name: 'Marcelo', email: 'outro@email.com', password: 'password' },
     { name: 'didi', email: 'didi@email.com', password: '123' },
     { name: 'dedé', email: 'didi@email.com', password: '123456' }
   ]);
}