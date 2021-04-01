import React from 'react'
import "../assests/styles/SideBar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";



export default function SideBar() {
    const [homeSelected, setHomeSelected]=React.useState(true)
    const [trendingSelected, setTrendingSelected]=React.useState(false)
    const [subscriptionSelected, setSubscriptionSelected]=React.useState(false)
    const [librarySelected, setLibrarySelected]=React.useState(false)
    const [historySelected, setHistorySelected]=React.useState(false)
    const [yourVideosSelected, setYourVideosSelected]=React.useState(false)
    // const [watchLaterSelected, setWatchLaterSelected]=React.useState(false)
    // const [likedVideosSelected, setlikedVideosSelected]=React.useState(false)
    const history = useHistory();



    const onHomeContainerClick=()=>{
        setSubscriptionSelected(false)
        setTrendingSelected(false)
        setHomeSelected(true)
        setHistorySelected(false)
        setLibrarySelected(false)
        setYourVideosSelected(false)
       console.log(homeSelected,setTrendingSelected)
       history.push( {pathname: "/"
    }) 

    }
    const onTrendingContainerClick=(test)=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setSubscriptionSelected(false)
        setTrendingSelected(true)
        setHomeSelected(false)
        setHistorySelected(false)
        setLibrarySelected(false)
        setYourVideosSelected(false)



    }
    const onSubsContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setSubscriptionSelected(true)
        setTrendingSelected(false)
        setHomeSelected(false)
        setHistorySelected(false)
        setLibrarySelected(false)
        setYourVideosSelected(false)

    }
    const onLibraryContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setSubscriptionSelected(false)
        setTrendingSelected(false)
        setHomeSelected(false)
        setHistorySelected(false)
        setLibrarySelected(true)
        setYourVideosSelected(false)

    }
    const onHistoryContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setSubscriptionSelected(false)
        setTrendingSelected(false)
        setHomeSelected(false)
        setHistorySelected(true)
        setLibrarySelected(false)
        setYourVideosSelected(false)


    }
    const onYourVideosContainerClick=()=>{
        setSubscriptionSelected(false)
        setTrendingSelected(false)
        setHomeSelected(false)
        setHistorySelected(false)
        setLibrarySelected(false)
        setYourVideosSelected(true)

    }
    // const onSubsContainerClick=()=>{
    //     console.log("onHomeContainerClick",onHomeContainerClick)
    //     setSubscriptionSelected(true)
    //     setTrendingSelected(false)
    //     setHomeSelected(false)

    // }
    // const onSubsContainerClick=()=>{
    //     console.log("onHomeContainerClick",onHomeContainerClick)
    //     setSubscriptionSelected(true)
    //     setTrendingSelected(false)
    //     setHomeSelected(false)

    // }
    // const onSubsContainerClick=()=>{
    //     console.log("onHomeContainerClick",onHomeContainerClick)
    //     setSubscriptionSelected(true)
    //     setTrendingSelected(false)
    //     setHomeSelected(false)

    // }
    return (
        <div>
            <div id="mainContainer">
                <div id= {homeSelected==true? "selectedHomeContainer": "homeContainer"} onClick={onHomeContainerClick}>
                    <div id={homeSelected==true?"selectedHomeIcon":"homeIcon"}>
                    <HomeIcon/>                        
                         </div>
                    <div id="text">
                        Home
                        </div>
            
                    </div>
                <div id= {trendingSelected==true? "selectedTrendingContainer": "trendingContainer"} onClick={onTrendingContainerClick}>
                <div id={trendingSelected==true?"selectedTrendingIcon":"trendingIcon"}>
                    <ExploreIcon/>                        
                         </div>
                         <div id="text">
                        Explore
                        </div>
            
                    </div>
                <div id= {subscriptionSelected==true? "selectedSubscriptionContainer": "subscriptionContainer"} onClick={onSubsContainerClick}>
                <div id={subscriptionSelected==true?"selectedSubscriptionIcon":"subscriptionIcon"}>
                    <SubscriptionsIcon/>                        
                         </div>
                         <div id="text">
                        Subscriptions
                        </div>
            
                    </div>
          
         
            <hr />
            <div id= {librarySelected==true? "selectedlibraryContainer": "libraryContainer"} onClick={onLibraryContainerClick}>
                    <div id={librarySelected==true?"selectedLibraryIcon":"libraryIcon"}>
                    <VideoLibrarySharpIcon/>                        
                         </div>
                         <div id="text">
                        Library
                        </div>
            
                    </div>
                <div id= {historySelected==true? "selectedHistoryContainer": "historyContainer"} onClick={onHistoryContainerClick}>
                <div id={historySelected==true?"selectedHistoryIcon":"historyIcon"}>
                    <HistorySharpIcon/>                        
                         </div>
                         <div id="text">
                        History
                        </div>
            
                    </div>
                <div id= {yourVideosSelected==true? "selectedYourVideosContainer": "yourVideosContainer"} onClick={onYourVideosContainerClick}>
                <div id={yourVideosSelected==true?"selectedYourVideosIcon":"yourVideosIcon"}>
                    <OndemandVideoOutlinedIcon/>                        
                         </div>
                         <div id="text">
                        Your videos
                        </div>
            
                    </div>
                {/* <div id= {subscriptionSelected==true? "selectedSubscriptionContainer": "subscriptionContainer"} onClick={onSubsContainerClick}>
                <div id={subscriptionSelected==true?"selectedSubscriptionIcon":"subscriptionIcon"}>
                    <WatchLaterOutlinedIcon/>                        
                         </div>
                    <div>
                        Watch Later
                        </div>
            
                    </div>
                <div id= {subscriptionSelected==true? "selectedSubscriptionContainer": "subscriptionContainer"} onClick={onSubsContainerClick}>
                <div id={subscriptionSelected==true?"selectedSubscriptionIcon":"subscriptionIcon"}>
                    <ThumbUpOutlinedIcon/>                        
                         </div>
                    <div>
                        Liked videos
                        </div>
            
                    </div> */}
            </div>
        </div>
    )
}
