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
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
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
  faUndo,
  faFilter
);

const App = () => {
  return (
    <ItemsState>
      <BrowserRouter>
        <ErrorModal />
        <Navigation title="Inventory" />
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
