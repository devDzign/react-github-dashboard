import userData from '../utils/mockUser';
import reposData from '../utils/mockRepos';
import followersData from '../utils/mockFollowers';

const getUser = () => {
    return userData;
}

const getRepos = () => {
    return reposData;
}

const getFollowers = () => {
    return followersData;
}

export default {
    getUser,
    getRepos,
    getFollowers
};