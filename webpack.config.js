const path = require('path');
const HtmlHWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index1.js',
    output: {
        // 打包后的名字
        filename: 'main.js',
        // 必须是绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { // 编译后的结果放在内存当中，本地中是找不到的
        port: 3003,
        compress: true,
        // 资源访问文件
        contentBase: path.resolve(__dirname, 'dist'),
        // 自动打开浏览器
        open: true,
        hot: true,
        // proxy: {
        //     '/': 'http://172.18.57.155:3003/'
        // }
    },
    plugins: [
        new HtmlHWebpackPlugin({
            template: './public/index1.html',
            filename: 'index.html',
            // 是否把结果文件设置hash，清除缓存影响
            hash: true,
            // 把模板Html也压缩
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyElements: true
            }
        }),
        // 清除插件
        new CleanWebpackPlugin(),
    ],
    // 配置loader
    module: {
        // 设置规则和处理方案 默认执行顺序：从右到左，从下到上
        rules: [{
            // 基于正则匹配文件
            test: /\.(css|less)$/i,
            use: [
                'style-loader', // 把处理好的css插入到页面中 内嵌式
                'css-loader',  // 处理@import/url
                'postcss-loader', // 前缀(-webkit -moz) 处理兼容 需要搭配autoprefixer使用
                {
                    loader: 'less-loader',
                    options: {
                        // 写一些额外的配置
                    }
                }, // 把less编译成css
            ]
        }]
    }
    //source map
};