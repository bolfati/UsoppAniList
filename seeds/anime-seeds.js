const { Anime } = require('../models');

const animeData = [
  {
    id: 1,
    title: 'Angel Beats',
    videoUrl: '../src/animeVids/AngelBeats.mp4',
    description:
      'The story follows Yuzuru Otonashi, a boy with amnesia who ends up returning to a mysterious high school',
    tags: 'sad',
  },
  {
    id: 2,
    title: 'Clannad',
    videoUrl: '../src/animeVids/Clannad.mp4',
    description:
      'The story follows the life of Tomoya Okazaki, from adolescence to adulthood. As an average high school student, he meets many people in his last year at school, including five girls, whose individual problems he helps resolve, and his life is further detailed after graduating from high school.',
    tags: 'Insane',
  },
  {
    id: 3,
    title: 'One Piece',
    videoUrl: '../src/animeVids/RickRolld.mp4',
    description: 'NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN',
    tags: 'PLAYED',
  },
  {
    id: 4,
    title: 'Violet Evergarden',
    videoUrl: '../src/animeVids/VioletEverGarden.mp4',
    description:
      'In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers agency and goes on assignments to create letters that can connect people. After four long years of conflict, The Great War has finally come to an end.',
    tags: 'Tear jerker',
  },
];

const seedAnime = () => Anime.bulkCreate(animeData);

module.exports = seedAnime;
