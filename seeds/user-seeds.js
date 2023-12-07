const { User } = require('../models');

const userData = [
  {
    id: 1,
    user_name: 'Sir Jason',
    email: 'Jasonoftheknightsroundtable@hotmail.com',
    password: 'password12345',
  },
  {
    id: 2,
    user_name: 'Brother Hoang',
    email: 'brotherhoangoftheknightsroundtable@hotmail.com',
    password: 'password789',
  },
  {
    id: 3,
    user_name: 'Sir Bij',
    email: 'sirbijanoftheknightsroundtable@hotmail.com',
    password: 'password345',
  },
  {
    id: 4,
    user_name: 'King Arthur',
    email: 'kingarthuroftheknightsroundtable@hotmail.com',
    password: 'password567',
  },
];

const seedUsers = () => {
  User.bulkCreate(userData, {
    individualHooks: true,
  });
};

module.exports = seedUsers;
