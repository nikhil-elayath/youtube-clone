import React from 'react'
import "../assests/styles/SearchResultCard.css";


export default function SearchResultCard() {
    return (
        <div id="searchResultCardContainer">
            <div id="imageContainer">
                <img id="image" src="https://i.ytimg.com/vi/eZ9NrqvuT6o/hqdefault.jpg" />

                </div>
                <div id="detailsContainer">
                    Video title
                    {/* <div id="viewsAndYears">
                        <div> Views</div> 
                        <div> Years</div> 

                    </div> */}
                <div >
                    <p>Views . Years</p>
                    {/* Video title
                    <div id="viewsAndYears">
                        <div> Views</div> 
                        <div> Years</div>  */}

                    </div>
                    <div id="channelLogoAndName">
                        <div> Logo</div> 
                        <div> Name</div> 

                    </div>
                    
                    <div id="description">
                    description
                        </div>
                    </div>


            
        </div>
    )
}
