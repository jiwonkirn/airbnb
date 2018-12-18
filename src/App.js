import React, { Component } from 'react';
import Layout from './components/Layout';
import GuestInfoPage from './pages/GuestInfoPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import ReceiptPage from './pages/ReceiptPage';
import PayPage from './pages/PayPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SavedPage from './pages/SavedPage';
import SavedRsvnPage from './pages/SavedRsvnPage';
import SavedDetailPage from './pages/SavedDetailPage';
import MyReviewPage from './pages/MyReviewPage';
import MainContainer from './MainContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/module.scss';
import { UserProvider } from './contexts/UserContext';
import { RouterSearchProvider } from './contexts/SearchContext';
import ReservePage from './pages/ReservePage';
import Dates from './containers/Dates';
import ListNotFound from './pages/ListNotFound';
import MyReviewView from './components/MyReviewView';

class App extends Component {
  componentDidMount() {
    if (window.scrollY !== 0) {
      window.scroll(0, 0);
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <RouterSearchProvider>
            <UserProvider>
              <Layout>
                <MainContainer>
                  <Switch>
                    <Route
                      path="/search-list/not-found"
                      component={ListNotFound}
                    />
                    <Route path="/search-list" component={ListPage} />
                    <Route path="/room-detail/:roomId" component={DetailPage} />
                    <Route path="/pay/:roomId" component={PayPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route
                      exact
                      path="/saved/:city"
                      component={SavedDetailPage}
                    />
                    <Route exact path="/saved" component={SavedPage} />
                    <Route path="/trips" component={SavedRsvnPage} />
                    <Route path="/review" component={MyReviewPage} />
                    <Route path="/receipt/:receiptId" component={ReceiptPage} />
                    >
                    <Route path="/reserve/:roomId" component={ReservePage} />
                    <Route path="/date" component={Dates} />
                    <Route
                      path="/guest-info/:roomId"
                      component={GuestInfoPage}
                    />
                    <Route exact path="/:otherPath" component={NotFoundPage} />
                    <Route exact path="/" component={HomePage} />
                  </Switch>
                </MainContainer>
              </Layout>
            </UserProvider>
          </RouterSearchProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
