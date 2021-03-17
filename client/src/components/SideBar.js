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


export default function SideBar() {
    const [homeSelected, setHomeSelected]=React.useState(true)
    const [trendingSelected, setTrendingSelected]=React.useState(false)
    const [subscriptionSelected, setSubscriptionSelected]=React.useState(false)
    const [librarySelected, setLibrarySelected]=React.useState(false)
    const [historySelected, setHistorySelected]=React.useState(false)
    const [yourVideosSelected, setYourVideosSelected]=React.useState(false)
    // const [watchLaterSelected, setWatchLaterSelected]=React.useState(false)
    // const [likedVideosSelected, setlikedVideosSelected]=React.useState(false)


    const onHomeContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setHomeSelected(true)
        setTrendingSelected(false)
       setSubscriptionSelected(false)
       console.log(homeSelected,setTrendingSelected)

    }
    const onTrendingContainerClick=(test)=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setTrendingSelected(true)
        setHomeSelected(false)
        setSubscriptionSelected(false)



    }
    const onSubsContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setSubscriptionSelected(true)
        setTrendingSelected(false)
        setHomeSelected(false)

    }
    const onLibraryContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setLibrarySelected(true)
        setSubscriptionSelected(false)
        setTrendingSelected(false)
        setHomeSelected(false)

    }
    const onHistoryContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setHistorySelected(true)
        setSubscriptionSelected(false)
        setTrendingSelected(false)
        setHomeSelected(false)
        setLibrarySelected(false)


    }
    const onYourVideosContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
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
                    <div>
                        Home
                        </div>
            
                    </div>
                <div id= {trendingSelected==true? "selectedTrendingContainer": "trendingContainer"} onClick={onTrendingContainerClick}>
                <div id={trendingSelected==true?"selectedTrendingIcon":"trendingIcon"}>
                    <WhatshotIcon/>                        
                         </div>
                    <div>
                        Trending
                        </div>
            
                    </div>
                <div id= {subscriptionSelected==true? "selectedSubscriptionContainer": "subscriptionContainer"} onClick={onSubsContainerClick}>
                <div id={subscriptionSelected==true?"selectedSubscriptionIcon":"subscriptionIcon"}>
                    <SubscriptionsIcon/>                        
                         </div>
                    <div>
                        Subscriptions
                        </div>
            
                    </div>
          
         
            <hr />
            <div id= {librarySelected==true? "selectedlibraryContainer": "libraryContainer"} onClick={onLibraryContainerClick}>
                    <div id={librarySelected==true?"selectedLibraryIcon":"libraryIcon"}>
                    <VideoLibrarySharpIcon/>                        
                         </div>
                    <div>
                        Library
                        </div>
            
                    </div>
                <div id= {historySelected==true? "selectedHistoryContainer": "historyContainer"} onClick={onHistoryContainerClick}>
                <div id={historySelected==true?"selectedHistoryIcon":"historyIcon"}>
                    <HistorySharpIcon/>                        
                         </div>
                    <div>
                        History
                        </div>
            
                    </div>
                <div id= {yourVideosSelected==true? "selectedYourVideosContainer": "yourVideosContainer"} onClick={onYourVideosContainerClick}>
                <div id={yourVideosSelected==true?"selectedYourVideosIcon":"yourVideosIcon"}>
                    <OndemandVideoOutlinedIcon/>                        
                         </div>
                    <div>
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
