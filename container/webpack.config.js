/**
 * ******************* Container *******************
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        reactMFE1: "reactMFE1@http://localhost:8081/remoteEntry.js",
        // reactMFE2: "reactMFE2@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
