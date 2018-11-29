import React, {Component} from 'react';
import ImageUpload from './ProjectComponents/ImageUpload';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {


      return (
        <div>
          <ImageUpload />
        </div>
        )

    }
  }
  
export default Project;

