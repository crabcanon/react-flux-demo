import React from 'react';
import Catalog from './catalog/app.catalog';
import Cart from './cart/app.cart';
import CatalogDetail from './product/app.catalog-detail';
import Template from './app.template';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
  return (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ Catalog }></IndexRoute>
        <Route path="cart" component={ Cart }></Route>
        <Route path="item/:item" component={ CatalogDetail }></Route>
      </Route>
    </Router>
  );
}
