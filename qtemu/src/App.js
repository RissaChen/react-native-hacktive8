/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import ErrorBoundary from './components/atoms/ErrorBoundary';
import Counter from './components/pages/Counter';
import QtemuPage from './components/pages/Qtemu';


const App = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route exact path="/">
          <QtemuPage />
        </Route>
      </Switch>
    </Router>
  </ErrorBoundary>
);

export default App;
