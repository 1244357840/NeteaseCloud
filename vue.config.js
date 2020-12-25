module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': '@/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
      loaderOptions: {
        sass: {
          data: `@import "assets/style/global.scss";`
        }
      }
    }
}
