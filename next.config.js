const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const nextConfig = {
  future: {
    webpack5: true,
  }
};

module.exports = withPlugins(
  [[ withPWA({
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })],
    [
      withCSS({
        cssModules: true,
        generateEtags: false,
        webpack: (config) => {
          /**some special code */
          return config;
        },
      }),
    ],
    [
      withSass({
        cssModules: true,
        generateEtags: false,
        webpack: (config) => {
          /**some special code */
          return config;
        },
      }),
    ],
    [
      withImages({
        generateEtags: false,
        webpack(config, options) {
          return config;
        },
      }),
    ],
  ],
  nextConfig
);
