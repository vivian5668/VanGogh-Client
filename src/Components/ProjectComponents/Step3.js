import React, { Component } from 'react';
import homePic from '../static/homePic.png';
import Grid from '@material-ui/core/Grid';


class Step3 extends Component {
  render() {
    return (
      <div>
        <p></p>
        <Grid container spacing={12}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={7}>
                <div>
                    <img width={580} src={Step3Pic} />
                </div>
            </Grid>
            <Grid item xs={3}>
                <p id = "Step3Text1">Van Gogh Painting Your Mood</p>
                <p id = "Step3Text2">Turn your picture into Van Gogh Painting</p>
                <p id = "Step3Text3"> Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                </p>
            </Grid>         
            <Grid item xs={1}>

            </Grid>                
        </Grid>
    </div>
    );
  }
}

export default Step3;