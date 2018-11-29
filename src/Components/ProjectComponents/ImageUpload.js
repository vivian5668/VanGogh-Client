import React from 'react';
import axios from 'axios';

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedFile: null,
        name: '',
        email: '',
        style: "Van_style",
        uploadStatus: '',
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
    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    uploadHandler = () => {
        let formData = {}
        this.getBase64(this.state.selectedFile, (result) => {
            console.log(result.split(',')[1])
            formData = {
                "content_image_encoding": "data:image/jpeg;base64," + result.split(',')[1],
                "style_image": this.state.style,
                "email": this.state.email,
                "name": this.state.name
            }
            console.log("resule")
            console.log(formData)
            axios.post('https://f43rz8mmc3.execute-api.us-west-2.amazonaws.com/prod/submit', formData, {
                onUploadProgress: progressEvent => {
                    console.log('uploading progress: ' + progressEvent.loaded / progressEvent.total)
                    }
                }).then(response =>{
                    console.log(response);
                    this.setState({uploadStatus: response.data});
                })
        });
        console.log('formData log: ' + formData)
      }
  
    render() {
      let name = this.state.name;
      let email = this.state.email;
      let selectedFile = this.state.selectedFile;
      let isEnabled = name.length > 0 && email.length > 0 && !!selectedFile;
      return (
        <div>
            <label>Your name:</label>
            <input type="text" onChange={this.nameChangeHandler} placeholder="name"/>
            <br />
            <label>Your email address:</label>
            <input type="email" onChange={this.emailChangeHandler} placeholder="email"/>
            <br />
            <input type="file" onChange={this.fileChangedHandler} />
            <button disabled={!isEnabled} onClick={this.uploadHandler}>Submit</button>
            <div id='imageUploadStatus' style={{color: 'red'}}> {this.state.uploadStatus} </div>
        </div>
      )
    }
  }
    
export default ImageUpload;