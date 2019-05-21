import React,{ Component } from 'react';
import { Icon, Button, message, Modal, Col, Row, Tag } from 'antd';
import {
  MemoryWrapper, CardWrapper
} from './style';
class Memory extends Component{
  constructor(props){
    super(props);
    this.state = {
      IconArr: ["android", "apple", "windows", "wechat", "alipay", "qq", "weibo", "taobao-circle"],
      sletedIdx1: -1, //点击的位置
      sletedIdx2: -1, //点击的位置
      isShowArr: [],  //位置是已展示
      luanIconArr: [], 
      clickTime: 0,
      errorTime: 0,
      second: 0,
    }
  }
  componentDidMount(){
    const { IconArr } = this.state;
    const newIconArr = [].concat(IconArr).concat(IconArr);
    const luanIconArr = newIconArr.sort(_=>.5-Math.random());
    this.setState({
      luanIconArr,
    })
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  ceilClick = (e)=>{
    !this.interval && (this.interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      })
    }, 1000));
    const id = parseInt(e.target.id,10);
    let { sletedIdx2, sletedIdx1, luanIconArr, isShowArr, clickTime, errorTime } = this.state;
    const newIsShowArr = [].concat(isShowArr);
    if(!isNaN(id)){
      if(sletedIdx1<0){
        sletedIdx1 = id;
      }else if(sletedIdx2<0){
        sletedIdx2 = id;
        if(luanIconArr[sletedIdx1]===luanIconArr[sletedIdx2]){
          newIsShowArr[sletedIdx1] = 1;
          newIsShowArr[sletedIdx2] = 1;
        }else{
          errorTime = errorTime+1;
        }
      }else{
        sletedIdx1 = id;
        sletedIdx2 = -1;
      }
    }
    this.setState({
      sletedIdx2,
      sletedIdx1,
      isShowArr:newIsShowArr,
      clickTime: clickTime+1,
      errorTime,
    })
  }
  info = () => {
    Modal.info({
      title: '...............待完成',
      content: (
        <div>
          <p>还有一种关于扑克的记忆游戏</p>
          <p>13张无序扑克, 每次只能打开一张</p>
          <p>每一次正确的是寻找开头一张或者已存在的最大值得下一张</p>
          <p>游戏来源于体育课，课上是牌和人在两侧，一组人轮流去翻正确打开，否则关闭，并回来报告位置信息</p>
        </div>
      ),
      onOk() {},
    });
  }
  render(){
    return (
      <MemoryWrapper>
        <Row>
          <Col offset={4} span={5}>
            <Tag color="green">步数 : </Tag> {this.state.clickTime}
          </Col>
          <Col span={5}>
            <Tag color="magenta">错误 : </Tag> {this.state.errorTime}
          </Col>
          <Col offset={1} span={5}>
            <Tag color="cyan">时间 : </Tag> {this.state.second}
          </Col>
          <Col>
            <Button onClick={this.info}>说明</Button>
          </Col>
        </Row>
        <CardWrapper onClick={this.ceilClick}>
          {
            this.state.luanIconArr.map((item,index)=>{
              const { sletedIdx1, sletedIdx2, isShowArr } = this.state;
              if(index===sletedIdx1 | index === sletedIdx2 | isShowArr[index]){
                return (<div key={index} id={index}>
                  <Icon type={item}></Icon>
                </div>)
              }else{
                return <div className="hidex" key={index} id={index}></div>
              }
              
            })
          }
        </CardWrapper>
      </MemoryWrapper>
    )
  }
}
export default Memory;