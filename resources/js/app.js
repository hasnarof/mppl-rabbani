/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

import React from 'react'
import { render } from 'react-dom'
import { InertiaApp } from "@inertiajs/inertia-react"
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

// createInertiaApp({
//   resolve: name => require(`./Pages/${name}`),
//   setup({ el, App, props }) {
//     //   createApp({render: () => h(App, props)})
//     //   .use(plugin)
//     //   .mount(el)
//     render(<App {...props} />, el)
//   },
// })

const el = document.getElementById('app')

render(
    <InertiaApp
        initialPage={el ? JSON.parse(el.dataset.page) : "{}"}
        resolveComponent={(name) => require(`./Pages/${name}`).default}
    />,
    el
);

InertiaProgress.init();
// InertiaProgress.init({ color: '#4B5563' })
