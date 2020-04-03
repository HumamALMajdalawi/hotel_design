import React from 'react';
import './App.css';
import Home from './pages/Home'
import Error  from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import {BrowserRouter as Router, Route,
        link, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/rooms/:slug">
    <SingleRoom  />
            </Route>

    <Route exact path="/rooms">
    <Rooms/>
    </Route>
    <Route>
    <Error/>
    </Route>
    </Switch>
    </>
  );
}

export default App;
