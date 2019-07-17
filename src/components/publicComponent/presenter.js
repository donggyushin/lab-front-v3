import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoginPage from "../../routes/public/login"
import NewAccountPage from "../../routes/public/newAccount"

const Presenter = () => <Router>
    <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/new-account" exact component={NewAccountPage} />
        <Route component={LoginPage} />
    </Switch>
</Router>

export default Presenter