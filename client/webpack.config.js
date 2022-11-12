/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = () => {
    return {
        mode: "development",
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "bundle.js",
            clean: true,
            publicPath: "/",
        },
        devServer: {
            static: {
                directory: path.join(__dirname, "public"),
            },
            compress: true,
            port: 3000,
            hot: true,
            historyApiFallback: true,
            open: true,
        },
        module: {
            rules: [
                {
                    test: /\.m?(js|ts|jsx|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            cacheDirectory: true,
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.m?js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".jsx", ".js", ".tsx", ".ts"],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                favicon: "./public/favicon.ico",
            }),
            new Dotenv({
                path: ".env.development",
            }),
            new SourceMapDevToolPlugin({
                filename: "[file].map",
            }),
        ],
    };
};
