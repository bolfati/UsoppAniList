const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'I love this anime!!',
    user_id: 1,
    anime_id: 1,
  },
  {
    comment_text: 'Mid Anime',
    user_id: 2,
    anime_id: 2,
  },
  {
    comment_text: 'This made me cry',
    user_id: 3,
    anime_id: 3,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
