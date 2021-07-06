const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        // 加hash消除缓存的影响
        filename: 'main.[hash].js',
        //必须是绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    //source map
};