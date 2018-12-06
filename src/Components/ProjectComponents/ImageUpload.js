import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedFile: null,
        name: '',
        email: '',
        style: "Van_style",
        uploadStatus: '',
        isJPG: false,
        }
    }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
        let fileName = event.target.files[0].name

        if (fileName.substr(fileName.length - 4) === 'jpeg' || fileName.substr(fileName.length - 3) === 'jpg') {
            this.setState({isJPG: true})
            console.log('image is in right format')
        } else {
            this.setState({isJPG: false})
            console.log('image is wrong!!!')
        }
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
            
            axios.post('https://07td6ekz5b.execute-api.us-west-2.amazonaws.com/prod/submit', formData, {
                onUploadProgress: progressEvent => {
                    console.log('uploading progress: ' + progressEvent.loaded / progressEvent.total)
                    }
                }).then(response =>{
                    console.log(response);
                    this.setState({uploadStatus: response.status});
                })
        });
        console.log('formData log: ' + formData)
      }
  
    render() {
      let name = this.state.name;
      let email = this.state.email;
      let selectedFile = this.state.selectedFile;
      let isJPG = this.state.isJPG && !!selectedFile;
      let isEnabled = name.length > 0 && email.length > 0 && !!selectedFile && isJPG;

      const styles = theme => ({
        margin: {
          margin: theme.spacing.unit,
        },
      });

      let uploadStatus = '';
      let statusSuccess = <div id='imageUploadStatus' style={{color: 'blue'}}> Uploaded Successfully! </div>
      let statusFail = <div id='imageUploadStatus' style={{color: 'red'}}> Something went wrong, please try again later. :)</div>

      if (this.state.uploadStatus === 200) {
        uploadStatus = statusSuccess;
      } else if (this.state.uploadStatus.length > 0) {
        uploadStatus = statusFail;
      }

      let fileRestrictionMessage = ''
      let fileRestrictionPassed = <div id='fileRestrictionWarning' style={{color: 'blue'}}> Image is in the correct format! Good job!</div>
      let fileRestrictionWarning = <div id='fileRestrictionWarning' style={{color: 'red'}}> Image has to be in .JPG ot .JPEG format</div>

      if (isJPG) {
        fileRestrictionMessage = fileRestrictionPassed
      } else {
        fileRestrictionMessage = fileRestrictionWarning
      }

      let imagePreview;
      if (!!selectedFile) {
          console.log(this.state.selectedFile);
          console.log(typeof this.state.selectedFile);
          imagePreview = <img src={this.state.selectedFile} alt="uploaded image"/>
      }

      return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={4}></Grid>
                <Grid>
                <div id='formInput'>
                    <InputLabel htmlFor="input-with-icon-adornment">Name:  </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        }
                        type="text" 
                        onChange={this.nameChangeHandler} 
                        placeholder="Sam Smith"
                    />
                    <div className="emptyLine"></div>

                    <InputLabel htmlFor="input-with-icon-adornment">Email:  </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                            <Email />
                            </InputAdornment>
                        }
                        type="email" 
                        onChange={this.emailChangeHandler} 
                        placeholder="sam@gmail.com"
                    />
                    <div className="emptyLine"></div>

                    <Input type="file" onChange={this.fileChangedHandler}/>     
                    <button disabled={!isEnabled} onClick={this.uploadHandler}>Submit</button>
                    {fileRestrictionMessage}
                    {uploadStatus}
                </div>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
            {imagePreview}
        </div>
      )
    }
  }
    
export default ImageUpload;