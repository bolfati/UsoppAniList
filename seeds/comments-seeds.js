const { Comments } = require('../models');

const commentData = [
  {
    content: 'I love this anime!!',
    user_id: 1,
    anime_id: 1,
  },
  {
    content: 'Mid Anime',
    user_id: 2,
    anime_id: 2,
  },
  {
    content: 'This made me cry',
    user_id: 3,
    anime_id: 3,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
