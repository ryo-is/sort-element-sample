module.exports = ({ file, options, env }) => ({
  plugins: [
    require("precss"),
    require("autoprefixer"),
    require("cssnano")
  ]
});
