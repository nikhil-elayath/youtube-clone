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
    console.log("nanan", store)
    
    
    useEffect(() => {
        
        let data={videoId:location.pathname.split('/')[2]}
        dispatch(getVideoDetailsById(data))
    }, [dispatch])
    
    
    let location = useLocation();

  
    let data={videoId:location.pathname.split('/')[2]}
    console.log("location", location)

    return (
        <>
        {
        store&&store.specificVideoResults.length!=0?
        store.specificVideoResults&&store.specificVideoResults.items.map((item,index) =>{
            return(
                <>
        <div id="videoSpecificContainer">
        <YouTube videoId={location.pathname.split('/')[2]} opts={{width:"70%",}}  />
        <div id="videoTitle">
            <p>
        </p>
        </div>
        <VideoDetails likes={item.statistics.likeCount} dislikes={item.statistics.dislikeCount} viewCount={item.statistics.viewCount}/>

        </div>
        <div style={{width:"70%"}}>
        <hr/>
        </div>

        </>
            )
        }):null
    }
        </>
    )
}

export default VideoSpecific
