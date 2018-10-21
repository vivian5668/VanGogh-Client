import React, { Component } from 'react';
import Gallery from './Gallery';
import Home from './Home';
import Project from './Project';
import NavButtons from './NavButtons';
import Grid from '@material-ui/core/Grid';
import { 
    BrowserRouter as Router,
    Route,
    Link 
  } from 'react-router-dom';



class MainRouter extends Component {
  render() {
    return (
        <Router>
        <div>
            <nav>
            <Grid container spacing={12}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={1}>
                    <Link style={{ textDecoration: 'none' }} to='/'><NavButtons label = 'Home' /></Link>
                </Grid>
                <Grid item xs={2} align="center">
                    <Link style={{ textDecoration: 'none' }} to='/gallery'><NavButtons label = 'Gallery' /></Link>
                </Grid> 
                <Grid item xs={1}>
                    <Link style={{ textDecoration: 'none' }} to='/project'><NavButtons label = 'Project' /></Link> 
                </Grid>
                <Grid item xs={4}>

                </Grid>                                              
            </Grid>  
            </nav>
            <Route exact path = '/' component={Home} />
            <Route path = '/gallery' component={Gallery} />
            <Route path = '/project' component={Project}/>
        </div>
        </Router>
    );
  }
}

export default MainRouter;


