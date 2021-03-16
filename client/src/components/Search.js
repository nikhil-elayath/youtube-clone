import React from 'react'
import {search} from '../actions/Search'
import {  useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';


export default function Search() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery]=React.useState('')
    const onTextEnter=(enteredText)=>{
        setSearchQuery(enteredText.target.value)
    }

    const onSearchSubmit=(event)=> {
     
        console.log('An essay was submitted: ',searchQuery);
        // avoiding the page to be refreshed
        
        // call to action
        let data={searchQuery:searchQuery}
        dispatch(search(data))
        event.preventDefault();

      }

    return (
        <div>
            <form onSubmit={onSearchSubmit}> 
            <div style={{display:"flex", alignItems:"center", border:"1px solid black"}}>
                <input type="text" name="search" placeholder="Search" onChange={onTextEnter} style={{ width:"250%", height:"30px", flex:1, alignItems:"center", border:"none"}}/>
                <div id="searchIcon">
                <SearchIcon />
                </div>
                </div>
                
                
            </form>
        </div>
    )
}
