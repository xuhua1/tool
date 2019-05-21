
import React, { Component } from 'react';
import {Table} from 'antd';
import dataArr from '../../data.js';
import {
  IntroduceWrap
} from './style';
const baseImgSrc = "http://college.gaokao.com/style/college/images/icon/";
const dataStrArr = dataArr.map(item=>{
  let str = '';
  for (let i in item){
    str+=item[i];
  }
  return str;
});
const columns = [{
  title: '图片',
  dataIndex: 'image',
  key: 'image',
  render: (text)=>{
    return (
      <div>
        <img src={text} style={{width:50,height:50}}/>
      </div>
    )
  }
}, {
  title: '介绍',
  dataIndex: 'introduce',
  key: 'introduce',
  render: (text)=>{
    return (
      <IntroduceWrap>
        <div>
          <p>{text.name}</p>
          <p>{text.is985211}</p>
          <p>{text.location}</p>
        </div>
        <div>
          <p>{text.belong}</p>
          <p>{text.property}</p>
          <p>{text.url}</p>
        </div>
      </IntroduceWrap>
    )
  }
}, {
  title: '排名',
  dataIndex: 'ranking',
  key: 'ranking',
  render: (text)=>{
    return (
      <div>
        {text}
      </div>
    )
  }
}];
class ShowSchool extends Component {
  constructor(props){
    super(props);
  }
  affiliatedTableTableChangePage = (...e)=>{
    console.log(e)
  }
  pushData = (Arr,dataSource)=>{
    Arr.forEach((item,index)=>{
      dataSource.push({
        key: index+'',
        image: baseImgSrc + item.srcId+'.png',
        introduce: {
          name: item.name,
          location: item.location,
          is985211: item.is985211,
          belong: item.belong,
          property: item.property,
          url: item.url,
        },
        ranking: item.pm,
      })
    });
  }
  render(){
    const dataSource = [];
    if(this.props.searchValue){
      const indexArr = [];
      dataStrArr.forEach((item,index)=>{
        if(item.indexOf(this.props.searchValue)>=0){
          indexArr.push(dataArr[index]);
        }
      })
      this.pushData(indexArr, dataSource);
      return ( <Table 
        showHeader={false} 
        columns={columns} 
        dataSource={dataSource}
        pagination={{
          onChange: this.affiliatedTableTableChangePage,
        }}
        style={{paddingBottom:20, alignItem: 'center'}}
      />);
    }
    this.pushData(dataArr, dataSource);
    return ( <Table 
      showHeader={false} 
      columns={columns} 
      dataSource={dataSource}
      pagination={{
        onChange: this.affiliatedTableTableChangePage,
      }}
      style={{paddingBottom:20, alignItem: 'center'}}
    />);
  }
}
export default ShowSchool;
