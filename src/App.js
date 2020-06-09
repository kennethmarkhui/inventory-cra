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
import Items from './components/Items';
import NewItem from './components/NewItem';
import EditItem from './components/EditItem';
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
            <Route path="/" exact component={Items} />
            <Route path="/page/:pageNumber" exact component={Items} />
            <Route path="/new" exact component={NewItem} />
            <Route path="/edit/:id" exact component={EditItem} />
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
