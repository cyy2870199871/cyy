const fs = require('fs');
const path = require('path');

const ALL_PET_TYPES = [
  { id: 'fire_dragon' },
  { id: 'water_jellyfish' },
  { id: 'cyber_bee' },
  { id: 'forest_spirit' },
  { id: 'holy_angel' },
  { id: 'thunder_hamster' },
  { id: 'ice_rabbit' },
  { id: 'dark_demon' },
  { id: 'light_knight' },
  { id: 'music_cat' },
  { id: 'astro_corgi' },
  { id: 'dessert_fox' },
  { id: 'cloud_turtle' },
  { id: 'gem_peacock' },
  { id: 'ancient_tiger' },
  { id: 'alch_rabbit' },
  { id: 'paper_dragon' },
  { id: 'lucky_fish' },
  { id: 'cyber_dragon' },
  { id: 'astral_axolotl' }
];

const petsDir = path.join(__dirname, 'public/pets');
const files = fs.readdirSync(petsDir);

const usedPrefixes = ALL_PET_TYPES.map(p => p.id);
const unusedFiles = [];

files.forEach(file => {
  if (!file.endsWith('.png')) return;
  
  // Check if it follows [id]_lv[1-5].png
  const match = file.match(/^(.+)_lv[1-5]\.png$/);
  if (match) {
    const prefix = match[1];
    if (!usedPrefixes.includes(prefix)) {
      unusedFiles.push(file);
    }
  } else {
    // Single image like cat.png
    const name = file.replace('.png', '');
    if (!usedPrefixes.includes(name)) {
      unusedFiles.push(file);
    }
  }
});

console.log('Deleting Unused Files in public/pets:');
unusedFiles.forEach(f => {
  const filePath = path.join(petsDir, f);
  console.log(`Deleting: ${f}`);
  fs.unlinkSync(filePath);
});
console.log('Cleanup complete.');
