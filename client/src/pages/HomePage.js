import React from 'react'
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import MainSection from "../components/HomeSection"

export default function HomePage() {
    return (
        <div>
        <div id="header">
             <Header/>
             
         </div>
         <div  id="appMainContainer">
         <div>
           <SideBar/>
 
           </div>
           <div>
             <MainSection/>
             </div>
           </div>
     </div>
    )
}
