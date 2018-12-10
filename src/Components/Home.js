import React, { Component } from 'react';
import homePic from '../static/homePic.png';
import blueBackground from '../static/blueBackground.jpg';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
                <img id='hero-item' src={homePic} alt='hero-item'/>
            </Grid>
            <Grid item xs={4}>
                <div id='homePageTextBlock'>
                    <p id = "HomeText1">Van Gogh Style Painted by AI</p>
                    <p id = "HomeText2">Turn your selfie into Van Gogh Painting</p>
                    <p id = "HomeText3">This is a serverless React application that can turn your selfie
                    into Van Gogh Painting style using a pretrained VGG-19 Convolutional Neural Network. This
                    model is implemented using Pytorch. 
                    <hr/>
                    The application uses micro-services implemented by AWS native tech stacks, including:
                    Fargate, DynamoDB, API Gateway, Lambda, SES(simple email service), SNS(simple notification service),
                    and S3.
                    <br/>
                    <br/>
                    Read More here:
                    <br/>
                    <a href="https://github.com/vivian5668/VanGogh-Client">Github Readme and FrontEnd</a>
                    <br/>
                    <a href="https://github.com/vivian5668/VanGogh-Service">Github Data Science model </a>
                    </p>
                    </div>
            </Grid>         
        </Grid>
        <div id='Background'>
            <img id='blueBackground' src={blueBackground} alt='Background' />
        </div>
    </div>
    );
  }
}

export default Home;