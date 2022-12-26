const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  devtool: 'inline-source-map',
  output: {
    publicPath: "http://localhost:8090/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8090,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
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
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      

    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "navKey",
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
        "./UserService": "./src/services/UserService.js",
        "./HttpService": "./src/services/HttpService.js",
        "./axios.interceptor": "./src/interceptors/axios.interceptor.jsx",
        "./SideMenu": "./src/components/sidebar/SideMenu.jsx"

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
