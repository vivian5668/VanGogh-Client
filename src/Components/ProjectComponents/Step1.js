import React, { Component } from 'react';
import homePic from '../static/homePic.png';
import Grid from '@material-ui/core/Grid';


class Step1 extends Component {
  render() {
    return (
      <div>
        <p></p>
        <Grid container spacing={12}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={7}>
                <div>
                    <img width={580} src={Step1Pic} />
                </div>
            </Grid>
            <Grid item xs={3}>

            </Grid>         
            <Grid item xs={1}>

            </Grid>                
        </Grid>
    </div>
    );
  }
}

export default Step1;