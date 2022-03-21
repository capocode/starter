const mix = require("laravel-mix");
const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
require("dotenv").config({
  path: `.env`,
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig((webpack) => {
  return {
    resolve: {
      alias: {
        "@": path.resolve("./src/js"),
      },
    },
    output: {
      chunkFilename: "_assets/js/[name].[chunkhash].js",
    },
  };
});

mix
  .setPublicPath("public")
  .options({ manifest: false })
  .ts("./src/js/ssr.tsx", "_assets")
  .react()
  .webpackConfig({
    target: "node",
    externals: [webpackNodeExternals()],
  });
