import React from 'react'
import Search from './components/Search'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainSection from './components/MainSection'
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";





export default function App() {
  return (
    <Provider store={store}>

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
    </Provider>
  )
}
