//Bij's Photo and when clicked rick roll'd video populates.
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const Anime = require('../../models/anime');
// const Video = require('../../src/animeVids/RickRolld.mp4');
const range = require('range-parser');
const withAuth = require('../../utils/auth');

router.get('/videos/:id', async (req, res) => {
  const video = await Anime.findById(req.params.id);

  if (!video) {
    return res.sendStatus(404);
  }

  const videoPath = video.url;
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const rangeHeader = req.headers.range;

  if (rangeHeader) {
    const rangeRequest = range(fileSize, rangeHeader);

    res.status(206);
    res.set({
        'Content-Range' `bytes ${rangeRequest[0].start}-${rangeRequest[0].end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length' : rangeRequest[0].end - rangeRequest[0].start + 1,
        'Content-Type': 'video/mp4',
    });

    fs.createReadStream(videoPath, {
        start: rangeRequest[0].start,
        end: rangeRequest[0].end,
    }).pipe(res);
  } else {
    res.set({
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
    });
    fs.createReadStream(videoPath).pipe(res);
  }
});
// router.post('/onepiece', upload.single('file'), async (req, res) => {
//   const { title, description, tags } = req.body;

//   const video = new Video({
//     title,
//     description,
//     tags,
//     url: req.file.path,
//     thumbnailUrl: 'placeholder',
//     duration: 0,
//   });

//   await video.save();

//   res.json(video);
// });
module.exports = router;
