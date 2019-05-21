import React from 'react';
import {
  Route, Switch, Link, withRouter,
} from 'react-router-dom';
import { Breadcrumb } from 'antd';

import Navbar from './navbar';


import Home from './Home';
import Commen from './Commen';
import Vocation from './Vocation';
import Game from './Game';
const breadcrumbNameMap = {
  '/commen': 'home',
  '/commen/write': 'write',
  '/commen/file': 'file',
  '/commen/file/id': 'upload',
  '/commen/file/id/manager': 'manager',
  '/commen/school': 'school',
  '/commen/formula': 'formula',
  '/commen/calculating': 'calculating',
  '/commen/relationship': 'relationship',
  '/vocation': 'vocation',
  '/vocation/saftcolor': 'saftcolor',
  '/vocation/api': 'api',
  '/vocation/reptile': 'reptile',
  '/vocation/regexp': 'regexp',
  '/vocation/algorithm': 'algorithm',
  '/vocation/cipher': 'cipher',
  '/vocation/qrcode': 'qrcode',
  '/vocation/reference': 'reference',
  '/game': 'game',
  '/game/sdoku': 'sdoku',
  '/game/mines': 'mines',
  '/game/snake': 'snake',
  '/game/memory': 'memory',
  '/game/memory2': 'memory2',
  '/game/klotski': 'klotski',
  '/game/logicgame': 'logicgame',
  '/game/bamboo': 'bamboo',
};
const HeaderWrapper = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  let selectIndex = "home";
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const Arr = url.split('/');
    selectIndex = Arr[1];
    let newUrl=url.replace(/(\/[1-9]+$)|(\/[1-9]+\/)/, '/id/');
    const last = newUrl.substr(-1);
    newUrl = last==='/'? newUrl.slice(0,-1):newUrl;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[newUrl]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <React.Fragment>
      <Breadcrumb separator=">">
        {breadcrumbItems}
      </Breadcrumb>
      <Navbar selectIndex={selectIndex}></Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commen" component={Commen} />
        <Route path="/vocation" component={Vocation} />
        <Route path="/game" component={Game} />
      </Switch>
    </React.Fragment>
  );
});
export default HeaderWrapper;











/*import React from 'react'
import 
const HeaderWrapper = () => (
  <React.Fragment>
    <Logo/>
  </React.Fragment>
)

export default HeaderWrapper

const aux = document.getElementById("regSpan");
const getSpanWidth = (val)=>{
  // 设置元素内容
  aux.innerText ="\" " + val + " \"";
  // 长度
  const len = aux.offsetWidth;
  // 删除创建元素
  return len;
}
const drawLine = (width=140,height=100, x=0, y=0, val="重复")=>{
  const wid = width/2;
  const hei = height/2;
  return (
    <g transform={`translate(${x},${y})`}>
    <line
      x1={wid*2} y1={0}
      x2={wid*2} y2={hei}
      stroke="#000"
      strokeWidth="1"/>
    <line
      x1={wid*2} y1={hei}
      x2={wid} y2={hei}
      stroke="#000"
      strokeWidth="1"
      markerEnd="url(#arrow)" />
    <line
      x1={wid} y1={hei}
      x2={0} y2={hei}
      stroke="#000"
      strokeWidth="1"/>
    <line
      x1={0} y1={hei}
      x2={0} y2={0}
      stroke="#000"
      strokeWidth="1"/>
    <text x={0} y={hei}>
      <tspan>{val}</tspan>
    </text>
    </g>
  );
}
const getShape = {
  begin: ()=>{
    return (
      <circle cx="20" cy={0} r="5"></circle>
    )
  },
  value: ()=>{
    const len = getSpanWidth("12332323");
    return (
      <g x="50">
        <rect width={len} height="25" rx="3" ry="3"></rect>
        <text x="0" y="0">
          <tspan>“</tspan>
          <tspan>&nbsp;12332323&nbsp;</tspan>
          <tspan>“</tspan>
        </text>
      </g>
    )
  },
  line: ()=>{
   // return <path stroke="purple" strokeWidth="3" fill="none" d="M 50 450 H 700" marker-end="url(#idArrow)"  />
  }
}
export const DrawCanvas = (str, ctx) => {
  console.log(str, ctx);
  const reg = []; //保存数据对象
  let regData = [{
    type: "large",
    value: "(12324[2,3]{1,5})",
    groupId: -1,  //-1表示不分组
    bgtime: 0, // 1标识无次数
    edtime: 2,
    width: 100,
    height: 100,
    children:{
      type:  
    }
  }];
  const drawReg = ()=> {
    console.log(regData);
  }
  return (
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{background:"white", overflow:"auto"}} width="960" height="300">
     <defs>
        <marker id="arrow"
                markerWidth="10" markerHeight="10"
                refX="0" refY="10"
                orient="auto"
                markerUnits="strokeWidth"
                viewBox="0 0 20 20">
          <path
                d="M0,0 L0,20 L24,10 z"
                fill="#f00"
                />
        </marker>
      </defs>
      <g transform="translate(20,130)">
          <g transform="translate(40,0)">
            {drawReg()}
          </g>
      </g>
    </svg>
  )
}
//<polygon points="100,10 40,180 190,60 10,60 160,180" style={{fill:'lime',stroke:'purple',strokeWidth:5,fillRule:'evenodd'}} />
//


*/


/**
 * 配置数学公式MathJax  /Commen/formula
 */
/*
let isMathjaxConfig = false;
export const initMathjaxConfig = () => {
  if(isMathjaxConfig||!window.MathJax){
    return;
  }
  window.MathJax.Hub.Config({
    showProcessingMessages: false, //关闭js加载过程信息
    messageStyle: "none", //不显示信息
    //jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
      displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
      skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //避开某些标签
    },
    "HTML-CSS": {
      availableFonts: ["Italic"], //可选字体 ,
      showMathMenu: false //关闭右击菜单显示
    }
  });
  isMathjaxConfig = true;
  window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.getElementById('FormulaRoot')]);
};*/