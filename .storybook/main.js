module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx)"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  addons: ["@storybook/addon-webpack5-compiler-swc"]
};
