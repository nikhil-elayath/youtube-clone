import axios from 'axios'
import {
    VIDEO_DETAILS_BY_ID
  } from "./Types";
  import config from "../config";
  const url = config.url;
//   const config = require("config");
const youtubeAPIKey = config.youtubeAPIKey;
console.log("youtubeAPIKey",youtubeAPIKey)



  console.log("url",url)


export const getVideoDetailsById= (data)=> async (dispatch) =>{
    let videoId=data.videoId

    
    console.log("from VIDEO_DETAILS_BY_ID action", videoId)
    return axios
    .get('https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&key='+'AIzaSyCjb5t9GnRvzzStRzrdrTA_gZc_YVYoqPg'+'&part=snippet,contentDetails,statistics,status')
    .then(response => {
        console.log("response from actons", response)
       return dispatch({
            type: VIDEO_DETAILS_BY_ID,
            payload: response.data
        })
    })
    .catch(err=>{
        console.log("err from search action",err)
    })
}

