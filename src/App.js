import React from 'react';
import HomeScreen from './pages/home-screen';
import BackstoryScreen from './pages/backstory-screen';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const PageSwitch = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        {/* <Route exact path='/contact' component={ContactScreen} /> */}

        <Route exact path='/upgrades'>

        </Route>
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
