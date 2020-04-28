module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(csv|tsv)$/,
    use: ["csv-loader"],
  });

  return config;
};
