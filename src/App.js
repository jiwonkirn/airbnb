import React, { Component } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './css/module.scss';
import UserProvider from './contexts/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider>
          <Layout />
          <main className="mainSection">
            <BrowserRouter>
              <Switch>
                <Route path="/search-list" component={ListPage} />
                <Route path="/room-detail/:roomId" component={DetailPage} />
                <Route path="/login" component={LoginPage} />
                <Route exact path="/" component={HomePage} />
              </Switch>
            </BrowserRouter>
          </main>
        </UserProvider>
      </div>
    );
  }
}

export default App;
