import React from 'react';
import {
 Link, withRouter,
} from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Navbar from './navbar';


const breadcrumbNameMap = {
  '/commen': 'home',
  '/commen/write': 'write',
  '/commen/word': 'word',
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
  '/game/cube': 'cube',
  '/game/mines': 'mines',
  '/game/snake': 'snake',
  '/game/memory': 'memory',
  '/game/memory2': 'memory2',
  '/game/klotski': 'klotski',
  '/game/logicgame': 'logicgame',
  '/game/bamboo': 'bamboo',
};
const BreadCrumb = withRouter((props) => {
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
    </React.Fragment>
  );
});
export default BreadCrumb;