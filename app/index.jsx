import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './static/css/common.less'
import './static/css/font.css'

import configureStore from './store/configureStore'
const store = configureStore()
import AppRouter from './router/AppRouter'
render(
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
    ,
    document.getElementById('root')
)