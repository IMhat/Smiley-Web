const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8085/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8085,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "service_2",
      filename: "remoteEntry.js",
      remotes: {
        header: "header@http://localhost:8083/remoteEntry.js",
        footer: "footer@http://localhost:8084/remoteEntry.js",

        home: "home@http://localhost:7080/remoteEntry.js",

        navKey: "navKey@http://localhost:8090/remoteEntry.js",
        
        // navBar: "navBar@http://localhost:8081/remoteEntry.js",
        
        service_1: "service_1@http://localhost:8082/remoteEntry.js",
        service_2: "service_2@http://localhost:8085/remoteEntry.js",
      },
      exposes: {
        "./Service2Content": "./src/Service2Content.jsx",

        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
