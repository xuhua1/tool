import React from 'react';
import { withRouter } from 'react-router-dom';
import Home from './Home';
import LeetCode from './Leetcode';
const Index = withRouter((props) => {
  if(props.location.pathname.match(/leetcode/)){
    return <LeetCode></LeetCode>
  }else{
    return <Home></Home>
  }
});
export default Index;
