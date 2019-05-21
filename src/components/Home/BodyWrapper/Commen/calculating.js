import React, {Component} from 'react';
import { Input, Col, Row, Alert } from 'antd';
import {
  ClatBtnWrapper,FunWrapper,AlertWrapper
} from './style';
class Calculating extends Component {
  constructor(props){
    super(props);
    this.state = {
      alertArr:[],
      InputVal: '',
      btnArr: ["(",")","%","清除","7","8","9","÷","4","5","6","x","1","2","3","-","0",".","=","+"],
    }
  }
  handleInput = (e)=>{
    this.setState({
      InputVal: e.target.value,
    })
  }
  btnClick = (e)=>{
    const sign = e.target.id;
    if(sign === "="){  
      this.calculation();
    }else{
      this.setState({
        InputVal:this.state.InputVal + e.target.id,
      });
    }
  }
  calculation = ()=>{
    const { InputVal, alertArr } = this.state;
    const value = this.calaByStr(InputVal);
    const newAlertArr = [].concat(alertArr,InputVal, value);
    this.setState({
      InputVal: '',
      alertArr: newAlertArr
    })
  }
  calaByStr = (str) =>{
    const getVal  = (str)=>{
      let [x,y] = str.split(/[\+\-\*\x\÷\/]/g) ;
      [x,y] = [parseInt(x,10),parseInt(y,10)];
      const sign = str.match(/[\+\-\*\x\÷\/]/g)[0];
      switch(sign){
        case "/":
        case "÷":
          return x/y;
        case "+":
          return x+y;
        case "-":
          return x-y;
        case "*":
        case "x":
          return x*y;
      }
    }
    const getItemValue = (str)=>{
      debugger;
      let newStr = str;

      let topArr = newStr.match(/\d+[\*x÷\/\d]+\d+/g);
      topArr&&topArr.forEach(item=>{
        let newItem = item;
        while(/[\*x÷\/]/.test(newItem)){
          const val = newItem.match(/\d+[\*x÷\/]\d+/)[0];
          newItem = newItem.replace(val,getVal(val));
        }
        newStr = newStr.replace(item, newItem);
      })

      let secArr = newStr.match(/\d+[\+-\d]+\d+/g);
      secArr = secArr&&secArr.map(item=>{
        let newItem = item;
        while(/\d+[\+-]/.test(newItem)){
          const val = newItem.match(/\d+[\+-]\d+/)[0];
          newItem = newItem.replace(val,getVal(val));
        }
        newStr = newStr.replace(item,newItem);
      })
      return newStr;
    }
    let loopStr = str;
    while(/[()]/.test(loopStr)){
      
      const largeArr = str.match(/\([^(]+\)/g);
      largeArr.forEach(item=>{
        const newItem = item.replace(/[^0-9\+\-\*\x\÷\/]/g,'');
        const ItemValue = getItemValue(newItem);
        loopStr = loopStr.replace(item,''+ItemValue);
      });
    }
    loopStr = getItemValue(loopStr);
    return loopStr;
  }
  render(){
    return (
    <div>
      <Row>
        <Col span={11} style={{paddingTop:10}}>
          <AlertWrapper>
            {
              this.state.alertArr.map((item,index)=>{
                return <Alert key={index} message={item} type="info"></Alert>
              })
            }
            <Input style={{marginTop:20}} value={this.state.InputVal} onChange={this.handleInput}></Input>
          </AlertWrapper>
        </Col>
        <Col offset={1} span={12}>
        <div onClick={this.btnClick}>
          <ClatBtnWrapper>
          {
            this.state.btnArr.map((item,index)=>{
              return <span key={index} id={item}>
                {item}
              </span>
            })
          }
        </ClatBtnWrapper>
        </div>
        </Col>
      </Row>
    </div>
    )
  }
}
export default Calculating;