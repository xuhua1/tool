import React, { Component }from 'react';
import { Form, Input, Icon, Row, Col, Button, Select } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
let id = 0;

class Reptile extends Component{
  constructor(props){
    super(props);
    this.state={
      selectIndex: "attr",
    }
  }
  componentDidMount(){
    this.add();
  }
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }
  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  selectChange = (val)=>{
    this.setState({
      selectIndex: val,
    })
  }
  render(){
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const selectBefore = (
      <Select onChange = {this.selectChange} defaultValue="text" style={{ width: 90 }}>
        <Option value="text">.text()</Option>
        <Option value="attr">.attr()</Option>
      </Select>
    );
    const formItems = keys.map((k, index) => (
      <React.Fragment  key={k}>
        <Form.Item style={{margin:0, width: 120}}>
          {getFieldDecorator(`name[${k}]`, {
           // rules: [{ required: true, message: '返回数组在json中key值!' }],
          })(
            <Input placeholder="key" />
          )}
        </Form.Item>
        <Form.Item style={{margin:0,width: 120,}}>
          {getFieldDecorator(`RootSelector[${k}]`, {
           // rules: [{ required: true, message: '顶层节点选择' }],
          })(
            <Input placeholder="rootSelector" />
          )}
        </Form.Item>
        <Form.Item style={{margin:0}}>
          {getFieldDecorator(`selector[${k}]`, {
            //rules: [{ required: true, message: '输入后代节点选择!' }],
          })(
            <Input placeholder="selector" style={{width:160}} />
          )}
        </Form.Item>
        <Form.Item style={{margin:0, width: 180}}>
          {getFieldDecorator(`value[${k}]`, {
           // rules: [{ required: this.state.selectIndex !== 'text', message: '输入获取内容!' }],
          })(
            <Input disabled={this.state.selectIndex === 'text'} placeholder="attr" addonBefore={selectBefore}/>
          )}
        </Form.Item>
        <Form.Item style={{width: 40, textAlign: 'center'}}>
          {keys.length > 1 ? (
              <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                onClick={() => this.remove(k)}
              />
            ) : null}
        </Form.Item>
      </React.Fragment>
    ));
    return (
      <Row style={{marginTop: 20}}>
        <Col span={16}>
        <Form onSubmit={this.handleSubmit} className="login-form" layout="inline">
          {formItems}
          <Form.Item style={{margin:0}}>
            <TextArea style={{width: 580}} autosize={{minRows: 2, maxRows: 8}}></TextArea>
          </Form.Item>
          <Form.Item style={{marginRight: 30, width: 120}}>
            <Button type="dashed" onClick={this.add} style={{ width: '130px' }}>
              <Icon type="plus" /> Add field
            </Button>
          </Form.Item>
          <Form.Item style={{margin:0, width: 120}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              YES
            </Button>
          </Form.Item>
        </Form>
        </Col>
        <Col offset={1} span={5}>
          ASIDE
        </Col>
      </Row>
    );
  }
}
let ReptileForm = Form.create()(Reptile);
export default ReptileForm;