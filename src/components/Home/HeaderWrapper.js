import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';

class HeaderWrapper extends Component {
  change(e){
    const a = e.target.value;
    console.log(a );
  }
  render(){
    return (
      <Row>
        <Col span={3} >
          在线工具
        </Col>
        <Col span={15} >
          <Input onChange={this.change} style={{maxWidth:'400px',marginRight: '20px'}}/>
          <Button type="primary">搜索</Button>
        </Col>
        <Col span={6} >
          XHLove
        </Col>
      </Row> 
    )
  }
}

export default HeaderWrapper