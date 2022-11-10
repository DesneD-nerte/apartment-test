const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 3000,
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
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".jsx", ".js", ".tsx", ".ts"],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
		}),
	],
};
