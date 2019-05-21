import React, { Component } from 'react';
import Write from './write';
import Word from './word';
import File from './file';
import School from './school';
import Formula from './formula';
import Calculating from './calculating';
import Relationship from './relationship';
import { Route, Switch } from 'react-router-dom';
import { getCard } from '../utils';

class Index extends Component {
  render(){
    const data = [
      {src:'',url: '/commen/write',content:'这是书写'},
      {src:'',url: '/commen/word',content:'打字软件'},
      {src:'',url: '/leetcode',content:'算法题目'},
      {src:'',url: '/commen/file',content:'这是文件'},
      {src:'',url: '/commen/school',content:'这是学校'},
      {src:'',url: '/commen/formula',content:'数学公式'},
      {src:'',url: '/commen/calculating',content:'计算器'},
      {src:'',url: '/commen/relationship',content:'亲戚计算器'},
    ]
    return (
      <React.Fragment>
        <Switch>
          <Route path="/commen" exact render={()=>getCard(data)}></Route>
          <Route path="/commen/word" component={Word}></Route>
          <Route path="/commen/write" component={Write}></Route>
          <Route path="/commen/file" component={File}></Route>
          <Route path="/commen/school" component={School}></Route>
          <Route path="/commen/formula" component={Formula}></Route>
          <Route path="/commen/calculating" component={Calculating}></Route>
          <Route path="/commen/relationship" component={Relationship}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}
export default Index;