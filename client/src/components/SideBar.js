import React from 'react'
import "../assests/styles/SideBar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


export default function SideBar() {
    return (
        <div>
            <div id="mainContainer">
                <div id="homeContainer">
                    <div id="homeIcon">
                    <HomeIcon/>                        
                         </div>
                    <div>
                        Home
                        </div>
            
                    </div>
                <div id="trendingContainer">
                <div id="trendingIcon">
                    <WhatshotIcon/>                        
                         </div>
                    <div>
                        Trending
                        </div>
            
                    </div>
                <div id="subscriptionContainer">
                <div id="subIcon">
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
