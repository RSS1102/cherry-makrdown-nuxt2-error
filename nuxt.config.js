const path = require('path');
const nodeExternals = require('webpack-node-externals');

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chrry-markdown-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules:   
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/cherry-markdown/],
    extend(config, { isClient, isServer }) {
      // 针对客户端构建的配置
      if (isClient) {
        // 在客户端添加适当的 loader 或 externals
        config.module.rules.push({
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        });
      }

      // 针对服务器端构建的配置
      if (isServer) {
        // 可以添加 externals 来忽略 Node.js 核心模块
        config.externals = [
          // 忽略需要在 Node.js 中才可用的模块
          // (context, request, callback) => {
          //   if (/^child_process$|^fs$|^net$|^tls$/.test(request)) {
          //     return callback(null, 'commonjs ' + request);
          //   }
          //   callback();
          // },
          nodeExternals({
            allowlist: [/^jsdom$/, /^http-proxy-agent$/]
          }),
        ];
      }
    }
  }
}
