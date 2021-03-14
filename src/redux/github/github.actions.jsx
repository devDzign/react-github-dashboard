import { GithubActionTypes } from "./github.types";
import GitHubAPI  from "../../api/github.api"


export const getUserGitHub =  () => {
    return {
        type: GithubActionTypes.USERS_GITHUB_RECEIVED,
        payload: {
            user: GitHubAPI.getUser(),
        }
    }
}

export const getReposGitHub =  () => {
    return {
        type: GithubActionTypes.REPOS_GITHUB_RECEIVED,
        payload: {
            repos: GitHubAPI.getRepos(),
        }
    }
}

export const getFollowersGitHub =  () => {
    return {
        type: GithubActionTypes.FOLLOWERS_GITHUB_RECEIVED,
        payload: {
            followers: GitHubAPI.getFollowers(),
        }
    }
}

