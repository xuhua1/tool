import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <Menu
    selectedKeys={[props.selectIndex]}
    mode="horizontal"
  >
    <Menu.Item key="home">
      <Link to='/'>主页</Link>
    </Menu.Item>
    <Menu.Item key="commen">
      <Link to='/commen'>共有</Link>
    </Menu.Item>
    <Menu.Item key="vocation">
    <Link to='/vocation'>职业</Link>
    </Menu.Item>
    <Menu.Item key="game">
    <Link to='/game'>游戏</Link>
    </Menu.Item>
  </Menu>
);
export default Navbar;