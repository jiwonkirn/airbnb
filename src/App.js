import React, { Component } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './css/module.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <main className="mainSection">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
