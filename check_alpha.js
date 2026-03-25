const Jimp = require('jimp');

(async () => {
  try {
    const img = await Jimp.read('f:/daka2/public/pets/corgi.png');
    let transparentCount = 0;
    const totalPixels = img.bitmap.width * img.bitmap.height;
    
    for (let i = 0; i < img.bitmap.data.length; i += 4) {
      if (img.bitmap.data[i + 3] === 0) transparentCount++;
    }
    
    console.log(`corgi.png has ${transparentCount} transparent pixels out of ${totalPixels} (${Math.round(transparentCount/totalPixels*100)}%)`);
    
  } catch (err) {
    console.error(err);
  }
})();
