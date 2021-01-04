import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomeScreen from './pages/home-screen';
import BackstoryScreen from './pages/backstory-screen';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';

const App = () => {
  const PageSwitch = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        {/* <Route exact path='/contact' component={ContactScreen} /> */}
        <Route exact path='/backstory' component={BackstoryScreen} />
        {/* <Route exact path='/loadout' component={Loadout} /> */}
    </Switch>
  )

  return (
    <div>
      <Header />
      <BrowserRouter>
      <PageSwitch />
      </BrowserRouter>
    </div>
  )
}

export default App;
