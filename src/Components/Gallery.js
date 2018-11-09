import React, { Component } from 'react';
import GalleryCard from './GalleryComponents/GalleryCard';
import Grid from '@material-ui/core/Grid';
import starryMe from '../static/starryMe.png';


class Gallery extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={24}>
            <Grid item xs={1}>
                                  
            </Grid>
            <Grid item xs={5}>
                <GalleryCard name = "C" date = "October 19, 2018" title = "Happy Days!" content = {starryMe}/>
            </Grid>
 
            <Grid item xs={5}>
                <GalleryCard name = "R" date = "November 10, 2018" title = "StarryMe" content = {starryMe}/>
            </Grid>
            <Grid item xs={1}>
 
            </Grid>                                              
        </Grid>      
      </div>
    );
  }
}

export default Gallery;