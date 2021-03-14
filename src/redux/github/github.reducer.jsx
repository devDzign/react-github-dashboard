import { GithubActionTypes } from "./github.types";

const INITIAL_STATE = {
    value: '',
    isFetching: false,
    user: null,
    errors: null,
    repos: [],
    followers: [],
}

const githubReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GithubActionTypes.USERS_GITHUB_REQUEST:
            return {
                ...state,
                isFetching: true,
                errors: null
            };
        case GithubActionTypes.USERS_GITHUB_RECEIVED:
            return {
                ...state,
                isFetching: false,
                user: action.payload.user
            };
        case GithubActionTypes.USERS_GITHUB_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: []
            };
        case GithubActionTypes.REPOS_GITHUB_REQUEST:
            return {
                ...state,
                isFetching: true,
                errors: null
            };
        case GithubActionTypes.REPOS_GITHUB_RECEIVED:
            return {
                ...state,
                isFetching: false,
                repos: action.payload.repos
            };
        case GithubActionTypes.REPOS_GITHUB_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: []
            };
        case GithubActionTypes.FOLLOWERS_GITHUB_REQUEST:
            return {
                ...state,
                isFetching: true,
                errors: null
            };
        case GithubActionTypes.FOLLOWERS_GITHUB_RECEIVED:
            return {
                ...state,
                isFetching: false,
                followers: action.payload.followers
            };
        case GithubActionTypes.FOLLOWERS_GITHUB_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: []
            };
        default:
            return state;
    }
}

export default githubReducer;