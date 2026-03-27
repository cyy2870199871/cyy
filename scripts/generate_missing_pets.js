const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

// Improved mapping with better semantic proxies
const mapping = {
  holy_angel: { base: 'samoyed.png', color: [{ apply: 'lighten', params: [20] }, { apply: 'saturate', params: [50] }] },
  thunder_hamster: { base: 'hamster.png', color: [{ apply: 'hue', params: [40] }, { apply: 'saturate', params: [30] }] },
  ice_rabbit: { base: 'rabbit.png', color: [{ apply: 'hue', params: [-150] }, { apply: 'saturate', params: [20] }] },
  dark_demon: { base: 'dragon.png', color: [{ apply: 'hue', params: [150] }, { apply: 'darken', params: [30] }] },
  light_knight: { base: 'corgi_male.png', color: [{ apply: 'hue', params: [45] }, { apply: 'saturate', params: [40] }] },
  music_cat: { base: 'ragdoll.png', color: [{ apply: 'hue', params: [-30] }, { apply: 'saturate', params: [40] }] },
  dessert_fox: { base: 'fox.png', color: [{ apply: 'hue', params: [-10] }, { apply: 'saturate', params: [40] }] },
  cloud_turtle: { base: 'capybara.png', color: [{ apply: 'hue', params: [180] }, { apply: 'desaturate', params: [20] }] },
  gem_peacock: { base: 'axolotl.png', color: [{ apply: 'hue', params: [140] }, { apply: 'saturate', params: [30] }] },
  ancient_tiger: { base: 'fox.png', color: [{ apply: 'hue', params: [10] }, { apply: 'saturate', params: [60] }] },
  alch_rabbit: { base: 'rabbit_female.png', color: [{ apply: 'hue', params: [100] }, { apply: 'saturate', params: [30] }] },
  paper_dragon: { base: 'dragon.png', color: [{ apply: 'desaturate', params: [90] }, { apply: 'lighten', params: [30] }] },
  lucky_fish: { base: 'axolotl.png', color: [{ apply: 'hue', params: [-50] }, { apply: 'saturate', params: [60] }] },
  forest_spirit: { base: 'forest_spirit_lv1.png', color: [] }
};

async function processPet(petId, config) {
  const basePath = path.join(process.cwd(), 'public', 'pets', config.base);
  if (!fs.existsSync(basePath)) {
    console.warn(`Base not found for ${petId}: ${basePath}`);
    return;
  }
  
  try {
    const origImg = await Jimp.read(basePath);
    if (config.color && config.color.length > 0) {
      origImg.color(config.color);
    }
    
    for (let lv = 1; lv <= 5; lv++) {
      if (petId === 'forest_spirit' && lv === 1) continue;
      
      const targetPath = path.join(process.cwd(), 'public', 'pets', `${petId}_lv${lv}.png`);
      const scale = 0.40 + ((lv - 1) * 0.15); 
      
      const w = origImg.bitmap.width;
      const h = origImg.bitmap.height;
      const newCanvas = new Jimp(w, h, 0x00000000);
      
      const cloned = origImg.clone();
      cloned.scale(scale);
      
      const x = (w - cloned.bitmap.width) / 2;
      const y = (h - cloned.bitmap.height) / 2;
      
      newCanvas.composite(cloned, x, y);
      await newCanvas.writeAsync(targetPath);
      console.log(`Updated ${targetPath}`);
    }
  } catch(e) {
    console.error(`Failed to generate ${petId}`, e);
  }
}

async function main() {
  console.log("Starting improved missing pet image generation...");
  const promises = [];
  for (const [petId, config] of Object.entries(mapping)) {
    promises.push(processPet(petId, config));
  }
  await Promise.all(promises);
  console.log("Done updating all evolutionary pets.");
}

main();
