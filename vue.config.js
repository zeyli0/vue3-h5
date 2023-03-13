const { defineConfig } = require('@vue/cli-service');
// const { VuetifyPlugin } = require('webpack-plugin-vuetify');
module.exports = defineConfig({
  transpileDependencies: true,
  // plugins: [
  // new VuetifyPlugin({ autoImport: true, styles: 'sass' }), // Enabled by default
  // ],
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    //extract: false,
    // 是否开启 CSS source map？
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/css/mixin.scss";`,
      },
    },
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
  },
});
