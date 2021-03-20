import {
    VIDEO_DETAILS_BY_ID
    } from "../actions/Types";
    
    const initialstate = {
    specificVideoResults:[]
    };
    
    export default function (state = initialstate,action) {
      switch (action.type) {
        case VIDEO_DETAILS_BY_ID:
          console.log("from VIDEO_DETAILS_BY_ID REDUCER",action.payload)
          return {
            ...state,
            specificVideoResults: action.payload,
          };
       
        default:
          return state;
      }
    }
    