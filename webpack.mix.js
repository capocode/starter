const mix = require("laravel-mix");

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

// mix.js('src/js/app.js', 'public/js')
mix.postCss("src/styles/app.css", "public/css", require('./postcss.config').plugins);

mix.copy('mix-manifest.json', 'public/mix-manifest.json');
