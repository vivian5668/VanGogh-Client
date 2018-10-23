import React, { Component } from 'react';
import GalleryCard from './GalleryCard';
import Grid from '@material-ui/core/Grid';



class Gallery extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={24}>
            <Grid item xs={1}>
                                  
            </Grid>
            <Grid item xs={5}>
                <GalleryCard />
            </Grid>
 
            <Grid item xs={5}>
                <GalleryCard />
            </Grid>
            <Grid item xs={1}>
 
            </Grid>                                              
        </Grid>      
      </div>
    );
  }
}

export default Gallery;