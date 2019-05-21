import React, {Component} from 'react';
import { Tag, Button, message, Row, Col, Input, Icon } from 'antd';
import {
  MinesWrapper, Mines
} from './style';

class Mine extends Component {
  constructor(props){
    super(props);
    this.init();
  }
  init(col=9,row=12,mines=20){
    const arr = new Array(col*row).fill(0);
    for(let k=0;k<mines;k++) {arr[k]=1;}
    arr.sort(function() {
        return .5 - Math.random();
    });
    const minesNum = [];
    for(let t=0;t<col;t++)minesNum.push(arr.slice(t*row,t*row+row));
    const showNum = JSON.parse(JSON.stringify(minesNum));
    const get = (i,j)=>{
      if(i>-1&&i<col&&j>-1&&j<row){
        return minesNum[i][j];
      }
      return 0;
    }
    for(let i=0;i<col;i++){
      for(let j=0;j<row;j++){
        if(minesNum[i][j]) {showNum[i][j] = "*";continue;}
        showNum[i][j]=get(i-1,j-1)+get(i-1,j)+get(i-1,j+1)+get(i+1,j-1)+get(i+1,j)
                      +get(i+1,j+1)+get(i,j-1)+get(i,j+1);
      }
    }
    const isShow = new Array(col*row).fill(0);
    const isShowArr = [],unSurePos=[];
    for(let t=0;t<col;t++){
      isShowArr.push(isShow.slice(t*row,t*row+row));
      unSurePos.push(isShow.slice(t*row,t*row+row));
    }
    if(this.state){
      this.setState({
        col,
        row,
        mines,
        minesNum,
        showNum,
        isShowArr,
        unSurePos,
        isSetQ: false,
      })
    }else{
      this.state = {
        col,
        row,
        mines,
        minesNum,
        showNum,
        isShowArr,
        unSurePos,
        isSetQ: false,
      };
    }
  }
  mouseInCeil = (e)=>{
    let mouse = e.target.id;
    this.setState({
      mouse
    })
  }
  mouseOutCeil = ()=>{
    this.setState({
      mouse:"",
    })
  }
  ceilClick = (e)=>{
    let [a,b] = e.target.id.split("-");
    [a,b] = [parseInt(a,10),parseInt(b,10)];
    if(this.state.isSetQ){
      const unSurePos = this.state.unSurePos;
      const newUnSurePos = JSON.parse(JSON.stringify(unSurePos));
      newUnSurePos[a][b]=!newUnSurePos[a][b];
      this.setState({
        unSurePos:newUnSurePos,
      })
    }else{
      if(this.state.minesNum[a][b]){
        this.fail();
      }else{
        this.showArr(a,b);
      }
    }
  }
  fail = ()=>{
    message.error('踩雷了,hahahaha');
    const {col,row,minesNum,isShowArr} = this.state;
    const newIsShowArr = JSON.parse(JSON.stringify(isShowArr));
    for(let i=0;i<col;i++){
      for(let j=0;j<row;j++){
        if(minesNum[i][j]){
          newIsShowArr[i][j]=1;
        }
      }
    }
    this.setState({
      isShowArr:newIsShowArr,
    })
  }
  showArr = (a,b)=>{
    const {isShowArr,showNum} = this.state;
    const newIsShowArr = JSON.parse(JSON.stringify(isShowArr));
    const show = (a,b)=>{
      if(a>-1&&a<this.state.col&&b>-1&&b<this.state.row){
        if(newIsShowArr[a][b]) return;
        newIsShowArr[a][b] = 1;
        if(showNum[a][b]===0){
          show(a-1,b-1);
          show(a-1,b);
          show(a-1,b+1);
          show(a+1,b-1);
          show(a+1,b);
          show(a+1,b+1);
          show(a,b-1);
          show(a,b+1);
        }else{
          return ;
        }
      }else{
        return;
      }
    }
    show(a,b);
    this.setState({
      isShowArr:newIsShowArr,
    })
  }
  rowInput = (e)=>{
    try {
      const inputRow = parseInt(e.target.value,10);
      this.setState({
        inputRow,
      })
    } catch (error) {
      
    }
  }
  colInput = (e)=>{
    try {
      const inputCol = parseInt(e.target.value,10);
      this.setState({
        inputCol,
      })
    } catch (error) {
      
    }
  }
  mineInput = (e)=>{
    try {
      const inputMines = parseInt(e.target.value,10);
      this.setState({
        inputMines,
      })
    } catch (error) {
      
    }
  }
  InputSubmit = ()=>{
    try {
      const { inputRow, inputCol, inputMines} = this.state;
      this.init(inputCol,inputRow,inputMines);   
    } catch (error) {
      message.error("输入格式有误");
    }
  }
  setQes = ()=>{
    this.setState({
     isSetQ: !this.state.isSetQ,
    })
  }
  reSet = ()=>{
    const { row, col, mines} = this.state;
    this.init(col,row,mines); 
  }
  render(){
    return (
      <MinesWrapper>
        <Input.Group compact >
        <Row style={{margin:"20px 0",width:"100%"}}>
          <Col offset={6} span={3}><Input onChange={this.rowInput} placeholder="行数"/></Col>
          <Col span={3}><Input onChange={this.colInput} placeholder="列数"/></Col>
          <Col span={3}><Input onChange={this.mineInput} placeholder="雷数"/></Col>
          <Col span={3} style={{textAlign:"center"}}><Button onClick={this.InputSubmit}>提交</Button></Col>
        </Row>
        </Input.Group>
        <Row>
          <Col offset={10} span={2}>
            <Button style={{marginBottom:15}} onClick={this.setQes} type={this.state.isSetQ?"primary":""} icon="question"></Button>
          </Col>
          <Col span={2}>
            <Button style={{marginBottom:15}} onClick={this.reSet} type="primary" icon="redo"></Button>
          </Col>
        </Row>
        <Mines style={{width: this.state.row*30}} onMouseLeave={this.mouseOutCeil}>
          {
           this.state.minesNum.map((colItem,colInd)=>{
            return colItem.map((rowItem,rowInd)=>{
                const mouse = ""+colInd+"-"+rowInd;
                const { isShowArr, showNum, unSurePos} = this.state;
                return (
                  <Tag id={mouse}
                       key={mouse}
                       color={
                         isShowArr[colInd][rowInd]?"green":
                         this.state.mouse===mouse?"#2db7f5":"blue"}
                       onClick={this.ceilClick}
                       onMouseEnter={this.mouseInCeil}
                  >{isShowArr[colInd][rowInd]?showNum[colInd][rowInd]:
                    unSurePos[colInd][rowInd]?"?":
                    ""}</Tag>
                )
              })
            })
          }
        </Mines>
      </MinesWrapper>
    )
  }
}
export default Mine;