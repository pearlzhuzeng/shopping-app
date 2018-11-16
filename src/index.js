import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

import products from './products'

ReactDOM.render(<App products={products} />, document.getElementById('root'))
