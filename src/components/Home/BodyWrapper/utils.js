import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, Icon, Button, List, Alert,
  Avatar, Card, Message,
} from 'antd';
import {
  DraggerWrapper,
} from './Commen/components/style';
import {
  CardWrapper
} from './Commen/style';
import { white } from 'ansi-colors';
const { Dragger } = Upload;

/**
 * 拖拽上传文件 Commen/components/dragggerFile
 */
export const DraggerF = props => (
  <DraggerWrapper>
    <div style={{textAlign: 'right', margin: '20px 0'}}>
    <Button type="primary" onClick={props.toFM}>进入管理界面</Button>
    </div>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">点击或拖拽上传</p>
    </Dragger>
  </DraggerWrapper>
);
/**
 * 文件管理员 Commen/components/makFile
 */
export const DraggerManager = props => (
  <List
    header={<Alert message="文件列表" type="success" />}
    footer={<Alert style={{cursor:'pointer'}} onClick={()=>{}} message={`打包下载${props.value.length}个文件`} type="info" />}
    bordered
    dataSource={props.value}
    renderItem={item => (<List.Item style={{paddingRight:40,display:'flex',justifyContent: 'space-between'}}>
        <div style={{fontSize:20, margin: '0 40px'}}>{item.name}</div>
        <Button type="primary" shape="circle" icon="download" onClick={()=>{}}/>
    </List.Item>)}
  />
);
/**
 * home卡片 Commen/index; Vocation/index
 */
export const getCard = data => (
  <CardWrapper>
  {
    data.map((item)=>(
      <Card
        key={item.url}
        title={
          <Avatar shape="square" src={item.src} />
        }
        extra={<Link to={item.url}>More</Link>}
        style={{width:300,margin:'20px 0'}}
          >
        <p>{item.content}</p>
      </Card>
    ))
  }
  </CardWrapper>
);

/**
 * 拷贝到复制板 Vocation/saftcolor
 */
export const copyClick = (content) => {
  let aux = document.createElement("input");
  // 设置元素内容
  aux.setAttribute("value", content);
  aux.setAttribute("display", 'none');
  // 将元素插入页面进行调用
  document.body.appendChild(aux);
  // 复制内容
  aux.select();
  // 将内容复制到剪贴板
  document.execCommand("copy");
  // 删除创建元素
  document.body.removeChild(aux);
  const a = (<span><span style={{background: '#00CC33'}}>&nbsp;&nbsp;{content}&nbsp;&nbsp;</span><span>&nbsp;已复制</span></span>)
  Message.success(a);
}

/**
 * /Vocation/regexp 处理canvas
 */
/*
点: 任意字符                 .
至少n次                     {n}
至少m次但不超过n次            {m,n}
和 {0,1}一样                 ？
和 {0,}一样                  *
和 {1,}一样                  +
字符的集合                     [...]
和 [a-zA-Z0-9_]             \w
和 [0-9]                    \d
和 [\t\r\n ] 类似 空格            \s
非字符的集合                    [^...]
分组和捕获                      (...);
不捕获分组                      (？...);
String开始                     ^
String结尾                     $
单词边界                        \b 
不是单词边界                     \B
后置断言                        (?= )
//回溯引用下标                     \N 不必看

出现原生必须加'\' : [".", "\", ]未完

特殊必有字符集合：[".","(",")","[","]","{","}","?","*","+","\","^","$"];
先检测{}再检测（）在检测[]
*/
/**
 * 函数
 */
