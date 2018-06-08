import 'whatwg-fetch';

import React, { Fragment } from 'react';
/* global module */

import { Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';

import Entry from '../Entry/Entry';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Photo from '../Photo/Photo';

import './App.scss';

const history = createBrowserHistory();
history.listen(function (location) {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview', location.pathname + location.search);
});

export default hot(module)(() => (
  <Router history={history}>
    <Fragment>
      <Header />
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBv8W4b5MznculFqFknQE79HJIDW5YXX9w"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100vh', position: 'fixed', top: 0, width: '100vw' }} />}
        mapElement={<div style={{ height: '100vh' }} />}
      />
      <Switch>
        <Route exact path="/entry/:id" component={Entry} />
        <Route exact path="/entry/:entryId/photo/:photoId" component={Photo} />
      </Switch>
    </Fragment>
  </Router>
));
