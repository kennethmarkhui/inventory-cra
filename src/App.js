import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPen,
  faTimes,
  faPlus,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faFileImage,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

import Navigation from './components/Navigation';
import Home from './components/Home';
import New from './components/New';
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ErrorModal from './components/ErrorModal';

import ItemsState from './context/items/itemsState';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

library.add(
  faPen,
  faTimes,
  faPlus,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faFileImage,
  faUndo
);

const App = (props) => {
  return (
    <ItemsState>
      <BrowserRouter>
        <ErrorModal />
        <Navigation />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={New} />
            <Route path="/edit/:id" exact component={Edit} />
            <Route path="/NotFound" component={NotFound} />
            <Redirect to="/NotFound" />
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </ItemsState>
  );
};

export default App;
