import React, { useEffect} from 'react';
import loadingImage from '../../assets/images/preloader.gif';

// Components

import { Navbar, Search, User, UserInfo } from '../../components'
import { getFollowersGitHub, getReposGitHub, getUserGitHub } from "../../redux/github/github.actions";
import { connect } from "react-redux";


const DashboardPage = ({user, isFetching, getRepos, getUser, getFollowers}) => {

    useEffect(() => {
       getUser();
       getRepos();
       getFollowers();
    });


    return (
        <main>
            <h1>  {user && <p>La valeur "SET_VALUE": {user.login}</p>}</h1>
            <Navbar/>
            <Search/>
            <UserInfo/>
            <User/>

        </main>
    );
};

const mapDispatchToProps = dispatch => (
    {
        getUser: () => dispatch(getUserGitHub()),
        getRepos: () => dispatch(getReposGitHub()),
        getFollowers: () => dispatch(getFollowersGitHub())
    }
)

const mapStateToProps = state =>
{
    return {
        user: state.infoGithub.user,
        repos: state.infoGithub.repos,
        followers: state.infoGithub.followers,
        isFetching: state.infoGithub.isFetching,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
