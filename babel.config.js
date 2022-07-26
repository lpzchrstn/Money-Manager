module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    "macros",
    "babel-plugin-react-require",
    "@babel/plugin-transform-runtime",
  ],
};
