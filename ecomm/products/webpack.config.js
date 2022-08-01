const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // var 로 정의 되기 때문에, 현업에서는 특이한 이름으로 설정!
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
