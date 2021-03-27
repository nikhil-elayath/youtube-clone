import React,{useEffect} from 'react'
import "../assests/styles/VideoSpecific.css";

import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";

import YouTube from 'react-youtube';
import { useSelector, useDispatch } from 'react-redux'

import {getVideoDetailsById} from '../actions/Videos'
import VideoDetails from  './VideoDetails'


function VideoSpecific(props) {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.VideoReducer);
    
    
    useEffect(() => {
        
        let data={videoId:location.pathname.split('/')[2]}
        dispatch(getVideoDetailsById(data))
    }, [dispatch])
    
    
    let location = useLocation();
  
    let data={videoId:location.pathname.split('/')[2]}
    console.log("location", location)

    return (
        <div id="videoSpecificContainer">
        <YouTube videoId={location.pathname.split('/')[2]} opts={{width:"70%",}}  />
        <div id="videoTitle">
            <p>
        {location.state.videoTitle}
        </p>
        </div>
        <VideoDetails/>

        </div>
    )
}

export default VideoSpecific
