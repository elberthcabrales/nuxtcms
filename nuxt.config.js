const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "/css/bulma-carousel.min.css"
      }
    ],
    script: [
      {
        src: "/js/bulma-carousel.min.js"
      }
    ],

    /*    script: [
         {
           src: "~/node_modules/bulma-carousel/dist/css/bulma-carousel.js"
         }
       ] */
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  // js:[
  //   '~/node_modules/bulma-carousel/dist/js/bulma-carousel.min.js'
  // ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //https://github.com/surmon-china/vue-quill-editor/tree/master/examples/nuxt-ssr-example
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false },
    //https://github.com/euvl/vue-js-modal
    { src: '~plugins/modal.js', ssr:false},
  ],

  router: {
    linkActiveClass: 'is-active'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    //https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast',
  ],
  //toas config position
  toast: {
    theme: "toasted-primary", 
    position: 'top-right',
    duration : 2000
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:9000/'
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
