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

// getting search results from youtube api
// calling the api every 10 seconds
 
      google.youtube('v3').search.list({
        key:youtubeAPIKey,
        part:'snippet',
        q:searchQuery,
        order:"date",
        publishedBefore: currentDate
    }).then(async(response)=>{
        console.log("response",response.data.items)
        var video_title
        var video_description
        var video_published_date
        var video_thumbnail_url;
    
    }).catch((err)=>console.log("err",err))
  

})

  // search api
  // @param
  //   1) keyword-> string
  // the keyword is the string which will be used to search the data for in the table against the columns
  // video title and video description
  router.post("/search", async (req, res, next) => {
    let keyword = req.body.keyword;
    try {
 
      const resultForVideoSearch = await db.any(
        `select * from youtube_videos where video_title ILIKE '%${keyword}%'
        union
        select * from youtube_videos where video_description ILIKE '%${keyword}%'
        `
      );
  
      res.status(200).json({
        status: 200,
        message: "videos fetched successfully",
        data: resultForVideoSearch,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 400,
        message: "videos could not be fetched",
      });
    }
  });
  
  
  // getting all the videos from the db in a reverse order
  router.get("/all-videos", async (req, res, next) => {
    try {

      // implementing pagination
      let {page, size} = req.query
      if(!page)
      {
        page =1
      } 
      if(!size)
      {
        size=2
      }
      const limit = parseInt(size)
      const allVideos = await db.any(
        `select * from youtube_videos ORDER BY youtube_videos_id DESC LIMIT ${limit} `
      );
  
      res.status(200).json({
        status: 200,
        message: "all Videos fetched successfully",
        page:page,
        size:size,
        data: allVideos,

      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 400,
        message: "videos could not be fetched",
      });
    }
  });









  module.exports = router;