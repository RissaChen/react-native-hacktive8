import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetail from './pages/postDetail';
import Posts from './pages/posts';

const App = () => (
  <Router>
    <Switch>
      <Route path="/posts/:id">
        <postDetail />
      </Route>
      <Route path="/">
        <Posts />
      </Route>
    </Switch>
  </Router>
);

export default App;
