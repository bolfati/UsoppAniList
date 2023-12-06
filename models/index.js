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

User.belongsToMany(Anime, {
  through: 'userAnime',
  foreignKey: 'userId',
  otherKey: 'animeId',
});

Anime.belongsToMany(User, {
  through: 'userAnime',
  foreignKey: 'animeId',
  otherKey: 'userId',
});
module.exports = { Anime, Comments, User };
