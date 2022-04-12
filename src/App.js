import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Cars from './pages/Cars/Cars/Cars';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register/Register';



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
            <Route path='/login'>
              <Login></Login>
            </Route>          
            <Route path='/register'>
              <Register></Register>
            </Route>          
            <Route path="*">
              <NotFound></NotFound>
          </Route>          
          </Switch>
        </Router>
    </div>
  );
}

export default App;
