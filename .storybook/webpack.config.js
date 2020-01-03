module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.html?$/,
    use: ['extract-loader', 'html-loader'],
  });

  return config;
};
