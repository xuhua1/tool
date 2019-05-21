import React, { Component } from 'react';
import Sdoku from './sdoku';
import Cube from './cube';
import Mines from './mines';
import Snake from './snake';
import Memory from './memory';
import Memory2 from './memory2';
import Klotski from './klotski';
import Logicgame from './logicgame';
import Bamboo from './bamboo';
import { Route, Switch } from 'react-router-dom';
import { getCard } from '../utils';
class Index extends Component {
  render(){
    const data = [
      {src:'',url: '/game/sdoku',content:'数独'},
      {src:'',url: '/game/cube',content:'魔方'},
      {src:'',url: '/game/mines',content:'排雷'},
      {src:'',url: '/game/snake',content:'贪吃蛇'},
      {src:'',url: '/game/memory',content:'记忆大师'},
      {src:'',url: '/game/memory2',content:'记忆大师2'},
      {src:'',url: '/game/klotski',content:'华容道解密'},
      {src:'',url: '/game/logicgame',content:'逻辑游戏'},
      {src:'',url: '/game/bamboo',content:'欢乐竹竿'},
    ];
    console.log(data);
    return (
      <React.Fragment>
        <Switch>
          <Route path="/game" exact render={()=>getCard(data)}></Route>
          <Route path="/game/cube" component={Cube}></Route>
          <Route path="/game/sdoku" component={Sdoku}></Route>
          <Route path="/game/mines" component={Mines}></Route>
          <Route path="/game/snake" component={Snake}></Route>
          <Route path="/game/memory" component={Memory}></Route>
          <Route path="/game/memory2" component={Memory2}></Route>
          <Route path="/game/klotski" component={Klotski}></Route>
          <Route path="/game/logicgame" component={Logicgame}></Route>
          <Route path="/game/bamboo" component={Bamboo}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}
export default Index;