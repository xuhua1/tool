import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  DraggerF,
  DraggerManager
} from '../../utils';
//const userId = "12";
class DraggerFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      fileList:null,
      fManager: false,
      allFile: [
        {name:'22222222222212.txt', url: '1', id: '3'},
        {name:'12.txt', url: '2', id: '4'},
        {name:'12.txt', url: '3', id: '2'},
        {name:'12.txt', url: '4', id: '5'}
      ]
    }
  }
  toFM = (e)=>{
    console.log(this.props.match);
    this.props.history.push(`${this.props.match.url}/manager`);
  }
  handleChangeUploadFile = ({fileList})=>{
    this.setState({
      fileList,
    })
  }
  uploadFile = (file)=>{
    console.log(file);
  }
  render(){
    const props = {
      name: 'file',
      multiple: true,
      customRequest: this.uploadFile,
      onChange: this.handleChangeUploadFile,
      fileList: this.state.fileList,
      toFM: this.toFM,
    };
    const dMProps = {
      value: this.state.allFile,
    }
    return (
      <React.Fragment>
        <Route 
          path='/commen/file/:id' 
          exact
          render={() => (<DraggerF {...props}/>)}
        />
        <Route 
          path='/commen/file/:id/manager' 
          render={() => (<DraggerManager {...dMProps}/>)}
        />
      </React.Fragment>
    )
  }
}
export default DraggerFile;