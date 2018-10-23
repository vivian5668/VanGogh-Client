import React, {Component} from 'react';
import axios from 'axios';

import Step from './ProjectComponents/Step';
import NavButtons from './NavButtons';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButtonClicked: 0
    };
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(event) {
    this.setState({
      currentButtonClicked: (this.state.currentButtonClicked + 1) % 3
    })
  }

  render() {
    let nextButton = 
      <div>
          <NavButtons label = {'Next Step'} onClick = {this.buttonClick} />
      </div>
    let startOverButton = 
    <div>
        <NavButtons label = {'Start Over'} onClick = {this.buttonClick} />
    </div>

    if (this.state.currentButtonClicked !== 2) {
      return (
          <div>
            <Step step = {this.state.currentButtonClicked + 1}  button = {nextButton} />
          </div>
        )
      }
    else {
      return (
        <div>
          <Step step = {this.state.currentButtonClicked + 1}  button = {startOverButton} />
        </div>
        )
      }
    }
  }
  
export default Project;