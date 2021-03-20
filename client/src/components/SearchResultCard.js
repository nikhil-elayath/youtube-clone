import React,{useEffect} from 'react'
import "../assests/styles/SearchResultCard.css";
import { useSelector, useDispatch} from 'react-redux'
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";






export default function SearchResultCard(props) {
    let location = useLocation();
    console.log("location",location)

    const store = useSelector((state) => state.searchReducer);
    const history = useHistory();

    console.log("from card",store.searchResults)
    // const mapStateToProps = state
    const navigateToSpecificVideo=(videoId)=>{
        console.log("navigateToSpecificVideo",videoId)
        history.push( {pathname: "/play-video/"+videoId
    })    }



    return (
        <>
        {
        store&&store.searchResults.length!=0?
          store.searchResults&&store.searchResults.items.map((item,index) =>{
              return(
                  <>
              
            <div id="searchResultCardContainer" onClick={()=>{navigateToSpecificVideo(item.id.videoId)}}>
            <div id="imageContainer">
                <img id="image" src={item.snippet.thumbnails.high.url} />

                </div>
                <div id="detailsContainer">
                   {item.snippet.channelTitle}
                 

                  
                <div >
                    <p>Views . {item.snippet.publishedAt} </p>
                 

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
        </>
              )
      


          })
          :
          <div> 
              no result
          </div>


        
        }
</>
      
    )
}
