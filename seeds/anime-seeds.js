const { Anime } = require('../models/anime');

const animeData = [
  {
    title: 'Angel Beats',
    videoUrl: '../src/animeVids/AngelBeats.mp4',
    description:
      'The story follows Yuzuru Otonashi, a boy with amnesia who ends up returning to a mysterious high school',
  },
  {
    title: 'Clannad',
    videoUrl: '../src/animeVids/Clannad.mp4',
    description:
      'The story follows the life of Tomoya Okazaki, from adolescence to adulthood. As an average high school student, he meets many people in his last year at school, including five girls, whose individual problems he helps resolve, and his life is further detailed after graduating from high school.',
  },
  {
    title: 'One Piece',
    videoUrl: '../src/animeVids/RickRolld.mp4',
    description: 'NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN',
  },
  {
    title: 'Violet Evergarden',
    videoUrl: '../src/animeVids/VioletEverGarden.mp4',
    description:
      'In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers agency and goes on assignments to create letters that can connect people. After four long years of conflict, The Great War has finally come to an end.',
  },
];

const seedAnime = () => Anime.bulkCreate(animeData);

module.exports = seedAnime;
