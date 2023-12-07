const Anime = require('./anime.js');
const Comments = require('./comments.js');
const User = require('./user.js');

//TODO: Define relationships
Anime.hasMany(Comments, {
  foreignKey: 'anime_id',
});

Comments.belongsTo(Anime, {
  foreignKey: 'anime_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

// //TODO:favoriting anime work in the future
// User.belongsToMany(Anime, {
//   // through: 'userAnime',
//   foreignKey: 'user_id',
//   // otherKey: 'anime_id',
// });

// Anime.belongsToMany(User, {
//   // through: 'userAnime',
//   foreignKey: 'anime_id',
//   // otherKey: 'user_id',
// });
module.exports = { Anime, Comments, User };
