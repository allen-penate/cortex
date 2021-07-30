const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // register webpack path aliases
    config.resolve.alias['~storybook'] = path.resolve(__dirname)
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    // enable sass
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    })
    return config
  },  
}