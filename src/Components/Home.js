import React, { Component } from 'react';
import homePic from '../static/homePic.png';
import blueBackground from '../static/blueBackground.jpg';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div>
        <p></p>
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
                <img id='hero-item' src={homePic} alt='hero-item'/>
            </Grid>
            <Grid item xs={3}>
                <p id = "HomeText1">Van Gogh Style Painted by AI</p>
                <p id = "HomeText2">Turn your selfie into Van Gogh Painting</p>
                <p id = "HomeText3"> Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                </p>
            </Grid>         
            <Grid item xs={1}></Grid>                
        </Grid>
        <div id='Background'>
            <img id='blueBackground' src={blueBackground} alt='Background' />
        </div>
    </div>
    );
  }
}

export default Home;