const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = 'f:/daka2/public/pets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

(async () => {
  for (const file of files) {
    const p = path.join(dir, file);
    try {
      const img = await Jimp.read(p);
      const w = img.bitmap.width;
      const h = img.bitmap.height;
      
      // We will perform a BFS flood fill from the 4 corners
      const visited = new Uint8Array(w * h);
      const toVisit = [];
      const enqueue = (x, y) => {
        if (x >= 0 && x < w && y >= 0 && y < h) {
           const idx = y * w + x;
           toVisit.push(idx);
           visited[idx] = 1;
        }
      };
      enqueue(0, 0);
      enqueue(w-1, 0);
      enqueue(0, h-1);
      enqueue(w-1, h-1);
      
      // Use fixed white since generated images are on a white background.
      // If we use the top left pixel of an already modified image, it might be 0,0,0,0.
      const targetR = 255, targetG = 255, targetB = 255;
      
      // Increased tolerance for AI generated images that may have gradients
      const tolerance = 90; 
      
      let head = 0;
      while(head < toVisit.length) {
        const idx = toVisit[head++];
        // visited[idx] is already 1, we don't continue here
        
        const x = idx % w;
        const y = Math.floor(idx / w);
        
        const pIdx = (y * w + x) * 4;
        const r = img.bitmap.data[pIdx];
        const g = img.bitmap.data[pIdx+1];
        const b = img.bitmap.data[pIdx+2];
        
        const dist = Math.sqrt((r-targetR)**2 + (g-targetG)**2 + (b-targetB)**2);
        
        if (dist <= tolerance) {
          img.bitmap.data[pIdx+3] = 0; // transparent
          // enqueue neighbors
          if (x > 0 && !visited[idx-1]) { toVisit.push(idx - 1); visited[idx-1] = 1; }
          if (x < w - 1 && !visited[idx+1]) { toVisit.push(idx + 1); visited[idx+1] = 1; }
          if (y > 0 && !visited[idx-w]) { toVisit.push(idx - w); visited[idx-w] = 1; }
          if (y < h - 1 && !visited[idx+w]) { toVisit.push(idx + w); visited[idx+w] = 1; }
        }
      }

      // Pass 2: edge smoothing (anti-aliasing)
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = (y * w + x) * 4;
          if (img.bitmap.data[idx+3] !== 0) {
            // If it's an opaque pixel near a transparent one, and it's bright/whiteish, soften its alpha
            const r = img.bitmap.data[idx];
            const g = img.bitmap.data[idx+1];
            const b = img.bitmap.data[idx+2];
            const dist = Math.sqrt((r-targetR)**2 + (g-targetG)**2 + (b-targetB)**2);
            
            if (dist < 100) {
              // check if neighbors are transparent
              const leftAlpha = img.bitmap.data[(y*w + x-1)*4 + 3];
              const rightAlpha = img.bitmap.data[(y*w + x+1)*4 + 3];
              const topAlpha = img.bitmap.data[((y-1)*w + x)*4 + 3];
              const bottomAlpha = img.bitmap.data[((y+1)*w + x)*4 + 3];
              if (leftAlpha === 0 || rightAlpha === 0 || topAlpha === 0 || bottomAlpha === 0) {
                // semi-transparent
                img.bitmap.data[idx+3] = Math.max(0, 255 - (100 - dist) * 2);
              }
            }
          }
        }
      }

      await img.writeAsync(p);
      console.log('Processed', file);
    } catch(e) { console.error('Error with ' + file, e); }
  }
})();
