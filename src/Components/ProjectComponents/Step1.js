import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div onClick = {this.props.onClick}>
            <p>Step 1</p>
            <Grid container spacing={12}>
                <Grid item xs={3}>

                        {this.props.linkButtonToNextPage}

                </Grid>         
                <Grid item xs={1}>

                </Grid>                
            </Grid>
        </div>
        );
    }
}

export default Step1;