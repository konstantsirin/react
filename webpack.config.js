const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
        publicPath: '' 
    },
    devServer: { //ошибки прям в браузере
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        //'@babel/preset-es2015',
                        '@babel/preset-react'
                    ]
                  }
            },
            /*если нужно весь css-код вставить в файл index.html
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            */
            /* для создания отдельного файла css*/
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract ({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
            
        ]
    },
    plugins: [
        new ExtractTextPlugin('build.css'),
        new HtmlWebpackPlugin()
    ]
};

module.exports = conf;

//source-map
/*
module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
                    ? 'source-map'
                    : 'eval-sourcemap';
    return conf;
}
*/