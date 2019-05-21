import React, { Component } from 'react';
import QRCode from 'qrcodejs2';
import { Input, Row, Col, Alert, Button } from 'antd';
import {
  QRCodeWrapper
} from './style';
class Qrcode extends Component {
  constructor(props){
    super(props);
    this.qrcodeRef = React.createRef();
    this.state = {}
  }
  componentDidMount(){
    this.setState({
      url: "https://baidu.com",
    })
    this.creatQrCode(this.state.url);
  }
  creatQrCode(text="https://baidu.com",width=100,height=100) {
    const qrcode = new QRCode(this.qrcodeRef.current, {
        text,
        width,
        height,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
   })
  }
  downloadQRCodeImg = ()=>{
    //参考
    const baseToBlob = this.base64ToBlob(this.qrcodeRef.current.childNodes[1].src);
    const link = document.createElement('a');
    const linkHref = window.URL.createObjectURL(baseToBlob);
    link.href = linkHref;
    link.download = "qrcode";
    link.click();
    window.URL.revokeObjectURL(linkHref);
  }
  base64ToBlob = (urlData)=>{
    let arr = urlData.split(',');
    let mime = arr[0].match(/:(.*?);/)[1] || 'image/png';
    // 去掉url的头，并转化为byte
    let bytes = window.atob(arr[1]);
    // 处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {
        type: "image/png",
    });
  }
  render(){
    return (
      <QRCodeWrapper>
        <Row>
          <Col offset={4} span={16}>
            <Input placeholder="输入网址"/>
          </Col>
        </Row>
        <Row>
          <Col offset={4} span={16} style={{textAlign:"center"}}>
            <div id="qrcode" ref={this.qrcodeRef}></div>
          </Col>
        </Row>
        <Row>
          <Col offset={4} span={16} style={{textAlign:"center"}}>
            <Alert message={this.state.url} type="success"></Alert>
          </Col>
        </Row>
        <Row>
          <Col offset={10} span={4} style={{textAlign:"center"}}>
            <Button onClick={this.downloadQRCodeImg}>下载</Button>
          </Col>
        </Row>
      </QRCodeWrapper>
    )
  }
}
export default Qrcode;