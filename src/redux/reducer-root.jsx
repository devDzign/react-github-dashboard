import { combineReducers } from "redux";

// Reducers
import githubReducer from "./github/github.reducer";

const rootReducer = combineReducers(
    {
        infoGithub: githubReducer
    }
)

export default rootReducer