const sequelize = require('../config/connection');
const seedAnime = require('./anime-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comments-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('DATABASE SYNCED');

  await seedUsers();
  console.log('USERS SEEDED');

  await seedAnime();
  console.log('ANIME SEEDED');

  await seedComments();
  console.log('COMMENTS SEEDED');

  process.exit(0);
};

seedAll();
