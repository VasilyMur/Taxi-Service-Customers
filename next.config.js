// const withStylus = require('@zeit/next-stylus');
// module.exports = withStylus();

// const nib = require('nib')
// const withStylus = require('@zeit/next-stylus')
// module.exports = withStylus({
//   stylusLoaderOptions: {
//     use: [nib()]
//   }
// })

const nib = require('nib');
const rupture = require('rupture');
const withStylus = require('@zeit/next-stylus');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');


module.exports = withStylus({
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer({ browsers: 'last 2 version' }),
        require('postcss-css-variables'),
      ]),
    ]
  }
})
