const mix = require("laravel-mix");
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

mix.setPublicPath("public");
mix.postCss("./resources/styles/app.css", "_assets").version();
mix.js("./resources/js/app.js", "_assets").vue().version();
mix.browserSync({
  proxy: process.env.APP_URL,
  files: ["resources/**/*"],
});
