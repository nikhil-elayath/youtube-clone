import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";

import YouTube from 'react-youtube';
import { useSelector, useDispatch } from 'react-redux'

import {getVideoDetailsById} from '../actions/Videos'


function VideoSpecific(props) {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.VideoReducer);
    console.log("store from specific", store)


    useEffect(() => {
        
        let data={videoId:location.pathname.split('/')[2]}
        dispatch(getVideoDetailsById(data))
    }, [dispatch])


    console.log("store from specific", store)
    let location = useLocation();
    console.log("location from spec",location.pathname.split('/')[2])
    let data={videoId:location.pathname.split('/')[2]}

    // dispatch(getVideoDetailsById(data))

    return (
        <div>
        <YouTube videoId={location.pathname.split('/')[2]} />
        {/* <p> {store}</p> */}

        </div>
    )
}

export default VideoSpecific
