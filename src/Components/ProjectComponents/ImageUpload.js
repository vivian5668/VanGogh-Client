import React, {Component} from 'react';
import axios from 'axios';
base64Img = require('base64-img');

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedFile: null,
        name: null,
        email: null,
        style: "Van_style",
        }
    }
    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
      }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value})
    }

    uploadHandler = () => {
        const formData = new FormData()
        let image64Bit = image64Bit.base64(this.state.selectedFile, function(err, data) {
            console.log('error when convert image to 64 bits: ' + err);
        })
        formData.append('content_image_encoding', this.state.image64Bit)
        formData.append('style_image', this.state.style)
        formData.append('email', this.state.email)
        formData.append('name', this.state.name)
        
        axios.post('my-domain.com/file-upload', formData, {
        onUploadProgress: progressEvent => {
            console.log('uploading progress: ' + progressEvent.loaded / progressEvent.total)
            }
        })
      }
  
    render() {
      return (
        <div>
            <label>Your name:</label>
            <input type="text" onChange={this.nameChangeHandler} placeholder="name"/>
            <br />
            <label>Your email address:</label>
            <input type="email" onChange={this.emailChangeHandler} placeholder="email"/>
            <br />
            <input type="file" onChange={this.fileChangedHandler} />
            <button onClick={this.uploadHandler}>Upload!</button>
        </div>
      )
    }
  }
    
export default ImageUpload;