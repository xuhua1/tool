import React, { Component } from 'react';
import { Collapse, Alert } from 'antd';
import { Arr } from './data.js';
import { Link } from 'react-router-dom';
import {
  ReferWrapper,
} from '../style';
const { Panel } = Collapse;
class Reference extends Component {
  CollClick = (e)=>{
    console.log(e);
  }
  render(){
    return (
      <ReferWrapper>
        <Alert message="javaScript学习资料" type="info"></Alert>
        <Collapse onChange={this.CollClick}>
        {
          Arr.map((item,index)=>{
            return <Panel showArrow={false} header={item.title} key={index}>
              {
                item.value.map((item,index)=>{
                  return <p key={index}>
                  <a href={item.url} target="view_window">{item.title}</a>
                  </p>
                })
              }
            </Panel>
          })
        }
        </Collapse>
      </ReferWrapper>
    )
  }
}
export default Reference;