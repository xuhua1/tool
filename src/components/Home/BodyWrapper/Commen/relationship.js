import React, { Component } from 'react';
import relationship from "relationship.js";
import { Input, Row, Col, Button, Alert} from 'antd';
import {
  RelationWrapper,
} from './style';
const { TextArea } = Input;
class Relationship extends Component {
  constructor(props){
    super(props);
    const btnValue = ["父","母", "夫", "妻", "子", "女", "兄", "弟", "姐", "妹"];
    const textValue = ["父亲","母亲", "丈夫", "妻子", "儿子", "女儿", "哥哥", "弟弟", "姐姐", "妹妹"];
    this.state = {
      textAreaVal: '',
      btnValue,
      textValue,
      ReltsInfo:'',
    }
  }
  componentDidMount(){
    const options = {text:'儿子的爸爸的妈妈',sex:1};
    const text = relationship(options);
  }
  hadleTextArea = (e)=>{
    this.setState({
      textAreaVal: e.target.value,
    })
  }
  btnClick = (e)=>{
    const btnval = e.target.children[0].innerHTML;
    if(btnval.length===1){
      const {textAreaVal, btnValue, textValue } = this.state;
      const newTextArea = textAreaVal+ (textAreaVal?" 的 ":'') + textValue[btnValue.indexOf(btnval)];
      const trimTextArea = newTextArea.replace(/\s/g,"");
      const options = {text:trimTextArea,sex:1};
      const text = relationship(options);
      this.setState({
        textAreaVal: newTextArea,
        ReltsInfo:text[0],
      })
    }
  }
  render(){
    
    return <RelationWrapper>
      <Row>
        <Col offset = {4} span={16}>
          <TextArea value={this.state.textAreaVal} onChange={this.hadleTextArea}></TextArea>
        </Col>
      </Row>
      <Row onClick={this.btnClick}>
        <Col offset = {5} span={1}>
          <Button>父</Button>
        </Col>
        <Col span={1}>
          <Button>母</Button>
        </Col>
        <Col offset = {1} span={1}>
          <Button>夫</Button>
        </Col>
        <Col span={1}>
          <Button>妻</Button>
        </Col>
        <Col offset = {1} span={1}>
          <Button>子</Button>
        </Col>
        <Col span={1}>
          <Button>女</Button>
        </Col>
        <Col offset = {1} span={1}>
          <Button>兄</Button>
        </Col>
        <Col span={1}>
          <Button>弟</Button>
        </Col>
        <Col offset = {1} span={1}>
          <Button>姐</Button>
        </Col>
        <Col span={1}>
          <Button>妹</Button>
        </Col>
      </Row>
      <Row>
        <Col offset={5} span={14}>
          <Alert message={this.state.ReltsInfo} type="info" />
        </Col>
      </Row>
    </RelationWrapper>
  }
}
export default Relationship;