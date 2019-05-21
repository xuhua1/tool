import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import { Input, Button } from 'antd';
import {
  Wrapper,
  AhItemWrapper
} from './style';
class Algorithm extends React.Component {
  constructor(props) {
    super(props);
    const algorithmArr = [1,4,12,5,3,7,9]; //
    //[1,4,12,5,3,7,9] [0,1,2,3,4,5,6]
    //[1,3,12,5,4,7,9] [0,4,2,3,1,5,6]
    //[1,3,5,12,4,7,9] [0,4,3,2,1,5,6]
    //[1,3,4,12,5,7,9] [0,2,3,4,1,5,6]  [0, 4, 1, 2, 3, 5, 6]

    //[1,3,4,5,7,9,12] [0,2,6,3,1,4,5]
    let algPos = (new Array(algorithmArr.length)).fill(0);
    algPos = algPos.map((_,index)=>index);
    this.state = {
      algorithmArr,
      algPos,
      inbeax: 12,
      posArr:[],
      index: 0,
    };
  };
  init = (algorithmArr)=>{
    const newAlgorithmArr = algorithmArr.map(item=>Symbol(item));
    const newAlgorithmArrTest = [...newAlgorithmArr];
    const newPosArr = [];
    for(let i=0;i<newAlgorithmArr.length;i++){
      for(let j=i;j<newAlgorithmArr.length;j++){
        const left = parseInt(newAlgorithmArr[j].toString().match(/\d+/));
        const right = parseInt(newAlgorithmArr[i].toString().match(/\d+/));
        if(left<right){
          let tempAH = newAlgorithmArr[j];
          newAlgorithmArr[j] = newAlgorithmArr[i];
          newAlgorithmArr[i] = tempAH;

          const newArr = newAlgorithmArrTest.map(item=>newAlgorithmArr.indexOf(item));
          newPosArr.push(newArr);
        }
      }
    }
    this.setState({
      posArr: newPosArr,
    })
  }
  componentDidMount(){
    this.init(this.state.algorithmArr);
  }
  doAnimation = ()=>{
    const { index, posArr } = this.state;
    console.log(this.state);
    if(posArr[index]){
      this.setState({
        index: index+1,
        algPos: posArr[index],
      })
    }
  }
  reset = ()=>{
    let algPos = (new Array(this.state.algorithmArr.length)).fill(0);
    algPos = algPos.map((_,index)=>index);
    this.setState({
      algPos,
      index:0,
    })
  }
  handleChange = (e)=>{
    const val = e.target.value;
    try {
      const newAH = JSON.parse(val);
      let algPos = (new Array(newAH.length)).fill(0);
      algPos = algPos.map((_,index)=>index);
      console.log(algPos);
      this.init(newAH);
      this.setState({
        algorithmArr:newAH,
        algPos,
        index: 0,
      })
    } catch (error) {
      
    }
  }
  render() {
    return (
      <Wrapper>
        <Input onChange={this.handleChange}/>
        <Button onClick={this.doAnimation} type="primary" style={{margin: 20}}>下一步</Button> 
        <Button onClick={this.reset} type="primary" style={{margin: 20}}>重置</Button>
        <AhItemWrapper>
        {
          this.state.algorithmArr.map((item,index)=>{
          const { inbeax,algPos} = this.state;
          console.log(this.state);
          return (
            <Motion key={index} style={{x: spring(algPos[index]*40)}}>
              {({x}) =>
                <div className="ahWrapper" style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }}>
                  <div className="ahItem" style={{height: item*(300/inbeax)+100}}></div>
                  <div className="ahName">{item}</div>
                </div>
              }
            </Motion>
          )
        })
        }
        </AhItemWrapper>
      </Wrapper>
    );
  };
}
export default Algorithm;