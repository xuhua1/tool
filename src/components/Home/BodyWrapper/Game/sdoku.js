import React, {Component} from 'react';
import {
  Button, message, Row, Col,
} from 'antd';
import {
  SdokuWraper,
} from './style';
class Sdoku extends Component {
  constructor(props){
    super(props);
    this.init();
  }
  init = ()=>{
    const sdokuVal = [
      [0,2,0,8,0,0,7,5,0],
      [0,0,0,3,0,4,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,4,2,0,1,9,6,0],
      [1,9,3,0,6,8,5,4,2],
      [0,0,7,0,5,0,1,3,0],
      [8,5,0,0,7,0,4,2,0],
      [9,0,0,1,8,0,6,7,3],
      [7,3,6,0,4,2,0,1,5]
    ];
      /* [0,0,0,6,0,8,0,0,0],
      [0,3,7,0,0,5,9,0,0],
      [0,0,4,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,5],
      [8,0,0,0,0,0,0,2,0],
      [0,0,0,0,7,4,0,0,0],
      [0,0,9,0,3,0,0,0,0],
      [1,0,0,0,0,0,0,0,6],
      [0,0,0,0,0,0,0,1,0]*/
    let inputVal = JSON.parse(JSON.stringify(sdokuVal));
    this.state = {
      sdokuVal,
      inputVal,
    }
  }
  InputChange = (e)=>{
    try {
      let [a,b] = e.target.id.split('-');
      [a,b] = [parseInt(a,10),parseInt(b,10)];
      const { inputVal } = this.state;
      const newInputVal = JSON.parse(JSON.stringify(inputVal));
      const value = parseInt(e.target.value);
      newInputVal[a][b] = value;
      if([1,2,3,4,5,6,7,8,9].indexOf(value)<0){
        message.warn("输入单个数字");
      }
      this.setState({
        inputVal: newInputVal,
      })
    } catch (error) {
        message.warn("输入单个数字");
    }
  }
  checkSdoku = ()=>{
    let { inputVal } = this.state;
    /*inputVal = [ //测试数组
      [3, 2, 9, 8, 1, 6, 7, 5, 4],
      [6, 7, 5, 3, 9, 4, 2, 8, 1],
      [4, 1, 8, 5, 2, 7, 3, 9, 6],
      [5, 8, 4, 2, 3, 1, 9, 6, 7],
      [1, 9, 3, 7, 6, 8, 5, 4, 2],
      [2, 6, 7, 4, 5, 9, 1, 3, 8],
      [8, 5, 1, 6, 7, 3, 4, 2, 9],
      [9, 4, 2, 1, 8, 5, 6, 7, 3],
      [7, 3, 6, 9, 4, 2, 8, 1, 5]
    ]*/
    const testArr = [1,2,3,4,5,6,7,8,9];
    let isTrue = true;
    inputVal.forEach((rowItem,rowInd)=>{
      let total1 = 0,total2=0,total3=0;
      rowItem.forEach((colItem,colInd)=>{
        total1 += colItem;
        total2 += inputVal[colInd][rowInd];
        total3 += inputVal[Math.floor(rowInd/3)*3+Math.floor(colInd/3)][colInd%3];
        if(testArr.indexOf(colItem)<0){
         isTrue = false;
         message.error("请输入0-9整数");
        }
      });
      if(total1!==45|total2!==45|total3!==45){
        isTrue = false;
        message.error("请输入0-9整数");
      }
    })
    if(isTrue){
      message.success("成功");
    }
  }
  render(){
    return (
      <React.Fragment>
        <Row style={{marginTop:20}}>
          <Col offset={10} span={2}><Button onClick={this.checkSdoku}>检查</Button></Col>
          <Col span={2}><Button>切换</Button></Col>
        </Row>
        <SdokuWraper>
          {
            this.state.sdokuVal.map((rowItem,rowInd)=>{
              return rowItem.map((colItem,colInd)=>{
                if(!colItem){
                  return (
                    <input 
                    key = {""+rowInd+"-"+colInd}
                    id={""+rowInd+"-"+colInd} onChange={this.InputChange} 
                    style={{
                      borderRight:colInd===2|colInd===5?"1px solid black":"",
                      borderBottom: rowInd===2|rowInd===5?"1px solid black":"",
                    }}/>
                  );
                }else{
                  return (
                    <span 
                      key = {""+rowInd+"-"+colInd}
                      style={{
                        borderRight:colInd===2|colInd===5?"1px solid black":"",
                        borderBottom:rowInd===2|rowInd===5?"1px solid black":"",
                      }}>
                      {colItem}
                    </span>
                  )
                }
              });
            })
          }
        </SdokuWraper>
      </React.Fragment>
    )
  }
}
export default Sdoku;