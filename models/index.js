const Anime = require('./anime.js');
const Comment = require('./comment.js');
const User = require('./user.js');

//TODO: Define relationships
Anime.hasMany(Comment, {
  foreignKey: 'anime_id',
});

Comment.belongsTo(Anime, {
  foreignKey: 'anime_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
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
module.exports = { Anime, Comment, User };
