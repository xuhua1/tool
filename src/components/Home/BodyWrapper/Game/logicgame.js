import React, { Component } from 'react';
import { Input, Row, Col, Alert, Button, Tooltip } from 'antd';
import {
  LogicGameWrapper, RightWrapper, AlertWrapper, 
} from './style';
const { Search } = Input;
class LogicGame extends Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      answer:null,
      alert:null,
      gameData:null,
      showAle:null,
      searchValue:'',
      placeHolder:"请输入密码开始挑战",
    }
  }
  componentDidMount(){
    this.setState({
      alert: this.getAlert("提示", "密码是 错误的"),
      answer: this.getAlert("答案", "请在输入框中输入  错误的 这三个字"),
    })
  }  
  getAlert = (title,str) => {
    return (
      <AlertWrapper>
        <p>{title}</p>
        <p>{str}</p>
      </AlertWrapper>
    )
  }
  getGameData = (index)=>{
    const data = {
      index: 0,
      game: "5个海盗抢得100枚金币，他们按抽签的顺序依次提方案：首先由1号提出分配方案，然后5人表决，投票要超过半数同意方案才被通过，否则他将被扔入大海喂鲨鱼，依此类推。",
      alert: "让自己的方案获得通过的关键是事先考虑清楚“挑战者”的分配方案是什么，并用最小的代价获取最大收益，拉拢“挑战者”分配方案中最不得意的人们",
      answer: `① 如果只剩下 D、E 海盗方案为：100:0
      ② 如果只剩下 C、D、E 海盗方案为：99:0:1
      ③ 如果只剩下 B、C、D、E 海盗方案为：99:0:1:0
      ④ 如果是 A 海盗提议的话方案为：98:0:1:0:1",`
    };
    this.setState({
      answer: this.getAlert("参考答案", data.answer),
      alert: this.getAlert("提示", data.alert),
      gameData: this.getAlert("题目", data.game), 
    })
  }
  enterClick = (value)=>{
    if(value === "错误的"){
      this.getGameData(0);
      this.setState({
        showAle: null,
        searchValue:'',
        placeHolder: "输入索引跳转指定编号题目",
      })
    }else{
      this.setState({
        showAle: this.getAlert("提示", "密码是错误的"),
      })
    }
  }
  btnClick = (str)=>{
    if(str==="tip"){
      this.setState({
        showAle: this.state.alert,
      });
    }else{
      this.setState({
        showAle: this.state.answer,
      })
    }
  }
  enterChange = (e)=>{
    this.setState({
      searchValue:e.target.value,
    })
  }
  render(){
    const { placeHolder,gameData, showAle, searchValue } = this.state;
    return (
      <LogicGameWrapper>
        <Row>
          <Col offset={4} span={12}>
            <Search
              placeholder={placeHolder}
              enterButton="Enter"
              value={searchValue}
              onChange={this.enterChange}
              onSearch={this.enterClick}
            />
          </Col>
        </Row>
        {
          gameData&&<Row>
            <Col offset={4} span={12}>
              <Alert message={gameData} type="success" />
            </Col>
          </Row>
        }
        {
          showAle&&<Row>
            <Col offset={4} span={12}>
              <Alert message={showAle} type="info" />
            </Col>
          </Row>
        }
        <RightWrapper>
          <Tooltip title="提示" placement="right" >
          <Button type="primary" icon="question-circle" shape="circle" onClick={()=>this.btnClick("tip")}></Button>    
          </Tooltip>
          <Tooltip title="答案" placement="right">
            <Button type="primary" icon="zoom-in" shape="circle" onClick={()=>this.btnClick("ans")}></Button>
          </Tooltip>
        </RightWrapper>
      </LogicGameWrapper>
    )
  }
}
export default LogicGame;