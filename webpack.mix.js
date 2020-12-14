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

mix.setPublicPath("static/_assets");
mix.postCss("./src/styles/app.css", "").version();
mix.js("./src/js/app.js", "").vue().version();
mix.browserSync({
  proxy: process.env.APP_URL,
  files: ["src/**/*"],
});
