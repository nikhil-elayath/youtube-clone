import React from 'react'
import Search from './components/Search'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainSection from './components/HomeSection'
import SpecificVideo from './components/VideoSpecific'
import SearchResultsPage from './components/SearchResultsPage'
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";






export default function App(props) {
  console.log("from app",props)
  return (
    <Provider store={store}>
<Router>
  <Switch>
  <Route 
  exact path="/">
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
          
      </Route>

       <Route exact path="/search">
    <div>
       <div id="header">
            <Header/>
            
        </div>
        <div  id="appMainContainer">
        <div>
          <SideBar/>

          </div>
          <div>
            <SearchResultsPage />
            </div>
          </div>
    </div>
      </Route>

      <Route exact path="/play-video/:id">
    <div>
       <div id="header">
            <Header/>
            
        </div>
        <div  id="appMainContainer">
        <div>
          <SideBar/>

          </div>
          <div>
            <SpecificVideo/>
            </div>
          </div>
    </div>
      </Route> 
  </Switch>
  </Router>
 
    </Provider>
  )
}
