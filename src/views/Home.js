import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import { 
  Header
} from './Style';
import {
  HeaderWrapper,
  BodyWrapper,
} from '../components/Home';
const { Content, Footer } = Layout;
const Home = (props) => {
    return (
      <Layout style={{height:'100%', width: '960px', margin: '0 auto'}}>
      <Header>
        <HeaderWrapper/>
      </Header>
      <Content style={{ overflow:'hidden', position: 'relative'}}>
        <BodyWrapper/>
      </Content>
    </Layout>
    )
};
export default Home;
