import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Cars from './pages/Cars/Cars/Cars';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/cars'>
              <Cars></Cars>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
