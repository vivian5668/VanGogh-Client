import React, { Component } from 'react';
import GalleryCard from './GalleryComponents/GalleryCard';
import Grid from '@material-ui/core/Grid';
import starryMeResult from '../static/starryMe.png';
import starryMeStyle from '../static/starryMeStyle.png';
import starryMeContent from '../static/starryMeContent.png';


class Gallery extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={24}>
            <Grid item xs={1}>
                                  
            </Grid>
            <Grid item xs={5}>
                <GalleryCard name = "C" date = "October 19, 2018" title = "Happy Days!" result = {starryMeResult} style = {starryMeStyle} content = {starryMeContent}/>
            </Grid>
 
            <Grid item xs={5}>
                <GalleryCard name = "R" date = "November 10, 2018" title = "StarryMe" result = {starryMeResult}/>
            </Grid>
            <Grid item xs={1}>
 
            </Grid>                                              
        </Grid>  
        <Grid container spacing={24}>
            <Grid item xs={1}>
                                  
            </Grid>
            <Grid item xs={5}>
                <GalleryCard name = "C" date = "October 19, 2018" title = "Happy Days!" result = {starryMeResult} style = {starryMeStyle} content = {starryMeContent}/>
            </Grid>
 
            <Grid item xs={5}>
                <GalleryCard name = "R" date = "November 10, 2018" title = "StarryMe" result = {starryMeResult}/>
            </Grid>
            <Grid item xs={1}>
 
            </Grid>                                              
        </Grid>      
      </div>
    );
  }
}

export default Gallery;