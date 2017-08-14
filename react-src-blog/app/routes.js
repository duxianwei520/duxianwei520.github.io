import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'
import App from './containers/App'
import Welcome from './pages/welcome'

const editor = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./pages//article/editor').default)
  }, 'editor')
}

const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/article/editor" getComponent={editor} />

    </Route>
  </Route>
);

export default routes
