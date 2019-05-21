import React, { Component } from 'react';
import {
  BambooWrapper, BlockWrapper,
} from './style';
import { message } from 'antd';
class Bamboo extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      blockArr: [],
    }
  }
  componentDidMount(){
    const block = {
      transX: 610, // 360 - 1/2 * width
      width: 100,
      
      between: [150, 210],  // [transX2 - transX1 - width1/1, bt2];
      blockHt: 10,
      angle: 0,
    }
    const block1 = {
      transX: 810, // 100 + 1/2 * width
      width: 60,

      between: null,
      blockHt: 0,
      angle: 0,
    }
    const { blockArr } = this.state;
    const newBlockArr = JSON.parse(JSON.stringify(blockArr));
    newBlockArr.push(block);
    newBlockArr.push(block1);
    this.setState({
      blockArr: newBlockArr
    });

    //事件监听
    window.addEventListener('keydown',this._enterClick);
  }
  _keyUp = ()=>{
    clearInterval(this.timeInterval);
    window.removeEventListener('keyup',this._keyUp);
    const { index, blockArr } = this.state;
    const newBlockArr = JSON.parse(JSON.stringify(blockArr));
    newBlockArr[index].angle = 90;
    const { blockHt } = newBlockArr[index];
    const [left,right] = newBlockArr[index].between;
    console.log(left,right,blockHt);
    if(blockHt<left|blockHt>right){
      this.setState({
        blockArr: newBlockArr,
      });
      setTimeout(() => {
        message.error("失败了");
      }, 600);
      return ;
    }else{
      setTimeout(() => {
        window.addEventListener('keydown', this._enterClick);
      }, 600);
    }
    // new block
    const between = 40+(Math.floor(Math.random()*6))*20;
    const width = 30+(Math.floor(Math.random()*4))*10;

    const last = newBlockArr[newBlockArr.length-1];
    last.between = [last.width/2+between, last.width/2+between+width];
    newBlockArr[index+1].blockHt = 10;

    const newBlock = {
      transX: last.transX+last.width+between, // 100 + 1/2 * width
      width,
      between: null,
      blockHt: 0,
      angle: 0,
    }
    newBlockArr.push(newBlock);
    
    const [a,b] = newBlockArr[index].between;
    newBlockArr.forEach((item,index)=>{
      item.transX = item.transX - ((a+b)/2);
    })
    this.setState({
      index: index+1,
      blockArr: newBlockArr,
    });
  }
  _enterClick = (e)=>{
    console.log(e.keyCode);
    this.timeInterval=null;
    const keyPress = ()=>{
      if(!this.timeInterval){
        this.timeInterval = setInterval(() => {
          const { index, blockArr } = this.state;
          const newBlockArr = JSON.parse(JSON.stringify(blockArr));
          newBlockArr[index].blockHt = newBlockArr[index].blockHt + 2;
          this.setState({
            blockArr: newBlockArr,
          });
        }, 60);
      }
    }
    if(e.keyCode === 13){
      keyPress();
      window.removeEventListener('keydown',this._enterClick);
      window.addEventListener('keyup',this._keyUp);
    }
  }
  componentWillUnmount(){
    window.removeEventListener('keydown',this._enterClick);
  }
  render(){
    const { blockArr, x } = this.state;
    return (
      <BambooWrapper>
        <BlockWrapper>
          {
            blockArr.map((item,index)=>{
              return <div key={index} style={{ transform: `translateX(${item.transX}px)`, width: item.width}}>
                <div style={{height: item.blockHt, bottom: `${150+(item.angle===90?5:0)}px`,  transform: `rotate(${item.angle}deg)`, transformOrigin: "center bottom"}}></div>
              </div>
            })
          }
        </BlockWrapper>
      </BambooWrapper>
    )
  }
}
export default Bamboo;