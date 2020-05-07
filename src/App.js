import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPen,
  faTimes,
  faPlus,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

import Navigation from './components/Navigation';
import Items from './components/Items';
import NewItem from './components/NewItem';
import EditItem from './components/EditItem';
// import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css';

library.add(faPen, faTimes, faPlus, faAngleDoubleLeft, faAngleDoubleRight);

const App = (props) => {
  const [appState, setAppState] = useState({ route: null });

  const appStateHandler = (newRoute) => {
    setAppState({ route: newRoute });
    console.log(appState);
  };

  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Switch>
          {/* <Route path="/" exact component={Items} /> */}
          <Route
            path="/"
            exact
            render={() => <Items appStateHandler={appStateHandler} />}
          />
          <Route path="/new" component={NewItem} />
          <Route path="/edit/:id" exact component={EditItem} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
