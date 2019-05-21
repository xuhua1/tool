import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button } from 'antd';
import { copyClick } from '../utils';
import  ColorCollapse  from './components/colorCollapse';
const {Search} = Input;
class Home extends Component {
  constructor(props){
    super(props);
    this.rgbValueRef=React.createRef();
    this.hexValueRef=React.createRef();
    this.state = {
      rgbValue: '',
      hexValue: '',
    }
  }
  setRgbValue = rgbValue=> {
    const ctArr = rgbValue.split(/[^\d]+/);
    const hexStr = ctArr.map(item=>Number.parseInt(item, 10))
                  .filter(item=>!Number.isNaN(item))
                  .map(item=>item<16? '0'+item.toString(16): item.toString(16))
                  .join('');
    this.setState({
      rgbValue: '#' + hexStr,
    });
  }
  setHexValue = hexValue => {
    const hex = hexValue.split('#').pop().split('')
                        .map((item,index,Arr)=>index%2===0?Number.parseInt(Arr[index]+Arr[index+1],16):'')
                        .filter(item=>item!=='').join(',');
    const hexStr = `rgb(${hex})`;
    this.setState({
      hexValue:hexStr,
    });
  }
  
  render(){
    const { rgbValue, hexValue } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col offset={3} span={8}>
            <Search
              placeholder="输入RGB以非数字分开"
              enterButton="转换"
              size="large"
              onSearch={this.setRgbValue}
              style={{margin: '20px 0'}}
            />
           {rgbValue
            &&<Button 
                style={{marginBottom:20, display:'flex',justifyContent:'space-between'}} 
                type="dashed" 
                block
                onClick = {()=>copyClick(rgbValue)}
              >
              <div>{rgbValue}</div>
              <div style={{backgroundColor:rgbValue}}>点击复制</div>
            </Button>}
          </Col>
          <Col offset={2} span={8}>
            <Search
              addonBefore='#'
              placeholder="输入十六进制"
              enterButton="转换"
              size="large"
              onSearch={this.setHexValue}
              style={{margin: '20px 0'}}
            />
            {hexValue
              &&<Button 
                  style={{marginBottom:20, paddingLeft: 40, display:'flex',justifyContent:'space-between'}} 
                  type="dashed" 
                  block
                  onClick = {()=>copyClick(hexValue)}
                >
              <div >{hexValue}</div>
              <div style={{backgroundColor:hexValue}} >点击复制</div>
            </Button>}
          </Col>
        </Row> 
        <ColorCollapse/>
      </React.Fragment>
    )
  }
}
export default Home;