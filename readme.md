1. webpack基础功能
   1. 合并由ES module和CommonJS模块化的js代码，输出成一个能被浏览器引入的js文件
2. 引入js的自动化插件
   1. html-webpack-plugin插件：用于生成的js代码自动引入到html中
   2. webpack-dev-server插件：自动打开浏览器看到实时效果
   3. clean-webpack-plugin插件：如果有配置hash生成不一样名字的文件，自动删除上一次生成的文件
3. 多入口多出口
4. css/less处理：把导入到js的css/less编译成css,并内嵌到html页面. 也可以使用插件压缩css，然后再用外联式引入
5. 图片的处理 
   1. 真实项目中哪些地方会用到图片
      1. css中设置背景图
      2. js中动态创建图片
         1. 本地相对地址的时候要用require引入进来，否则编译后地址不存在
      3. html中直接引入图片
   2. file-loader html-withimg-loader
   3. url-loader可以把符合条件的图片转成base64
   4. 可以把处理后的图片打包到dist/images/目录下
6. js的处理（兼容转换和词法检测）
   1. 默认情况下，webpack只是把各版块的代码合并压缩，并没有对js进行其他的处理。如果代码需要做兼容，则需要转成ES5或以下的代码 用babel来处理
   2. eslint词法解析 检测你的语法是不是标准的语法