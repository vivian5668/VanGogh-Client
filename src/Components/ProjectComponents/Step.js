import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Step extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
            <p>Step {this.props.step}</p>
            <Grid container spacing={24} >
                <Grid item xs={3}>
                     {this.props.button}

                </Grid>         
                <Grid item xs={1}>

                </Grid>                
            </Grid>
        </div>
        );
    }
}

export default Step;