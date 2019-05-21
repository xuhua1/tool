import React, {Component} from 'react';
import { Layout } from 'antd';
import { 
  Header
} from './Style';
import {
  HeaderWrapper,
  BodyWrapper,
} from '../components/LeetCode';
const { Content, Footer } = Layout;
const LetCode = (props) => {
  return (
    <Layout style={{height:'100%', width: '100%', margin: '0 auto'}}>
    <Header>
      <HeaderWrapper/>
    </Header>
    <Content style={{ overflow:'hidden', position: 'relative'}}>
      <BodyWrapper/>
    </Content>
  </Layout>
  )
}
export default LetCode;