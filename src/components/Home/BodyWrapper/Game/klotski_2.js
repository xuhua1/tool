import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import { 
  id, layoutList, appearent, layoutName
} from '../utils';
import {
  KlotskiWrapper, TagWrapper, BtnWrapper
} from './style';
import { Row, Col, Tag, Button } from 'antd'; 
class Klotski extends Component{
  constructor(props){
    super(props);
    this.state = {
      klotskiId: 0,
      layout: [],
    }
  }
  componentDidMount(){
    this.init();
  }
  init(){
    const layout = [];
    for(let i=0;i<5;i++) layout.push(layoutList[this.state.klotskiId].slice(i*4,i*4+4));;
    console.log(layout);
    this.setState({
      layout,
    })
  }
  getBlockByName(x,y,name){
    const getDiv = (claname,_name) => {
      return <div className={claname} style={{
                background: appearent[name],
                WebkitTransform: `translate3d(${y}px, ${x}px, 0)`,
                transform: `translate3d(${y}px, ${x}, 0)`,}}
             >{_name}</div>
    };
    const blocks = {
      "caocao": getDiv("s22","曹操"),
      "zhangfei":getDiv("s21","张飞"),
      "machao":getDiv("s21","马超"),
      "huangzhong":getDiv("s21","黄忠"),
      "zhaoyun":getDiv("s21","赵云"),
      "guanyu":getDiv("s12","关羽"),
      "zu1":getDiv("s11","卒1"),
      "zu2":getDiv("s11","卒2"),
      "zu3":getDiv("s11","卒3"),
      "zu4":getDiv("s11","卒4"),
    }
    return blocks[name];
  }
  render(){
    const layout = layoutList[this.state.klotskiId];
    const  s = 0;
    let arr = new Array(9).fill(0);
    return (
      <Row>
        <Col span={14}>
          <KlotskiWrapper >
            {
              this.state.layout.map((rowItem, rowInd)=>{
                return rowItem.map((colItem, colInd)=>{
                  if(colItem<0) return null;
                  return (
                    <Motion key={""+rowInd+colInd} style={{x: rowInd*100, y: colInd*100}}>
                      {
                        ({x,y}) =>{
                          console.log(colItem);
                          if(arr[colItem]){
                            return null;
                          }else{
                            arr[colItem] = 1;
                            return this.getBlockByName(x,y,id[colItem]);
                          }
                        }
                      }
                    </Motion>
                  )
                })
          })
          }
         </KlotskiWrapper>
        </Col>
        <Col span={10}>
          <TagWrapper>
          {layoutName[this.state.klotskiId]}
          </TagWrapper>
          <BtnWrapper>
            <Button type="primary" icon="step-forward">上一个</Button>
            <Button type="primary" icon="step-backward">下一个</Button>
          </BtnWrapper>
        </Col>
      </Row>
    )
  }
}
export default Klotski;

/**
 * 
 * 	1, 0, 0, 2,
		1, 0, 0, 2,
		3, 5, 5, 4,
		3, 6, 7, 4,
		8, -1, -1, 9
 */