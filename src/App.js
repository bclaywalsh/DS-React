import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomeScreen from './pages/home-screen';
import BackstoryScreen from './pages/backstory-screen';
import PresentDayScreen from './pages/present-day-screen';
import GameplayScreen from './pages/game-play-screen';
import ArmoryScreen from './pages/armory-screen';
import About from './pages/about-screen';
import Gallery from './pages/gallery-screen';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';

const App = () => {
  const PageSwitch = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/about' component={About} />
        <Route exact path='/backstory' component={BackstoryScreen} />
        <Route exact path='/presentDay' component={PresentDayScreen} />
        <Route exact path='/gameplay' component={GameplayScreen} />
        <Route exact path='/armory' component={ArmoryScreen} />
        <Route exact path='/gallery' component={Gallery} />
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
