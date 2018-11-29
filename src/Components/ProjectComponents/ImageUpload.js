import React from 'react';
import axios from 'axios';

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
        //const formData = new FormData()
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
                    console.log(response)}
                )
            // image64Bit = result.split(',')[1];
        });
        // let image64Bit = base64Img.base64(this.state.selectedFile, function(err, data) {
        //     console.log('error when convert image to 64 bits: ' + err);
        // })
        // formData.append('content_image_encoding', image64Bit)
        // formData.append('style_image', this.state.style)
        // formData.append('email', this.state.email)
        // formData.append('name', this.state.name)
        // const formData = {
        //     "content_image_encoding": image64Bit,
        //     "style_image": this.state.style,
        //     "email": this.state.email,
        //     "name": this.state.name
        // }
        
        console.log(formData)


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