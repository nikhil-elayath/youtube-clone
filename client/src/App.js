import React from 'react'
import Search from './components/Search'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/SideBar'
import "./App.css";




export default function App() {
  return (
    
    <div>
       <div>
            <Header/>
            
        </div>
        <div  id="appMainContainer">
        <div>
          <SideBar/>

          </div>
          <div>
            Main videos
            </div>
          </div>
    </div>
  )
}
