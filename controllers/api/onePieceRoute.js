//Bij's Photo and when clicked rick roll'd video populates.
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const Video = require('../../src/animeVids/RickRolld.mp4');
const range = require('range-parser');
const withAuth = require('../../utils/auth');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/onepiece', upload.single('file'), async (req, res) => {
  const { title, description, tags } = req.body;

  const video = new Video({
    title,
    description,
    tags,
    url: req.file.path,
    thumbnailUrl: 'placeholder',
    duration: 0,
  });

  await video.save();

  res.json(video);
});
module.exports = router;
