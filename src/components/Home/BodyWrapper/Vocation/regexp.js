import React, { Component } from 'react';
import { Input, Button } from 'antd';
import {
  DrawCanvas,
} from '../utils';
import {
  RegexpWrapper, Canvas
} from './style';
const { TextArea } = Input;
class Regexp extends Component {
  constructor(props){
    super(props);
    this.state = {
      regExp: '',
    }
  }
  chInputValue = (e)=>{
    let val = e.target.value;
    this.setState({
      regExp: val,
    })
  }
  render(){
    return (
      <RegexpWrapper>
        <TextArea autosize={{minRows: 1, maxRows: 6}}></TextArea>
        <Input placeholder="selector" onChange={this.chInputValue} />
        <Canvas>
          <DrawCanvas regVal={this.state.regExp}></DrawCanvas>
        </Canvas>
      </RegexpWrapper>
    )
  }
}
export default Regexp;