const imagemin = require('imagemin');
const webp = require('imagemin-webp');

const dirs = {
  entry: 'src/*.{jpg,png}',
  dist: 'dist'
};

imagemin([dirs.entry], dirs.dist, {
  use: [webp({ quality: 75 })]
}).then(() => {
  console.log('Converted sucessfully');
});
