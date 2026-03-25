const Jimp = require('jimp');

Jimp.read('f:/daka2/public/pets/calico.png')
  .then(img => {
    return img
      .greyscale()
      .color([{ apply: 'darken', params: [10] }])
      .writeAsync('f:/daka2/public/pets/greycat.png');
  })
  .then(() => {
    console.log('greycat.png generated successfully via grayscale modification');
  })
  .catch(err => {
    console.error('Error modifying cat image:', err);
  });
