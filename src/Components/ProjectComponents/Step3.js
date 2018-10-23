import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
            <p>Step3</p>
            <Grid container spacing={12}>
                <Grid item xs={3} onClick = {this.props.onClick}>

                        {this.props.linkButtonToNextPage}

                </Grid>         
                <Grid item xs={1}>

                </Grid>                
            </Grid>
        </div>
        );
    }
}

export default Step3;