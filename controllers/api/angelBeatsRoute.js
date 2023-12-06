const router = require('express').Router();
const express = require('express');
const path = require('path');
const fs = require('fs');
const withAuth = require('../../utils/auth');

router.use(
  '/animeVids',
  express.static(path.join(__dirname, '..', '..', 'src', 'animeVids')),
);

router.get('/angelbeats', withAuth, async (req, res) => {
  const videoPath = path.join(__dirname, 'animeVids', 'AngelBeats.mp4');
  res.sendFile(videoPath);
});

router.post('/addAnime', withAuth, async (req, res) => {
  try {
    const savingAnime = {
      title: 'Angel Beats',
      videoUrl: '../../src/animeVids/AngelBeats.mp4',
      description:
        'The story follows Yuzuru Otonashi, a boy with amnesia who ends up returning to a mysterious high school',
    };

    const savedAnime = await Anime.create(savingAnime);
    res.status(201).json(savedAnime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding anime to database' });
  }
});

router.post('/angelbeats/:id', async (req, res) => {
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
