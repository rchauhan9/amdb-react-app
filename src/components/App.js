import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import NavBar from './navigation/NavBar'
import Home from './pages/Home'
import Person from './pages/Person'
import Title from './pages/Title'
import Genre from './pages/Genre'

import Search from "./pages/Search";

const App = () => {
    return (
        <Router history={history}>
            <div style={{ 'background': '#1a1a1a' }}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/person/:id" exact component={Person} />
                    <Route path="/title/:id" exact component={Title} />
                    <Route path="/genre/:id" exact component={Genre} />
                    <Route path="/search/:term" exact component={Search} />
                </Switch>
            </div>
      </Router>
    );
}

export default App;