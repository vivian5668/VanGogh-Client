import React, { Component } from 'react';
import GalleryCard from './GalleryComponents/GalleryCard';
import Grid from '@material-ui/core/Grid';
import starryMeResult from '../static/starryMe.png';
import starryMeStyle from '../static/starryMeStyle.png';
import starryMeContent from '../static/starryMeContent.png';
import content_happy_man from '../static/content_happy_man.jpeg';
import result_happy_man from '../static/result_happy_man.jpg';
import style_happy_man from '../static/style_happy_man.jpg';
import content_cumberbatch from '../static/content_cumberbatch.jpg';
import result_cumberbatch from '../static/result_cumberbatch.png';
import style_cumberbatch from '../static/style_cumberbatch.jpg';
import result_cumberbatch1 from '../static/result_cumberbatch1.png';
import content_cumberbatch1 from '../static/content_cumberbatch1.jpg';

class Gallery extends Component {

  render() {
    let intro1 = "Starry Stars is one of Van Vogh's moust famous paintings, and it is loved by many. I transformed my picture into Van Vogh's style and I love how it turned out!!"
    let intro2 = "The style painting was a portrait of a women, painted by Van Gogh in 1885. It has been recreated by a smile!"
    let intro3 = "Love Benedict! My favourite Sherlock!!!!"
    let intro4 = "Painted by AI? Maybe Benedict will be amazed himself!"
    return (
      <div>
        <Grid container spacing={24}>
            <Grid item xs={1}>
                                  
            </Grid>
            <Grid item xs={5}>
                <GalleryCard name = "C" date = "October 19, 2018" title = "Walls with Stars" result = {starryMeResult} style = {starryMeStyle} content = {starryMeContent} intro = {intro1}/>
            </Grid>
 
            <Grid item xs={5}>
                <GalleryCard name = "R" date = "November 10, 2018" title = "Cumberbatch in style" result = {result_cumberbatch1} style = {style_cumberbatch} content = {content_cumberbatch1} intro = {intro4}/>
            </Grid>
            <Grid item xs={1}>
 
            </Grid>                                              
        </Grid>  
        <Grid container spacing={24}>
            <Grid item xs={1}>
                                  
            </Grid>
            <Grid item xs={5}>
                <GalleryCard name = "C" date = "October 19, 2018" title = "Van Gogh vs. Sherlock" result = {result_cumberbatch} style = {style_cumberbatch} content = {content_cumberbatch} intro = {intro3}/>
            </Grid>
 
            <Grid item xs={5}>
                <GalleryCard name = "R" date = "November 10, 2018" title = "Happy with Painted Smile" result = {result_happy_man} style={style_happy_man} content={content_happy_man} intro = {intro2}/>
            </Grid>
            <Grid item xs={1}>
 
            </Grid>                                              
        </Grid>      
      </div>
    );
  }
}

export default Gallery;