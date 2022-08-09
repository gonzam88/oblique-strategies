export default {
  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/api/index.js' },
  ],
  modules: ['@nuxtjs/axios'],
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  }
}