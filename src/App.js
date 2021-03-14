import React, { } from 'react';

// CSS
import './App.css';

// Router
import { Route, Switch } from "react-router-dom";


// Pages
import { DashboardPage, LoginPage, ErrorPage } from './pages';


function App() {

    return (
        <>
            <Switch>
                <Route exact path="/" component={DashboardPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </>
    );
}




export default App;
