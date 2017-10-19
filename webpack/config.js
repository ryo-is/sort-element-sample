
const path = require("path");
const current = process.cwd();
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 *
 * @type { Object<string string[]> }
 */
const entryPoints = require("./entry_points");

module.exports = [{
  // エントリーポイント
  entry: entryPoints,
  // 出力先

  // 出力するファイル名
  output: {
    path: path.join(current, "public/dist"),
    filename: "[name].js",
  },
  // 依存関係
  resolve: {
    modules: [
      path.join(current, "node_modules")
    ],
    extensions: [
      ".js", ".ts"
    ]
  },
  module: {
    rules: [
      { // shim for libraries that are depending on a .map file (like Swiper)
        // github.com/nolimits4web/Swiper/issues/1683#issuecomment-316825698
        test: /\.js$/,
        loader: "string-replace-loader",
        query: {
          search: "//# sourceMappingURL=(.*?).map",
          flags: "gmi",
          replace: ""
        }
      },
      { test: /\.ts$/, use: "awesome-typescript-loader" },
      { test: /\.json$/, use: "json-loader"},
      { test: /\.css$/, use: ["style-loader", "css-loader"]},
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}, {
  // エントリーポイント
  entry: {
    style: path.join(current, "src/scss/main.scss"),
  },
  // 出力先

  // 出力するファイル名
  output: {
    path: path.join(current, "public/dist"),
    filename: "[name].css",
  },
  // 依存関係
  resolve: {
    modules: [
      path.join(current, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}];
