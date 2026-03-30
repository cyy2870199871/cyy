const fs = require('fs');
const path = require('path');

const pets = [
  'fire_dragon', 'water_jellyfish', 'cyber_bee', 'forest_spirit', 'holy_angel',
  'thunder_hamster', 'ice_rabbit', 'dark_demon', 'light_knight', 'music_cat',
  'astro_corgi', 'dessert_fox', 'cloud_turtle', 'gem_peacock', 'ancient_tiger',
  'alch_rabbit', 'paper_dragon', 'lucky_fish', 'cyber_dragon', 'astral_axolotl'
];

const publicPetsDir = path.join(__dirname, 'public', 'pets');
const missing = [];

for (const pet of pets) {
  for (let lv = 1; lv <= 5; lv++) {
    const fileName = `${pet}_lv${lv}.png`;
    const filePath = path.join(publicPetsDir, fileName);
    if (!fs.existsSync(filePath)) {
      missing.push({ pet, lv });
    }
  }
}

console.log(JSON.stringify(missing, null, 2));
