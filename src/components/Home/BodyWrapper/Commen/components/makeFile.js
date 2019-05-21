import React, { Component } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import {
  MakeFileWrapper
} from './style';
const { TextArea } = Input;
class MakeFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      fileList:null,
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };
    return (
      <MakeFileWrapper>
        <div style={{margin: '20px auto', textAlign: 'left'}}>
        <Alert message="创建一个新的收文件夹" type="info" />
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="标题"
          >
            {getFieldDecorator('title', {
              rules: [{
                required: true, message: '标题不能为空!'
              }],
            })(
              <Input  style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item
            label="详情"
          >
            {getFieldDecorator('text', {
                rules: [{
                  required: true, message: '随便写点什么!'
                }],
              })(
                <TextArea autosize={{ minRows: 2, maxRows: 8 }} style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">创建</Button>
          </Form.Item>
        </Form>
      </MakeFileWrapper>
    )
  }
}
let MakeFileForm = Form.create()(MakeFile);
export default MakeFileForm;