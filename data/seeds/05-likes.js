
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {likes: 30, picture_id: 3},
        {likes: 35, picture_id: 1},
        {likes: 0, picture_id: 2},
        {likes: 0, picture_id: 4},
        {likes: 0, picture_id: 5},
        {likes: 0, picture_id: 6},
        {likes: 0, picture_id: 7},
        {likes: 0, picture_id: 8},
        {likes: 0, picture_id: 9},
        {likes: 0, picture_id: 10},
        {likes: 0, picture_id: 11},
        {likes: 0, picture_id: 12},
        {likes: 0, picture_id: 13},
        {likes: 0, picture_id: 14},
        {likes: 0, picture_id: 15},
        {likes: 0, picture_id: 16},
        {likes: 0, picture_id: 17},
        {likes: 0, picture_id: 18},
        {likes: 0, picture_id: 19},
        {likes: 0, picture_id: 20},
        {likes: 0, picture_id: 21},
        {likes: 0, picture_id: 22},
        {likes: 0, picture_id: 23},
        {likes: 0, picture_id: 24},
        {likes: 0, picture_id: 25},
        {likes: 0, picture_id: 26},
        {likes: 0, picture_id: 27},
        {likes: 0, picture_id: 28},
        {likes: 0, picture_id: 29},
        {likes: 0, picture_id: 30},

      ]);
    });
};
