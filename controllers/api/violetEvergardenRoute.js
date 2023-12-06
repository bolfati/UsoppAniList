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

router.get('/violetevergarden/video', withAuth, async (req, res) => {
  const videoPath = path.join(__dirname, 'animeVids', 'VioletEverGarden.mp4');
  res.sendFile(videoPath);
});

router.get('/violetevergarden/comments', async (req, res) => {
  try {
    const retrievePosts = await Comments.findAll({
      include: [{ model: User }],
    });

    const transformingPost = retrievePosts.map((retrievePosts) =>
      retrievePosts.get({ plain: true }),
    );
    res.render('violetevergarden', {
      transformingPost,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post('/addAnime', withAuth, async (req, res) => {
  try {
    const savingAnime = {
      title: 'Violet Evergarden',
      videoUrl: '../../src/animeVids/VioletEverGarden.mp4',
      description:
        'In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers agency and goes on assignments to create letters that can connect people. After four long years of conflict, The Great War has finally come to an end.',
    };

    const savedAnime = await Anime.create(savingAnime);
    res.status(201).json(savedAnime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding anime to database' });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const message = await Comments.create({
      ...req.body,
      comment_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.json({ message });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
