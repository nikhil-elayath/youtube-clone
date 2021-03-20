import { combineReducers } from "redux";

import search from "./SearchReducer";
import specificVideo from "./VideoReducer";


export default combineReducers({
    searchReducer:search,
    VideoReducer:specificVideo

 
});
