import axios from 'axios'
import {
    VIDEO_DETAILS_BY_ID
  } from "./Types";
  import config from "../config";
  const url = config.url;
//   const config = require("config");




  console.log("url",url)


export const getVideoDetailsById= (data)=> async (dispatch) =>{
    let videoId=data.videoId

    
    console.log("from VIDEO_DETAILS_BY_ID action", videoId)
    return axios
    .get('https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&key='+'AIzaSyDwOxM66btmflpeUkt6Q6Ahg3beRz4CBY4'+'&part=snippet,contentDetails,statistics,status')
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

