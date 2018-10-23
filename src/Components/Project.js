import React, {Component} from 'react';
import ImageCrop from './ImageCrop';
import WebcamCapture from './WebCam';
import {Glyphicon, Tabs, Tab, Nav, Grid, Row, Col, NavItem, Button} from 'react-bootstrap';
import profile from './profile.png';
import './ImageCrop.css';
import axios from 'axios'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uploadClicked: false,
        captureClicked: false,
        image: profile,
        uploadSucceeded: false,
    };
    this.child = React.createRef()
    this.handleNewImage = this.handleNewImage.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.handleCapture = this.handleCapture.bind(this)
    }

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] })
  }

  handleUpload() {
    this.setState({
        uploadClicked: true,
        captureClicked: false,
        uploadSucceeded: false,
        camPicReadyToCrop: false,
        image: profile,
    })
  }

  handleSave = () => {
    this.child.current.handleSave();
    this.setState({
        uploadSucceeded: true
    })
    if (this.state.image===null){
      var fd = new FormData()
      fd.append('image', profile)
    }
    else{
      var fd = new FormData()
      fd.append('image', this.state.image)
    }   

    // fd.append();
    //change this api endpoint as needed
    axios.post('/api/picuploads/', fd)
      .then(res => {
        console.log(res)
      })
  }

  render() {
    let uploadButton = 
          <Col sm={4}>
               <div id="upload_button">
                  <label onClick={this.handleUpload}>
                    <input className='input' name="newImage" type="file" onChange={this.handleNewImage}/>
                    <span className="btn btn-primary1"><Glyphicon glyph="level-up" />&nbsp;&nbsp;&nbsp;&nbsp;Upload a Photo</span>
                  </label>
                  <br/>
                  <label onClick={this.handleCapture}>
                    <input className='input' type="button" />
                    <span className="btn btn-primary1"><Glyphicon glyph="camera" />&nbsp;&nbsp;&nbsp;&nbsp;{this.state.photoTakingStatus}</span>
                  </label>  
                  <br/>                     
                  <label className='submitButton'>
                    <input className='input' type="button" onClick={this.handleSave} value="Preview" />
                    <span className="btn btn-primary1"><Glyphicon glyph="user" />&nbsp;&nbsp;&nbsp;&nbsp;Use this Picture</span>
                  </label>  
                </div>              
                <br />
                <div className='uploadMsg'>
                  {this.state.uploadSucceeded? <p>Uploaded Successfully</p> : null}
                </div>
            </Col>

    if (this.state.uploadClicked) {
        return (
          <div>
              <Row>
                <Col sm={8}>
                  <ImageCrop ref={this.child} image={this.state.image} />
                </Col>
                {uploadButton}
              </Row>
          </div>
        )
      }

  }
}

export default Project;