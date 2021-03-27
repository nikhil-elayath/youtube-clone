import React from 'react'
import "../assests/styles/VideoDetails.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


export default function VideoDetails(props) {
    console.log("props",props)
    return (
        <div>
            <div id="mainContainerO">
                <div id="viewsAndDateMainContaiener">
                    <div>
                         {props.viewCount} views . 
                        </div>
                   
                    </div>
                <div id="likesAndDislikesMainContaiener">
                    <div>
                    <ThumbUpIcon/> {props.likes}
                        </div>
                    <div>
                       <ThumbDownIcon/> {props.dislikes}
                        </div>
                    </div>


            </div>
           
        </div>
    )
}
