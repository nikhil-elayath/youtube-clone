const express = require("express");
const router = express.Router();
const {google}= require('googleapis');
// const pg = require("pg-promise")();
// const db = require("../db-init/dbConnection");
const config = require("config");
const youtubeAPIKey = config.get("youtubeAPIKey");
const currentDate= new Date()


// the api which connects with youtube's api and fetches data for the term 'cricket'
// orederd by date and all videos before the current date and time the api was called
router.post("/search", async (req, res, next) => {
  console.log(req.body)
    console.log("from search", req.body.data)
    let searchQuery=req.body.searchQuery
    console.log("searchQuery",searchQuery)


 
try {
      google.youtube('v3').search.list({
        key:youtubeAPIKey,
        part:'snippet',
        q:searchQuery,
        order:"relevance",
        // publishedBefore: currentDate,
        // location
    }).then(async(response)=>{
        console.log("response",response.data)

          res.status(200).json({
            status: 200,
            message: "videos fetched successfully",
            data: response.data,
          });
        

    
    }).catch((err)=>console.log("err",err))
  }
  catch(err)
  {
    console.log("err",err)
  }
  

})

  









  module.exports = router;