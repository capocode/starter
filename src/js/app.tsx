import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'

createInertiaApp({
  resolve: name => import(`./pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})

