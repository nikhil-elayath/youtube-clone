import axios from 'axios'
import {
    SEARCH_RESULTS
  } from "./Types";
  import config from "../config";
  const url = config.url;





export const search= (data)=> async (dispatch) =>{
    
    return axios
    .post(url+'search/search', data)
    .then(response => {
        console.log("response from actons", response.data.data)
       return dispatch({
            type: SEARCH_RESULTS,
            payload: response.data.data
        })
    })
    .catch(err=>{
        console.log("err from search action",err)
    })
}

