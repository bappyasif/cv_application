let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index-bundle.js",
  },
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "./src"),
    contentBase: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
        // use: {
        //   loader: ["style-loader", "css-loader"]
        // }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      title: "CV Application",
      favicon: "./src/logo.svg"
    }),
  ],
};
