import React,{useEffect} from 'react'
import YouTube from 'react-youtube';
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import "../assests/styles/VideoSpecificCard.css";



export default function VideoSpecificCar() {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.VideoReducer);
    useEffect(() => {
        
        // let data={videoId:location.pathname.split('/')[2]}
        // dispatch(getVideoDetailsById(data))
    }, [dispatch])
    return (
        <div>
            <div id="videoContainer">
               
                <YouTube videoId={'MW4lJ8Y0xXk'} id="video"  />
                <YouTube videoId={'MW4lJ8Y0xXk'} id="video"  />
                <YouTube videoId={'MW4lJ8Y0xXk'} id="video"  />
                <YouTube videoId={'MW4lJ8Y0xXk'} id="video"  />

            
                  </div>
                  </div>
    )
}
