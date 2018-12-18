const withTypescript = require("@zeit/next-typescript");
const withStyledIcons = require("next-plugin-styled-icons");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withImages(withTypescript(withStyledIcons())));
