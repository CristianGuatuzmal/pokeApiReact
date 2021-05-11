import React from 'react';
import './App.scss';
import { Header } from './header/header';
import { LandingPage } from './landing-page/lading-page'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { GenerationPage } from './generation-page/generation-page';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/generation" component={GenerationPage} />
        </Switch>
      </Router>
  );
}


export default App;
