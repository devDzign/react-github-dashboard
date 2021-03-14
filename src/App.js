import React, {useEffect} from 'react';

// redux
import {connect} from "react-redux";

// CSS
import './App.css';

// Router
import { Route, Switch } from "react-router-dom";

// redux action
import { isAuthenticatedUser } from "./redux/users/user.actions";

// Pages
import { DashboardPage, LoginPage, ErrorPage } from './pages';


function App({isLoggedIn, isAuthenticated}) {

    useEffect(() => {
        isAuthenticated();
    });

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

const mapDispatchToProps = dispatch => ( {
    isAuthenticated: () => dispatch(isAuthenticatedUser())
})

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authenticate.isLoggedIn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
