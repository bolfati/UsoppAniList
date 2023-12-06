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

router.get('/clannad/video', withAuth, async (req, res) => {
  const videoPath = path.join(__dirname, 'animeVids', 'Clannad.mp4');
  res.sendFile(videoPath);
});

router.get('/clannad/comments', async (req, res) => {
  try {
    const retrievePosts = await Comments.findAll({
      include: [{ model: User }],
    });

    const transformingPost = retrievePosts.map((retrievePosts) =>
      retrievePosts.get({ plain: true }),
    );
    res.render('clannad', {
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
      title: 'Clannad',
      videoUrl: '../../src/animeVids/Clannad.mp4',
      description:
        'The story follows the life of Tomoya Okazaki, from adolescence to adulthood. As an average high school student, he meets many people in his last year at school, including five girls, whose individual problems he helps resolve, and his life is further detailed after graduating from high school.',
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
