const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//dev-server works at base of directory for HTML i.e. bundle.js inst bundle.bundle.js
module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        filename: 'bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors'
                  }
            }
        }
    },
    devtool: 'source-map',
    plugins: [
              new CleanWebpackPlugin(['bundle']),
            ],
    devServer: {
        contentBase: path.join(__dirname,'public'),
        publicPath: '/',
        compress: true,
        port: 3000,
        proxy: {
            '/': 'http://127.0.0.1:8080/'
          }
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
                
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    }
}