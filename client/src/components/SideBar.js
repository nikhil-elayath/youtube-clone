import React from 'react'
import "../assests/styles/SideBar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


export default function SideBar() {
    const [homeSelected, setHomeSelected]=React.useState(true)
    const [trendingSelected, setTrendingSelected]=React.useState(false)
    const [subscriptionSelected, setSubscriptionSelected]=React.useState(false)


    const onHomeContainerClick=()=>{
        console.log("onHomeContainerClick",onHomeContainerClick)
        setHomeSelected(true)
        setTrendingSelected(false)
       setSubscriptionSelected(false)
       console.log(homeSelected,setTrendingSelected)

    }
    const onTrendingContainerClick=()=>{
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
          
         
            </div>
        </div>
    )
}
