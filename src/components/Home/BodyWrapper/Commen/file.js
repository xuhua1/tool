import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Input, Button, Upload, Alert, Form } from 'antd';
import DraggerFile from './components/draggerFile';
import MakeFileForm from './components/makeFile';
import {
  CardButton,
  UploadFile,
  ComLayout,
  Sider,
  Content,
} from './style';
class File extends Component {
  constructor(props){
    super(props);
    this.state = {
      showPW: true,
    }
  }
  validateNumber = (rule, value, callback) => {
    const reg = /[0-9]{4,20}/;
    const reg1 = /[0-9]+/;
    if (!reg1.test(value)) {
      callback("ID只能是数字");
    } else if(!reg.test(value)) {
      callback('ID不能小于4位!');
    } else if(reg.test(value)){
      callback();
    }else{
      callback('ID错误');
    }
  }
  toMakeFile = (e)=>{
    //判断是否拥有

    //跳转
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push(`${this.props.match.path}/${values.title}`);
      }
    });
  }
  render(){
    const { isExact, path } = this.props.match;
    const { showPW } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <ComLayout>
        <Content>
            {isExact&&<CardButton> <Alert message="打开文件夹" type="info" /></CardButton>}
            <Form onSubmit={this.toMakeFile}>
            {isExact&&<Form.Item>
                {getFieldDecorator('title', {
                  rules: [{
                    required: true, message: 'Id不能为空!'
                  },{
                    validator: this.validateNumber,
                  }],
                })(
                  <Input  style={{ width: '400px' }} />
                )}
              </Form.Item>}
              {showPW&&isExact&&<Form.Item>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '密钥不能为空!'
                  }],
                })(
                  <Input  style={{ width: '400px' }} />
                )}
              </Form.Item>}
              {isExact&&<Form.Item style={{ width: '400px', margin: 'auto', textAlign: 'left' }}> 
                <Button type="primary" htmlType="submit">创建</Button>
              </Form.Item>}
            </Form>
            <UploadFile>
              <Route path={`${path}/:id`} component={DraggerFile}/>
              <Route exact path={`${path}`} component={MakeFileForm}/>
            </UploadFile>
        </Content>
        <Sider>
          2131
        </Sider>
      </ComLayout>
    )
  }
}
let FileForm = Form.create()(File);
export default FileForm;