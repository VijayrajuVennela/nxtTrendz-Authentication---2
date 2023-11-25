import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Cart from './components/Cart'

import './App.css'
import Products from './components/Products'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
