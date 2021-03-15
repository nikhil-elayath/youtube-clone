import React from 'react'
import {search} from '../actions/Search'

export default function Search() {
    const [searchQuery, setSearchQuery]=React.useState('dd')

    const onSearchSubmit=(searchQuery)=>{
        console.log("onSearchSubmit",searchQuery)
    }







    return (
        <div>
            <form>
                <input type="text" name="search" />
                
                <input type="submit" value="Submit" onSubmit={onSearchSubmit} />
            </form>
        </div>
    )
}
