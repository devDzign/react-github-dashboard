import React, {useEffect} from 'react';

// redux
import {connect} from "react-redux";

// CSS
import './App.css';
import 'bootstrap/scss/bootstrap.scss'

// Router
// import { Route, Switch } from "react-router-dom";

// Pages
import { isAuthenticatedUser } from "./redux/users/user.actions";
import DashboardPage from "./pages/dashboard/dashboard.page";
import LoginPage from "./pages/login/login.page";
import ErrorPage from "./pages/error/Error.page";


function App({isLoggedIn, isAuthenticated}) {

    useEffect(() => {
        isAuthenticated();
    });

  return (
    <>
        {/*<Switch>*/}
        {/*    <Route exact path="/" component={HomePage}/>*/}
        {/*</Switch>*/}

        <DashboardPage></DashboardPage>
        <LoginPage />
        <ErrorPage />
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
