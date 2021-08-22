import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE!</h1>
    </div>
  )
};

function App() {
  return (
    <div>
    <Switch>
      <Route exact path = '/' component={Homepage}/>
      <Route exact path = '/hats' component={HatsPage}/>
      <Route exact path = '/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
