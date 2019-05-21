import React, { Component } from 'react';
import SaftColor from './saftcolor';
import Api from './api';
import Reptile from './reptile';
import Regexp from './regexp';
import Algorithm from './algorithm';
import Cipher from './cipher';
import Qrcode from './qrcode';
import Reference from './reference';
import { Route, Switch } from 'react-router-dom';
import { getCard } from '../utils';
class Index extends Component {
  render(){
    const data = [
      {src:'',url: '/vocation/saftcolor',content:'saftColor'},
      {src:'',url: '/vocation/api',content:'api请求'},   
      {src:'',url: '/vocation/reptile',content:'简易在线爬虫'},
      {src:'',url: '/vocation/regexp',content:'正则可视化'},
      {src:'',url: '/vocation/algorithm',content:'图示算法'},
      {src:'',url: '/vocation/cipher',content:'加密相关'}, 
      {src:'',url: '/vocation/qrcode',content:'生成二维码'}, 
      {src:'',url: '/vocation/reference',content:'Web参考书籍'}, 
    ];
    return (
      <React.Fragment>
        <Switch>
          <Route path="/vocation" exact render={()=>getCard(data)}></Route>
          <Route path="/vocation/saftcolor" component={SaftColor}></Route>
          <Route path="/vocation/api" component={Api}></Route>
          <Route path="/vocation/reptile" component={Reptile}></Route>
          <Route path="/vocation/regexp" component={Regexp}></Route>
          <Route path="/vocation/algorithm" component={Algorithm}></Route>
          <Route path="/vocation/cipher" component={Cipher}></Route>
          <Route path="/vocation/qrcode" component={Qrcode}></Route>
          <Route path="/vocation/reference" component={Reference}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}
export default Index;