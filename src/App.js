import React, { Component } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
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
              <Route path="/search-list" component={List} />
              <Route path="/room-detail/:roomId" component={Detail} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
