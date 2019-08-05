let WebpackStrip = require('strip-loader')
let devConfig = require('./webpack.config');
let stripLoader = {
    test: [/\.js$/,/\.es6$/],
    exclude:/node_modules/,
    loader: WebpackStrip.loader("console.log")
}
devConfig.module.rules.push(stripLoader);
module.exports = devConfig;