import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Wovlespanel from './components/Wolvespanel.js'

class App extends React.Component {
  render() {
    return (
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Wovlespanel" component={Wovlespanel} />
      <Route component={Error} />
      </Switch>

    );
  }
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
