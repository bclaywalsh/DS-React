import logo from './logo.svg';
import './App.css';

function App() {
  const PageSwitch = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        {/* <Route exact path='/contact' component={ContactScreen} /> */}

        <Route exact path='/upgrades'>

        </Route>

  )
    </Switch>
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
