import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import products from './products.js'

ReactDOM.render(<App products={products} />, document.getElementById('root'))
registerServiceWorker()
