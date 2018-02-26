import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Admin from '../route/'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component/>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(Admin)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../route/', () => {
    render(Admin)
  })
}
