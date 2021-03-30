import React from 'react'
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
  console.log("from app new",process.env.PUBLIC_URL)
  return (
    <Provider store={store}>
<Router>
  <Switch>
  <Route 
//  basename={window.location.pathname || ''}
  exact path="/"
  render={()=>
  <div>
    <div id="header">
         <Header/>
         
     </div>
     <div  id="appMainContainer">
     <div >
       <SideBar/>

       </div>
       <div>
         <MainSection/>
         </div>
       </div>
 </div>}
  
  >

    
    
          
      </Route>

       <Route 
//  basename={window.location.pathname || ''}

       exact path="/search"

       render={()=>
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

       }
       
       
       >
   
      </Route>

      <Route   
      //  basename={window.location.pathname || ''}

  exact path="/play-video/:id">
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
