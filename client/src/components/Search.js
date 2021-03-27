import React from 'react'
import {search} from '../actions/Search'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Route, Switch , Redirect, useHistory} from "react-router-dom";



export default function Search(props) {
    const history = useHistory();

    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    console.log("printing store", store)

    const [searchQuery, setSearchQuery]=React.useState('')
    const onTextEnter=(enteredText)=>{
        setSearchQuery(enteredText.target.value)
    }

    const onSearchSubmit=async(event)=> {
     
        console.log('An essay was submitted: ',searchQuery);
        // avoiding the page to be refreshed
        
        event.preventDefault();
        // call to action
        let data={searchQuery:searchQuery}
        await dispatch(search(data))
history.push( {pathname: "/search"
    })
        

      }

    return (
        <div>
            <form onSubmit={onSearchSubmit}> 
            <div style={{display:"flex", alignItems:"center", border:"1px solid #CCCDCD"}}>
                <input type="text" name="search" placeholder="Search" onChange={onTextEnter} style={{ width:"250%", height:"30px", flex:1, alignItems:"center", border:"none", paddingLeft:"10px"}}/>
                <div id="searchIcon" onClick={onSearchSubmit}>
                <SearchIcon />
                </div>
                </div>
                
                
            </form>
        </div>
    )
}
