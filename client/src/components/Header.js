import React from 'react'
import Search from "./Search"
import "../assests/styles/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";

export default function Header() {
    const history = useHistory();


    const onYoutubeLogoClick=()=>{
        console.log("onYoutubeLogoClick")
        history.push( {pathname: "/"
    })
        

    }


    return (
        <div>
            <div id='headerMainContainer'>
                <div id="header__left">
                    <div id="drawerLogo">
                    <MenuIcon/>
                    </div>
                    <img id="header__logo" onClick={()=>onYoutubeLogoClick()}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                    />
                    </div>
                <div id="header__center">
                <Search/>
                    </div>
                <div id="header__rightContainer">
                    <div id="header__rightContainerIcon">
                    <div id="appsIcon">

                <VideoCallIcon/>
                </div>
                </div>
                
                <div id="header__rightContainerIcon">
                    <div id="appsIcon">
                    <AppsIcon/>
                    </div>
                    </div>
                    <div id="header__rightContainerIcon">
                    <div id="appsIcon">

                    <NotificationsIcon/>
                    </div>
                    </div>
                        
                    <div id="header__rightContainerIcon">
                        <PersonIcon/>
                </div>
                </div>
                </div>
            
        </div>
    )
}
