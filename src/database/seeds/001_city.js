/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('city').del()
  await knex('city').insert([
    {name: 'São Paulo', state: 'SP', country: 'Brasil'},
    {name: 'São José do Rio Preto', state: 'SP', country: 'Brasil'},
    {name: 'Lins', state: 'SP', country: 'Brasil'},
    {name: 'Marília', state: 'SP', country: 'Brasil'},
    {name: 'Londrina', state: 'PR', country: 'Brasil'}
  ]);
};
