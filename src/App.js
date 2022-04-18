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
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Purchase from './pages/Purchase/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path='/purchase/:productId'>
              <Purchase></Purchase>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>         
            <Route path= "*">
              <NotFound></NotFound>
          </Route>          
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
