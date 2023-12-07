const router = require('express').Router();
const express = require('express');
const path = require('path');
const fs = require('fs');
const withAuth = require('../../utils/auth');
const { Comments, Anime, User } = require('../../models');

router.use(
  '/animeVids',
  express.static(path.join(__dirname, '..', '..', 'src', 'animeVids')),
);

router.get('/angelbeats/video', withAuth, async (req, res) => {
  try {
    const videoPath = '/animeVids/AngelBeats.mp4';

    res.render('angelbeats', { videoPath });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/angelbeats/comments', async (req, res) => {
//   try {
//     const retrievePosts = await Comments.findAll({
//       include: [{ model: User }],
//     });

//     const transformingPost = retrievePosts.map((retrievePosts) =>
//       retrievePosts.get({ plain: true }),
//     );
//     res.render('angelbeats', {
//       transformingPost,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

router.post('/angelbeats/:id', async (req, res) => {
  try {
    const message = await Comment.create({
      ...req.body,
      anime_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.json({ message });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
