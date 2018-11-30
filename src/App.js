import React, { Component } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
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
              <Route path="/search-list" component={ListPage} />
              <Route path="/room-detail/:roomId" component={DetailPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
