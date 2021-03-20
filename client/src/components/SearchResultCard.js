import React,{useEffect} from 'react'
import "../assests/styles/SearchResultCard.css";
import { useSelector, useDispatch} from 'react-redux'




export default function SearchResultCard(props) {
    const store = useSelector((state) => state.searchReducer);
    console.log("from card",store.searchResults)
    // const mapStateToProps = state




    return (
        <>
        {
        store&&store.searchResults.length!=0?
          store.searchResults&&store.searchResults.items.map((item,index) =>{
              return(
                  <>
              
            <div id="searchResultCardContainer">
            <div id="imageContainer">
                <img id="image" src={item.snippet.thumbnails.high.url} />

                </div>
                <div id="detailsContainer">
                   {item.snippet.channelTitle}
                    {/* <div id="viewsAndYears">
                        <div> Views</div> 
                        <div> Years</div> 

                    </div> */}
                <div >
                    <p>Views . {item.snippet.publishedAt} </p>
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
