import React, { useEffect} from 'react';
import loadingImage from '../../assets/images/preloader.gif';

// Components

import {User, UserInfo } from '../../components'
import { getFollowersGitHub, getReposGitHub, getUserGitHub } from "../../redux/github/github.actions";
import { connect } from "react-redux";
import { GoRepo } from "react-icons/go";


const DashboardPage = ({user, followers, repos, isFetching, getRepos, getUser, getFollowers}) => {

    useEffect(() => {
       getUser();
       getRepos();
       getFollowers();
    });
    
    return (
        <main>
            {/*<Navbar/>*/}
            {/*<Search/>*/}
            {user && <UserInfo user={user}/> }
            {(user && followers) && <User user={user} followers={followers}/> }
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
