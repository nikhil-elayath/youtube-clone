import React from 'react'
import "../assests/styles/VideoDetails.css";


export default function VideoDetails() {
    return (
        <div>
            <div id="mainContainerO">
                <div id="viewsAndDateMainContaiener">
                    <div>
                        views
                        </div>
                    {/* <div>
                        date
                        </div> */}
                    </div>
                <div id="likesAndDislikesMainContaiener">
                    <div>
                        likes
                        </div>
                    <div>
                        dislikes
                        </div>
                    </div>


            </div>
           
        </div>
    )
}
