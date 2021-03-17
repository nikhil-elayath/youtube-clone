import {
  SEARCH_RESULTS
  } from "../actions/Types";
  
  const initialstate = {
  searchResults:[]
  };
  
  export default function (state = initialstate,action) {
    switch (action.type) {
      case SEARCH_RESULTS:
        console.log("from reducer",action.payload)
        return {
          ...state,
          searchResults: action.payload,
        };
     
      default:
        return state;
    }
  }
  