const getRegArr = (a)=>{
  let arr=[],tempStr = "";
  for(let i=0; i<a.length; i++){
    const item = a[i];
    if(item==="$"){
      if(tempStr) {
        arr.push(tempStr);
        tempStr = '';
      }
      arr.push(item);
    }else if(a[i+1]&&a[i+1] === '\\'){
      const spec = a.substr(i,2);
      const specArr = ["b","w","s","d","D","S","D"]
      if(specArr.indexOf(spec[0])>-1){
        if(tempStr) {
          arr.push(tempStr);
          tempStr = '';
        }
        arr.push(spec);
      }else{
        tempStr+=item;
      }
      i++;
    }else if(item === "^"){
      if(tempStr) {
        arr.push(tempStr);
        tempStr = '';
      }
      arr.push(item);
    }else if(item==="}"){
      if(tempStr) {
        arr.push(tempStr);
        tempStr = '';
      }
      const substr1 = a.substr(i);
      if(substr1.match(/\}(?=[^\/])\d+,\d+\{(?=[^\/])/).index === 0){
        const oneWord = substr1.match(/\}\d+,\d+\{\w/);
        if(oneWord&&oneWord.index===0){
          arr.push(oneWord[0]);
          i+=oneWord[0].length-1;
          continue;
        }
        const midbkt = substr1.match(/\}\d+,\d+\{\](?=[^\/]).+?\[(?=[^\/])/);
        if(midbkt&&midbkt.index===0){
          arr.push(midbkt[0]);
          i+=midbkt[0].length-1;
          continue;
        }
        const smallbkt = substr1.match(/\}\d+,\d+\{\)(?=[^\/]).+?\((?=[^\/])/);
        if(smallbkt&&smallbkt.index===0){
          const small = smallbkt[0];
          i+=smallbkt[0].length;
          while (i<a.length) {
            if(small.match(/[\)\(]/g).length%2){
              small+=arr[i];
              i++;
            }else{
              break;
            }
          }
          i-=1;
          arr.push(small);
          continue;
        }
      }else{
        tempStr += item;
      }
    }else if(item === "]"){
      if(tempStr) {
        arr.push(tempStr);
        tempStr = '';
      }
      const substr2 = a.substr(i);
      const match = substr2.match(/\](?=[^\/]).*?\[(?=[^\/]|$)/);
      if(match&&match.index === 0){
        arr.push(match[0]);
        i+=match[0].length-1;
      }else{
        tempStr += item;
      }
    }else if(item === ")"){
      if(tempStr) {
        arr.push(tempStr);
        tempStr = '';
      }
      const substr3 = a.substr(i);
      let match1 = substr3.match(/\)(?=[^\/]).*?\((?=[^\/]|$)/);
      if(match1&&match1.index === 0){
        arr.push(match1[0]);
        i+=match1[0].length-1;
      }else{
        tempStr += item;
      }
    }else{
      tempStr+=item;
    }
  }
  if(tempStr) {
    arr.push(tempStr);
    tempStr = '';
  }
  return arr.reverse();
}

const  regexp = (stra)=>{
  const newStra = getRegArr(stra);
  const newSa =  newStra.map((item,index)=> {
    if(item.match(/^\).*=\?\($/)){
      return (
        <span className="afterSearch" key={item+index}>{regexp(item.slice(1,-3))}</span>
      )
    }else if(item.match(/^\).*\($/)){
      return (
        <span className="small" key={item+index}>{regexp(item.slice(1,-1))}</span>
      );
    }else if(item.match(/^\}\d+,\d+\{.+/)){
      const index = item.match(/^\}\d+,\d+\{/)[0].length;
      return (
        <span className="large" key={item+index}>{regexp(item.substr(index))}</span>
      )
    }else if(item.match(/^\]\d+,\d+\[/)){
      return (
        <span className="second" key={item+index}>{item.split('').reverse().join('')}</span>
      )
    }else{
      return (
        <span className="content" key={item+index}>{item.split('').reverse().join('')}</span>
      )
    }
  });
  return newSa;
}
/**
 * 绘图 /Vocation/regExp
 */
export const DrawCanvas = (props) => {
  let a = props.regVal;
  //console.log("a",a==="(abc)1\\be(24[2,3]{1,5}){0,2}ew[2,4]ewe{3,4}(?=ew)");
  //a = "(abc)1\\be(24[2,3]{1,5}){0,2}ew[2,4]ewe{3,4}(?=ew)";
  a = a.replace(/\?(?!=)/,"{0,1}")
       .replace(/\*/,"{0,}")
       .replace(/\+/, "{1,}");
  a = a.split('').reverse();
  const stra = a.join('');
  return regexp(stra);
}

/**
 * /Vocation/cipher.js
 */
