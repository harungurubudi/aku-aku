require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

const withTypescript = require("@zeit/next-typescript");
const withStyledIcons = require("next-plugin-styled-icons");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

const config = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};

module.exports = withCSS(withImages(withTypescript(withStyledIcons(config))));
