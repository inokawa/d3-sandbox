import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
  stories: ["../src/**/*.stories.@(js|jsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [react()],
    });
  },
};
