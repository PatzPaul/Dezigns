import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import CreateRecipePage from './components/CreateRecipe';
import LoginPage from './components/Login';
import SignUpPage from './components/SignUp'
import HomePage from './components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App=()=>{

  return (
    <Router>
    <div className="">
      <NavBar/>
      <Switch>
        <Route path="/create_recipe">
          <CreateRecipePage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/signup">
          <SignUpPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));
