import React, { Component } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/module.scss';
import UserProvider from './contexts/UserContext';
import { RouterSearchProvider } from './contexts/SearchContext';
import CommonLoading from './hoc/CommonLoading';

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
                  <Route path="/loading" component={CommonLoading} />
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
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
