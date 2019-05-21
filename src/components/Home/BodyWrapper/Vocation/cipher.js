import React, {Component} from 'react';
import CryptoJS from 'crypto-js';
//参考: https://cryptojs.gitbook.io/docs/
import {
  Input, Alert, Radio, Row, Col, Button
} from 'antd';
import {
  CipherWrapper,
} from './style';
class Cipher extends Component {
  constructor(props){
    super(props);
    this.state = {
      alertValue: [],
      inputValue: '',
      cipherType: 'md5',
    }
  }
  radioChange = (e)=>{
    const { inputValue } = this.state;
    const alertArr = this[e.target.value](inputValue);
    console.log(e.target.value,alertArr); 
    this.setState({
      alertValue: alertArr,
      cipherType: e.target.value,
    })
  }
  inputChange = (e)=>{
    const alertArr = this[this.state.cipherType](e.target.value);
    this.setState({
      alertValue: alertArr,
      inputValue: e.target.value,
    });
  }
  md5 = (str)=>{
    if(!str) return [];
    return [{type:"md5", value: CryptoJS.MD5(str).toString()}];
  }
  sha1 = (str)=>{
    if(!str) return [];    
    return [{type:"sha1", value: CryptoJS.SHA1(str).toString()}];
  }
  base64 = (str)=>{
    if(!str) return [];   
    const hash = CryptoJS.SHA256(str);
    const base64 = hash.toString(CryptoJS.enc.Base64);
    const hex = hash.toString(CryptoJS.enc.Hex);
    return [{type:"base64",value:base64},{type:"hex",value:hex}];
  }
  render(){
    return (
      <CipherWrapper>
        <Row>
          <Col offset={3} span={14}>
            <Radio.Group onChange={this.radioChange} defaultValue="md5" buttonStyle="solid">
              <Radio.Button value="md5">MD5</Radio.Button>
              <Radio.Button value="sha1">SHA1</Radio.Button>
              <Radio.Button value="base64">Base64</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row>
        <Col offset={3} span={14}>
            <Input onChange={this.inputChange}/>
            {
              this.state.alertValue.map((item,index)=>{
                return <Alert message={ `${item.type} : ${item.value}` } key={index} type="info"></Alert>
              })
            }
        </Col>
        </Row>
        <Row>
          <Col offset={3} span={14}>
          <Button onClick={this.alert}>{`${this.state.cipherType}原理解析`}</Button>            
          </Col>
        </Row>
      </CipherWrapper>
    )
  }
}
export default Cipher;