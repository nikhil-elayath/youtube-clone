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
                    <div>
                    <HomeIcon/>                        
                         </div>
                    <div>
                        Home
                        </div>
            
                    </div>
                <div id="trendingContainer">
                    <div>
                    <WhatshotIcon/>                        
                         </div>
                    <div>
                        Trending
                        </div>
            
                    </div>
                <div id="subscriptionContainer">
                    <div>
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
