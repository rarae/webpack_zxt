const path = require('path');
const HtmlHWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const htmlPlugins = ['index1', 'index2'].map(item => {
    return new HtmlHWebpackPlugin({
        template: `./public/${item}.html`,
        filename: `${item}.html`,
        // 是否把结果文件设置hash，清除缓存影响
        hash: true,
        // 对应页面只引入对应的js文件用chunks,还可以指定引入的顺序
        chunks: [item],
        // 把模板Html也压缩
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyElements: true
        }
    })
})

module.exports = {
    mode: 'development',
    // entry: './src/index1.js',
    entry: {
        index1: './src/index1.js',
        index2: './src/index2.js'
    },
    output: {
        // 打包后的名字
        // name是多入口中的key值index1/index2
        filename: '[name].main.js',
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
        // new HtmlHWebpackPlugin({
        //     template: './public/index.html',
        //     filename: 'index.html',
        //     // 是否把结果文件设置hash，清除缓存影响
        //     hash: true,
        //     // 把模板Html也压缩
        //     minify: {
        //         collapseWhitespace: true,
        //         removeComments: true,
        //         removeAttributeQuotes: true,
        //         removeEmptyElements: true
        //     }
        // }),
        ...htmlPlugins,
        // 清除插件
        new CleanWebpackPlugin(),
    ],
    //source map
};