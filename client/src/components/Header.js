import React from 'react'
import Search from "./Search"
import { useSelector, useDispatch } from 'react-redux'

import "../assests/styles/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import {search} from '../actions/Search'

import { BrowserRouter as Router, Route, Switch , Redirect, useHistory, useLocation} from "react-router-dom";

export default function Header() {
    const history = useHistory();
    const [searchSelected, setSearchSelected]=React.useState(false)
    const [searchQuery, setSearchQuery]=React.useState('')

    const dispatch = useDispatch();
    const store = useSelector((state) => state);

    const onTextEnter=(enteredText)=>{
        console.log("enteredText",enteredText)
        setSearchQuery(enteredText.target.value)
    }



    const onYoutubeLogoClick=()=>{
        console.log("onYoutubeLogoClick")
        history.push( {pathname: "/"
    })
}
    const searchButtonClicked=()=>{
        console.log("onYoutubeLogoClick")
        setSearchSelected(true)
    
        

    }
    const onSearchSubmit=async(event)=> {
     
        console.log('An essay was submitted: ',searchQuery);
        // avoiding the page to be refreshed
        
        event.preventDefault();
        // call to action
        let data={searchQuery:searchQuery}
        await dispatch(search(data))
     
history.push( "/search"
    )
        

      }


    return (
        <div>
            {/* {searchSelected==false ? */}
            <div id='headerMainContainer'>
                <div id="header__left">
                    <div id="drawerLogo">
                    <MenuIcon/>
                    </div>
                    <img id="header__logo" onClick={()=>onYoutubeLogoClick()}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                    />
                    </div>

                <div id="header__center" onClick={()=>searchButtonClicked()}>
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
                {searchSelected==true&&
                <div id="mobileSearchField">
                <form onSubmit={onSearchSubmit}> 

                <input type="text" name="search" placeholder="Seadddrch" onChange={onTextEnter} style={{ width:"260%", height:"30px", alignItems:"center", border:"1px solid #CCCDCD", paddingLeft:"10px"}}/>
            </form>
            </div>
}
        </div>
    )
}
