import React, { Component } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/module.scss';
import UserProvider from './contexts/UserContext';
import { RouterSearchProvider } from './contexts/SearchContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <RouterSearchProvider>
            <UserProvider>
              <Layout />
              <main className="mainSection">
                <Switch>
                  <Route path="/search-list" component={ListPage} />
                  <Route path="/room-detail/:roomId" component={DetailPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route exact path="/:otherPath" component={NotFoundPage} />
                  <Route exact path="/" component={HomePage} />
                </Switch>
              </main>
            </UserProvider>
          </RouterSearchProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
