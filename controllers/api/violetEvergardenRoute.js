const router = require('express').Router();
const express = require('express');
const path = require('path');
const fs = require('fs');
const withAuth = require('../../utils/auth');

router.use(
  '/animeVids',
  express.static(path.join(__dirname, '..', '..', 'src', 'animeVids')),
);

router.get('/violetevergarden', withAuth, async (req, res) => {
  const videoPath = path.join(__dirname, 'animeVids', 'VioletEverGarden.mp4');
  res.sendFile(videoPath);
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

module.exports = router;
