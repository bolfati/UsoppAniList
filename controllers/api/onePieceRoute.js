const router = require('express').Router();
const express = require('express');
const path = require('path');
const fs = require('fs');
const withAuth = require('../../utils/auth');

router.use(
  '/animeVids',
  express.static(path.join(__dirname, '..', '..', 'src', 'animeVids')),
);

router.get('/onepiece', withAuth, async (req, res) => {
  const videoPath = path.join(__dirname, 'animeVids', 'RickRolld.mp4');
  res.sendFile(videoPath);
});

router.get('/onepiece', async (req, res) => {
  try{
  const retrievePosts = await Comments.findAll({
    include: [{ model: User }]
  });

  const transformingPost = retrievePosts.map((retrievePosts) => retrievePosts.get({ plain: true }));
  res.render('onepiece', {
    retrievePosts,
  });
}
catch(err) {
  console.log(err)
  return res.status(500).json(err);
}

});

router.post('/addAnime', withAuth, async (req, res) => {
  try {
    const savingAnime = {
      title: 'One Piece',
      videoUrl: '../../src/animeVids/RickRolld.mp4',
      description: 'NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN',
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
      ..req.body,
      post_id: req.params.id,
      user_id: req.session.user_id
    });
    res.json({message})
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
