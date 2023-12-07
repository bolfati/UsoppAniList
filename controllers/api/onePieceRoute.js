<<<<<<< HEAD
//Bij's Photo and when clicked rick roll'd video populates.
=======
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

router.get('/onepiece/video', withAuth, async (req, res) => {
  const videoPath = path.join(__dirname, 'animeVids', 'RickRolld.mp4');
  res.sendFile(videoPath);
});

router.get('/onepiece/comments', async (req, res) => {
  try {
    const retrievePosts = await Comments.findAll({
      include: [{ model: User }],
    });

    const transformingPost = retrievePosts.map((retrievePosts) =>
      retrievePosts.get({ plain: true }),
    );
    res.render('onepiece', {
      transformingPost,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post('/onepiece/:id', async (req, res) => {
  try {
    const message = await Comments.create({
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
>>>>>>> be2c4b5803c07c33e7471bebf84fd253327d70ed
