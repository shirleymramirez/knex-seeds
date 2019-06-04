
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        { location: 'Chandler', time: '2019-06-03 21:54:17.29567-07', user_id: 1 },
        { location: 'Tempe', time: '2019-06-03 21:54:17.29567-07', user_id: 2 },
        { location: 'Phoenix', time: '2019-06-03 21:54:17.29567-07', user_id: 3 }
      ]);
    });
};
