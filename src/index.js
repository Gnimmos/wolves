import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from './components/Home';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

import wolf1withback from'./components/wolf1withback.js';
import wolf2withback from'./components/wolf2withback.js';
import wolf3withback from'./components/wolf3withback.js';
import wolf4withback from'./components/wolf4withback.js';
import wolf5withback from'./components/wolf5withback.js';
import wolf6withback from'./components/wolf6withback.js';
import wolf7withback from'./components/wolf7withback.js';
import wolf8withback from'./components/wolf8withback.js';
import wolf9withback from'./components/wolf9withback.js';
import wolf10withback from'./components/wolf10withback.js';
import wolf11withback from'./components/wolf11withback.js';
import wolf12withback from'./components/wolf12withback.js';


import wolf1loc from './components/wolf1loc.js'
import wolf2loc from './components/wolf2loc.js'
import wolf3loc from './components/wolf3loc.js'
import wolf4loc from './components/wolf4loc.js'
import wolf5loc from './components/wolf5loc.js'
import wolf6loc from './components/wolf6loc.js'
import wolf7loc from './components/wolf7loc.js'
import wolf8loc from './components/wolf8loc.js'
import wolf9loc from './components/wolf9loc.js'
import wolf10loc from './components/wolf10loc.js'
import wolf111oc from './components/wolf11loc.js'
import wolf12loc from './components/wolf12loc.js'
import Allwolves from './components/Allwolves.js'

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

class App extends React.Component {
  render() {

    return (

      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Allwolves" component={Allwolves}  />

      <Route path="/wolf1" component={wolf1withback}  />
      <Route path="/wolf2" component={wolf2withback}  />
      <Route path="/wolf3" component={wolf3withback}  />
      <Route path="/wolf4" component={wolf4withback}  />
      <Route path="/wolf5" component={wolf5withback}  />
      <Route path="/wolf6" component={wolf6withback}  />
      <Route path="/wolf7" component={wolf7withback}  />
      <Route path="/wolf8" component={wolf8withback}  />
      <Route path="/wolf9" component={wolf9withback}  />
      <Route path="/wolf10" component={wolf10withback}  />
      <Route path="/wolf11" component={wolf11withback}  />
      <Route path="/wolf12" component={wolf12withback}  />

      <Route path="/locwolf1" component={wolf1loc} />
      <Route path="/locwolf2" component={wolf2loc} />
      <Route path="/locwolf3" component={wolf3loc} />
      <Route path="/locwolf4" component={wolf4loc} />
      <Route path="/locwolf5" component={wolf5loc} />
      <Route path="/locwolf6" component={wolf6loc} />
      <Route path="/locwolf7" component={wolf7loc} />
      <Route path="/locwolf8" component={wolf8loc} />
      <Route path="/locwolf9" component={wolf9loc} />
      <Route path="/locwolf10" component={wolf10loc} />
      <Route path="/locwolf11" component={wolf111oc} />
      <Route path="/locwolf11" c1omponent={wolf12loc} />

      </Switch>
    );
  }
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>,
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
