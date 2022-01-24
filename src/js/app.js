// import { createApp } from 'vue'
// import App from './components/App.vue'

// createApp(App).mount(document.getElementById('vueapp'))

// import { createApp, h } from 'vue'
// import { createInertiaApp } from '@inertiajs/inertia-vue3'

// createInertiaApp({
//   resolve: name => require(`./pages/${name}`),
//   setup({ el, App, props, plugin }) {
//     createApp({ render: () => h(App, props) })
//       .use(plugin)
//       .mount(el)
//   },
// })

import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'

createInertiaApp({
  resolve: name => import(`./pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
