const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animaiton',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

const values = Object.entries(coolestTvShow);
for (let i = 0; i < values.length; i += 1) {
  console.log(`* ${values[i][0]}: ${values[i][1]}`);
}
