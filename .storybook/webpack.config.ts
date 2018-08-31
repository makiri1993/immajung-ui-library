import webpack from "webpack";
// import HtmlWebpackPlugin from "html-webpack-plugin";
import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin/lib";

const path = require("path");
const fs = require("fs");

const definitions = {
  cssOutputFilename: "app.min.css",
  jsOutputFilename: "app.js",
  publicPath: "/"
};

const root = path.resolve(__dirname, "..");
const src = path.resolve(root, "src");

// const env = {
//   PRODUCTION: JSON.stringify(false),
//   DEVELOPMENT: JSON.stringify(true)
//   // FRONTEND_VERSION: JSON.stringify(require("../definitions").variables.version)
// };

const paths = {
  root: root,
  appSrc: src,
  reactIndex: path.resolve(src, "index.tsx"),
  packageJson: path.resolve(root, "package.json"),
  testDir: path.resolve(root, "test"),
  tsconfig: path.resolve(root, "tsconfig.json"),
  // htmlIndex: path.resolve(root, "static", "index.html"),
  // mvnTarget: path.resolve(root, "..", "..", "..", "target", "classes", "static"),
  staticRessources: path.resolve(root, "static")
};

const variables = {
  version: JSON.parse(fs.readFileSync(path.resolve(paths.packageJson))).version,
  // includedRessourcePattern: /\.(woff|woff2|eot|ttf|svg|png|ico|jpg|css|pdf)$/,
  resolveExtensions: [".ts", ".tsx", ".js", ".json", ".scss"]
};

// const production = {
//     removeComments: true,
//     collapseWhitespace: true,
//     collapseInlineTagWhitespace: true,
//     removeRedundantAttributes: true,
//     removeAttributeQuotes: true,
//     useShortDoctype: true,
//     removeEmptyAttributes: true,
//     removeStyleLinkTypeAttributes: true,
//     keepClosingSlash: true,
//     minifyJS: true,
//     minifyCSS: true,
//     minifyURLs: true,
// }

const config: webpack.Configuration = {
  mode: "development",

  entry: [
    // require.resolve("./polyfill"),
    require.resolve("react-dev-utils/webpackHotDevClient"),
    paths.reactIndex
  ],

  devServer: {
    public: "http://localhost:6006",
    host: "0.0.0.0",
    port: 6006,
    disableHostCheck: true,
    contentBase: [paths.staticRessources],
    // proxy: {
    //     "/api": {
    //         target: "http://localhost:6006",
    //         pathRewrite: {
    //             "^/api": ""
    //         }
    //     }
    // },
    historyApiFallback: true
  },

  output: {
    filename: definitions.jsOutputFilename,
    path: paths.staticRessources,
    publicPath: definitions.publicPath
  },

  devtool: "source-map",

  resolve: {
    extensions: variables.resolveExtensions,
    plugins: [
      new TsConfigPathsPlugin({
        configFile: paths.tsconfig
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {}
          }
        ],
        exclude: /node_modules/
      }
      // {
      //     test: variables.includedRessourcePattern,
      //     include: [paths.staticRessources],
      //     use: "url-loader"
      // },
      // {
      //     test: /\.svg$/,
      //     include: [/ymir/],
      //     loader: "url-loader"
      // },
      // {
      //     test: /\.scss$/,
      //     use: [
      //         require.resolve("style-loader"),
      //         require.resolve("css-loader"),
      //         require.resolve("sass-loader")
      //     ],
      // }
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: paths.htmlIndex
    // }),
    // new webpack.DefinePlugin(env)
  ]
};

export default config;
