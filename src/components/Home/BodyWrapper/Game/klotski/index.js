import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import KlotskiResult from './klotski';
import { 
  klotskiArr, id, appearent,
} from './games';
import {
  KlotskiWrapper, TagWrapper, BtnWrapper
} from '../style';
import { Row, Col, Tag, Button } from 'antd'; 
class Klotski extends Component{
  constructor(props){
    super(props);
    this.state = {
      selecteBlkIdx: 0,
      klotskiId: 0,
      name:'',
      layout: [],
    }
  }
  componentDidMount(){
    window.addEventListener("keydown",this.handleKeydown)
    this.init();
  }
  componentWillUnmount(){
    clearInterval(this.resInterval);
  }
  init(id = this.state.klotskiId){
    const klotskiName = klotskiArr[id].name;
    const klotskLayout = klotskiArr[id].blocks;
    const newKlotskLayout = JSON.parse(JSON.stringify(klotskLayout));
    console.log(klotskiName);
    this.setState({
      name: klotskiName,
      layout:newKlotskLayout,
      klotskiId:id,
    })
  }
  getBlockByName(x,y,name,type){
    const getDiv = (claname,_name) => {
      return <div className={claname} style={{
                background: appearent[name],
                WebkitTransform: `translate3d(${y}px, ${x}px, 0)`,
                transform: `translate3d(${y}px, ${x}, 0)`,}}
             >{_name}</div>
    };
    const blocks = {
      "caocao": "曹操",
      "zhangfei":"张飞",
      "machao":"马超",
      "huangzhong":"黄忠",
      "zhaoyun":"赵云",
      "guanyu":"关羽",
      "zu1":"卒1",
      "zu2":"卒2",
      "zu3":"卒3",
      "zu4":"卒4",
    }
    const cnme = "s"+(type>2?type-2:type)+(type>2?2:1);
    return getDiv(cnme,blocks[name]);
  }
  nextKlotski = ()=>{
    clearInterval(this.resInterval);
    if(klotskiArr[this.state.klotskiId+1]){
      this.init(this.state.klotskiId+1);
    }
  }
  forwardKlotski = ()=>{
    clearInterval(this.resInterval);
    if(klotskiArr[this.state.klotskiId-1]){
      this.init(this.state.klotskiId-1);
    }
  }
  getResult = ()=>{
    const klotskiResult = new KlotskiResult();
    const result = klotskiResult.solve(klotskiArr[this.state.klotskiId].blocks, {
      useMirror: true,
    });
    console.log(result);
    this.beginMotion(result);
  }
  beginMotion(result){
    const directions = [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: 0 }];
    const res = result.reverse();
    let idx = 0;
    this.resInterval = setInterval(() => {
      const { layout } = this.state; 
      const newLayout = JSON.parse(JSON.stringify(layout));
      const bx = newLayout[res[idx].blockIdx].position[0] + directions[res[idx].dirIdx].y;
      const by = newLayout[res[idx].blockIdx].position[1] + directions[res[idx].dirIdx].x;
      newLayout[res[idx].blockIdx].position = [bx,by];
      this.setState({
        layout: newLayout,
      });
      if(!res[idx+1]){
        clearInterval(this.resInterval);
      }else{
        idx += 1;
      }
    }, 1000);
  }
  handleKeydown =(e)=>{
    clearInterval(this.resInterval);
    switch (e.keyCode) {
      case 37:
        this.setState({
          selecteBlkIdx:1,
        })
        break;
      case 38:
        
        break;
      case 39:
        
        break;
      case 40:
        
        break;
      default:
        break;
    }
  }
  render(){
    return (
      <Row>
        <Col span={14}>
          <KlotskiWrapper >
            {
              this.state.layout.map((item,index)=>{
                return (
                    <Motion key={""+index} style={{x: item.position[0]*100, y: item.position[1]*100}}>
                      {
                        ({x,y}) =>{
                          return this.getBlockByName(x,y,id[index],item.type);
                        }
                      }
                    </Motion>
                  )
                })
              }
         </KlotskiWrapper>
        </Col>
        <Col span={10}>
          <TagWrapper>
          {this.state.name}
          </TagWrapper>
          <BtnWrapper>
            <Button type="primary" onClick = {this.forwardKlotski} icon="step-forward">上一个</Button>
            <Button type="primary" onClick = {this.nextKlotski} icon="step-backward">下一个</Button>
          </BtnWrapper>
          <BtnWrapper>
            <Button type="primary" shape="round" onClick = {this.getResult} icon="question-circle">获取秘籍</Button>
          </BtnWrapper>
        </Col>
      </Row>
    )
  }
}
export default Klotski;