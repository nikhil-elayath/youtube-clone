import React from 'react'
import Search from "./Search"
import "../assests/styles/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
export default function Header() {
    return (
        <div>
            <div id='headerMainContainer'>
                <div id="header__left">
                    <MenuIcon/>
                    <img id="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                    />
                    </div>
                <div id="header__center">
                <Search/>
                    </div>
                <div id="header__rightContainer">
                    <div id="header__rightContainerIcon">
                <VideoCallIcon/>
                </div>
                
                <div id="header__rightContainerIcon">
                    <AppsIcon/>
                    </div>
                    <div id="header__rightContainerIcon">
                    <NotificationsIcon/>
                    </div>
                        
                    <div id="header__rightContainerIcon">
                        <PersonIcon/>
                </div>
                </div>
                </div>
            
        </div>
    )
}
