import React from 'react';
import Homepage from './pages/homepage/homepage.component';
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
      <Route path = '/hats' component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
