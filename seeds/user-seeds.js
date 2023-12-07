const { User } = require('../models/user');

const userData = [
  {
    user_name: 'Sir Jason',
    email: 'Jasonoftheknightsroundtable@hotmail.com',
    password: 'password12345',
  },
  {
    user_name: 'Brother Hoang',
    email: 'brotherhoangoftheknightsroundtable@hotmail.com',
    password: 'password789',
  },
  {
    user_name: 'Sir Bij',
    email: 'sirbijanoftheknightsroundtable@hotmail.com',
    password: 'password345',
  },
  {
    user_name: 'King Arthur',
    email: 'kingarthuroftheknightsroundtable@hotmail.com',
    password: 'password567',
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = seedUsers;
