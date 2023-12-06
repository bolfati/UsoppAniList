const Anime = require('./anime');
const Comments = require('./comments');
const User = require('./user');

//TODO: Define relationships
Anime.hasMany(Comments, {
  foreignKey: 'animeId',
});

Comments.belongsTo(Anime, {
  foreignKey: 'animeId',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

//TODO:favoriting anime work in the future
User.belongsToMany(Anime, {
  through: 'userAnime',
  foreignKey: 'user_id',
  otherKey: 'animeId',
});

Anime.belongsToMany(User, {
  through: 'userAnime',
  foreignKey: 'animeId',
  otherKey: 'user_id',
});
module.exports = { Anime, Comments, User };
