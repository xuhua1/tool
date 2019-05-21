import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import textInsert from './insert';
import { Col, Upload, Tooltip, Icon, Modal, Input, message } from 'antd';
import marked from './marked';
import OSS from 'ali-oss';
import 'highlight.js/styles/tomorrow.css'
import {
  AllBox,
  MarkdownBox,
  MarkdownText,
  ToolBar,
  TextBox,
  ViewBox,
  ModalWrap
} from '../style';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      historyIndex: 0,
      markdownValue: '',
      preView: false,
      model: false,
    }
    this.handleMarkdownRef = $vm => {
      this.$vm = $vm;
    }
  }
  insert = (e, url) => {
    console.log(this.state);
    const type = e.currentTarget ? e.currentTarget.getAttribute('data-type') : e;
    let value = '';
    const vmValue = this.$vm.value;
    if (vmValue.length !== 0) {
      const lastTwo = vmValue.slice(-2);
      if (type === 'table') {
        if (lastTwo[0] !== '\n') {
          value += '\n\n';
        } else if (lastTwo[0] !== '\n') {
          value += '\n';
        }
      } else if (type === 'list' || type === 'h1' || type === 'h2' || type === 'h3' || type === 'h4' || type === 'code' || type === 'block') {
        if (lastTwo[1] !== '\n') {
          value += '\n';
        }
      }
    };
    textInsert(this.$vm, type, url, value);
    this.setState({
      markdownValue: this.$vm.value, 
    })
  }
  onChange = e => {
    const data = e.target.value;
    this.setState({
      markdownValue: data, 
    })
    const { history, historyIndex } = this.state;
    const newHistory = JSON.parse(JSON.stringify(history));
    window.clearTimeout(this.currentTimeout);
    this.currentTimeout = setTimeout(() => {
      // 撤销后修改，删除当前以后记录
      if (historyIndex < newHistory.length - 1) {
        newHistory.splice(historyIndex + 1);
      }
      // 超出记录最多保存数后，滚动储存
      if (newHistory.length >= 20) {
        newHistory.shift();
      }
      // 记录当前位置
      const newHistoryIndex = newHistory.length;
      newHistory.push(data);
      this.setState({
        history: newHistory,
        historyIndex: newHistoryIndex,
      })
    }, 500);
  }
  undo = () => {
    console.log(this.state);
    const { history, historyIndex } = this.state;
    const newHistory = JSON.parse(JSON.stringify(history));
    if (newHistoryIndex-1 < 0) return;
    const newHistoryIndex = historyIndex - 1;
    const value = newHistory[newHistoryIndex];
    this.setState({
      historyIndex: newHistoryIndex,
      markdownValue: value,
    })
  }
  redo = () => {
    const { history, historyIndex } = this.state;
    const newHistory = JSON.parse(JSON.stringify(history));
    if (newHistoryIndex+1 > newHistory.length) return;
    const newHistoryIndex = historyIndex + 1;
    const value = newHistory[newHistoryIndex];
    this.setState({
      historyIndex: newHistoryIndex,
      markdownValue: value,
    })
  }
  uploadImage = async (file) => {
    try {
      let response = await fetch('https://zuoyecloud.com/api/sts', {
        method: 'GET',
        credentials: 'include',
      });
      let responseJson = await response.json();
      const { AccessKeyId, AccessKeySecret, SecurityToken } = responseJson;
      let ossConfig = {
        accessKeyId: AccessKeyId,
        accessKeySecret: AccessKeySecret,
        stsToken: SecurityToken,
        endpoint: 'oss-cn-hangzhou.aliyuncs.com',
        bucket: 'zuoyecloud-file',
      }
      let client = new OSS(ossConfig);
      let tempCheckpoint;

      let result = await client.multipartUpload(file.name, file, {
        progress: async function (p, checkpoint) {
          // 记录断点, 如果关闭了浏览器，然后重新启动继续上传的话，是不行的，请参考上边对file对象的描述
          //tempCheckpoint = checkpoint;
        }
      })
      console.log(result);
      if (result.res.status === 200) {
        this.insert('image', result.res.requestUrls[0]);
      }
    } catch (err) {
      message.error('上传失败');
      console.log(err);
    }
  }
  handleSave = ()=>{
    message.success("保存成功");
  }
  changeModel = ()=>{
    this.setState({
      model: !this.state.model,
    });
  }
  changePreview = ()=>{
    this.setState({
      preView: !this.state.preView,
    })
  }
  render () {
    const { markdownValue, preView, model } = this.state;
    return (
      <AllBox>
        <MarkdownBox>
          <TextBox>
            <ToolBar>
              <Col span={1} onClick={this.undo}>
                <Tooltip placement="bottom" title="撤销">
                  <Icon type="step-backward" />
                </Tooltip>
              </Col>
              <Col span={1} onClick={this.redo}>
                <Tooltip placement="bottom" title="下一步">
                  <Icon type="step-forward" />
                </Tooltip>
              </Col>
              <Col span={1} data-type="h1" onClick={this.insert}>
                <Tooltip placement="bottom" title="一级标题">
                  H1
                </Tooltip>
              </Col>
              <Col span={1} data-type="h2" onClick={this.insert}>
                <Tooltip placement="bottom" title="二级标题">
                  H2
                </Tooltip>
              </Col>
              <Col span={1} data-type="h3" onClick={this.insert}>
                <Tooltip placement="bottom" title="三级标题">
                  H3
                </Tooltip>
              </Col>
              <Col span={1} data-type="h4" onClick={this.insert}>
                <Tooltip placement="bottom" title="四级标题">
                  H4
                </Tooltip>
              </Col>
              <Col span={1} data-type="table" onClick={this.insert}>
                <Tooltip placement="bottom" title="表格">
                  <Icon type="table" />
                </Tooltip>
              </Col>
              <Col span={1} data-type="code" onClick={this.insert}>
                <Tooltip placement="bottom" title="代码">
                  <Icon type="edit" />
                </Tooltip>
              </Col>
              <Col span={1} data-type="list" onClick={this.insert}>
                <Tooltip placement="bottom" title="列表">
                  <Icon type="ordered-list" />
                </Tooltip>
              </Col>
              <Col span={1} data-type="block" onClick={this.insert}>
                <Tooltip placement="bottom" title="引用">
                  <Icon type="file-search" />
                </Tooltip>
              </Col>
              <Col span={1} data-type="pic">
                <Upload
                  showUploadList = {false}
                  customRequest={({ file }) => { this.uploadImage(file)}} //上传函数
                  beforeUpload={() => { }}  //上传之前
                >
                  <Tooltip placement="bottom" title="上传图片">
                    <Icon type="camera" />
                  </Tooltip>
                </Upload>
              </Col>
              <Col span={1} data-type="link" onClick={this.insert} >
                <Tooltip placement="bottom" title="插入链接">
                  <Icon type="link" />
                </Tooltip>
              </Col>
              <Col span={1} onClick={this.changeModel} >
                <Tooltip placement="bottom" title="查看markdown语法">
                  <Icon type="book" />
                </Tooltip>
              </Col>
              <Col span={1} onClick={this.handleSave}>
                <Tooltip placement="bottom" title="保存">
                  <Icon type="save" />
                </Tooltip>
              </Col>
              <Col offset={6} span={2} >
                <Tooltip placement="bottom" title="回到首页">
                  <Link to="/home"><Icon type="rollback" /></Link>
                </Tooltip>
              </Col>
              <Col span={2} onClick={this.changePreview} >
                <Tooltip placement="bottom" title="预览">
                  <Icon type="eye" />
                </Tooltip>
              </Col>
            </ToolBar>
            <MarkdownText
              ref={this.handleMarkdownRef}
              value={markdownValue}
              onChange={this.onChange}
            />
          </TextBox>
          <ViewBox className={preView ? '' : 'unshow'}>
            <div
              className="for-preview for-markdown-preview"
              dangerouslySetInnerHTML={{ __html: marked(markdownValue) }}
            />
          </ViewBox>
          <Modal
            title="Markdown语法简介"
            visible={model}
            footer={null}
            onCancel={this.changeModel}
          >
            <ModalWrap>
              <p>>> 嵌套引用 </p>
              <p>*斜体*</p>
              <p>**粗体**</p>
              <p>`使用反引号标记`</p>
              <p>* [x] 已完成选项</p>
              <br />
              <p>1. 有序列表第一项</p>
              <p>2. 有序列表第二项</p>
              <br />
              <p>***或--- 三个或以上设置分割线</p>
              <p>##### 五级标题</p>
              <p>[标题](链接地址)</p>
              <p>![图片描述](图片链接地址)</p>
            </ModalWrap>
          </Modal>
        </MarkdownBox>
      </AllBox>
    )
  }
}

export default Markdown;