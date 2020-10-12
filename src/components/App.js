import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import NavBar from './navigation/NavBar'
import Home from './pages/Home'
import Person from './pages/Person'
import Title from './pages/Title'


const App = () => {
    return (
        <Router history={history}>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/person/:id" exact component={Person} />
                    <Route path="/title/:id" exact component={Title} />
                </Switch>
            </div>
      </Router>
    );
}

export default App;