import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Step1 from './ProjectComponents/Step1';
import Step2 from './ProjectComponents/Step2';
import Step3 from './ProjectComponents/Step3';
//import Step2 from './ProjectComponents/Step2';
//import Step3 from './ProjectComponents/Step3';
import NavButtons from './NavButtons';
import { 
    BrowserRouter as Router,
    Route,
    Link 
  } from 'react-router-dom';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toStep2ButtonClicked: false,
        toStep3ButtonClicked: false,
        toStep1ButtonClicked: true,
    };
    this.toStep2ButtonClick = this.toStep2ButtonClick.bind(this);
    this.toStep3ButtonClick = this.toStep3ButtonClick.bind(this);
    this.toStep1ButtonClick = this.toStep1ButtonClick.bind(this);
  }

  toStep2ButtonClick(event) {
    this.setState({
      toStep2ButtonClicked: true,
      toStep3ButtonClicked: false,
      toStep1ButtonClicked: false,
   });
  }

  toStep3ButtonClick(event) {
    this.setState({
      toStep2ButtonClicked: false,
      toStep3ButtonClicked: true,
      toStep1ButtonClicked: false,
   });
  }

  toStep1ButtonClick(event) {
    this.setState({
      toStep2ButtonClicked: false,
      toStep3ButtonClicked: false,
      toStep1ButtonClicked: true,
   });
  }

  render() {
    let toStep2Button = 
      <Router>
        <div>
          <Link style={{ textDecoration: 'none' }} to='/project/step2'><NavButtons label = 'To Step2' onClick = {this.toStep2ButtonClick} /></Link>
          <Route exact path = '/project/step2' component={Step2} />
        </div>
      </Router>

    let toStep3Button = 
          <Router>
            <div>
              <Link style={{ textDecoration: 'none' }} to='/project/step3'><NavButtons label = 'To Step3' onClick = {this.toStep3ButtonClick} /></Link>
              <Route exact path = '/project/step3' component={Step3} />
            </div>
          </Router>

    let toStep1Button = 
          <Router>
            <div>
              <Link style={{ textDecoration: 'none' }} to='/project/step1'><NavButtons label = 'To Step1' onClick = {this.toStep1ButtonClick}/></Link>
              <Route exact path = '/project/step1' component={Step1} />
            </div>
          </Router>

    if (this.state.toStep1ButtonClicked) {
      return (
        <div>
          <Step1 linkButtonToNextPage = {toStep2Button} />
        </div>
      )
    }
    else if (this.state.toStep2ButtonClicked) {
      return (
        <div>
          <Step2 linkButtonToNextPage = {toStep3Button} />
        </div>
      )
    }    
    else if (this.state.toStep3ButtonClicked) {
      return (
        <div>
          <Step3 linkButtonToNextPage = {toStep1Button} />
        </div>
      )
    } 
  }
}

export default Project;