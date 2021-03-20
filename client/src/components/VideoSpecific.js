import React from 'react'
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";

import YouTube from 'react-youtube';

function VideoSpecific(props) {
    console.log("VideoSpecific",props)
    let location = useLocation();
    console.log("location from spec",location.pathname.split('/')[2])
    return (
        <div>
                        <YouTube videoId={location.pathname.split('/')[2]} />

        </div>
    )
}

export default VideoSpecific
