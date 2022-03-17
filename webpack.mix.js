const mix = require("laravel-mix");
const path = require("path");
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

mix.setPublicPath("public");
mix.postCss("./src/styles/app.css", "_assets").version();
mix.ts("./src/js/app.tsx", "_assets").react().version();
mix.browserSync({
  proxy: process.env.APP_URL,
  files: ["src/**/*"],
});
