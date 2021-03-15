import React from 'react'
import {search} from '../actions/Search'
import {  useDispatch } from 'react-redux'


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
        dispatch(search(searchQuery))
        event.preventDefault();

      }

    return (
        <div>
            <form onSubmit={onSearchSubmit}> 
                <input type="text" name="search" onChange={onTextEnter}/>
                
                <input type="submit" value="Submit"  />
            </form>
        </div>
    )
}
