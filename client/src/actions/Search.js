import axios from 'axios'
import {
    SEARCH_RESULTS
  } from "./Types";

export const search= data=> async dispatch =>{
    return axios
    .post('url'+'/search', data)
    .then(response => {
        dispatch({
            type: SEARCH_RESULTS,
            data: response.data.data
        })
    })
    .catch(err=>{
        console.log("err from search action",err)
    })
}