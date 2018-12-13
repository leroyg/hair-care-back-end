
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {likes: 30, picture_id: 3},
        {likes: 35, picture_id: 1},
        {likes: 0, picture_id: 2}
      ]);
    });
};
