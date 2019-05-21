import React, { Component } from 'react';
import { Input, Select, Icon, Row, Col, Button, Alert, Collapse } from 'antd';
import {
  ApiWrapper
} from './style';
const { TextArea, Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;
class Api extends Component {
  render(){
    return (
      <ApiWrapper style={{paddingTop: 20}}>
        <Row>
          <Col span ={16}>
            <div style={{textAlign:'right', marginBottom: '20px'}}>
              <Button type="primary" style={{marginRight:"40px"}}>上传</Button>
              <Button type="primary">不压缩</Button>
            </div>
            <TextArea autosize = {{ minRows: 6, maxRows: 12 }}></TextArea>
            <Search 
              addonBefore="GET: " 
              enterButton="测试" 
              onSearch={value => console.log(value)}
              style={{margin:'20px 0'}}
              />
              <Alert message={
                <pre>{`{\n  a:1,\n  b:2,\n}`}</pre>
              } type="success" />
          </Col>
          <Col offset={1} span = {7} >
          <Collapse>
            <Panel showArrow={false} header={
              <Alert message="https://zuoyecloud.com/api/test" type="success" />
            } key="1">
              <p>2132</p>
            </Panel>
            <Panel showArrow={false} header={
              <Alert message="https://zuoyecloud.com/api/test" type="success" />
            } key="2">
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
              <p>2132</p>
            </Panel>
            <Panel showArrow={false} header={
              <Alert message="https://zuoyecloud.com/api/test" type="success" />
            } key="3">
              <p>2132</p>
            </Panel>
          </Collapse>
          </Col>
        </Row>
      </ApiWrapper>
    )
  }
}
export default Api;