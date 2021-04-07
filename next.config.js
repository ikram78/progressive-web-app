const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
