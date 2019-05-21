import React, { Component } from 'react';
import { Input,Row, Col } from 'antd';
import {
  ComLayout,
} from './style';
import ShowSchool from './components/showSchool';
const { Search } = Input;
class School extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue:'',
    }
  }
  handleSearch = (e)=>{
    if(e.target){
      this.setState({
        searchValue: e.target.value
      })
    }
  }
  render(){
    return (
      <ComLayout>
        <Row style={{margin: 20}}>
          <Col offset={8} span={8}>
          <Search
            placeholder="输入内容"
            style={{width:'100%'}} 
            style={{ width: 200 }}
            onSearch={this.handleSearch}
            onChange={this.handleSearch}
          />
          </Col>
        </Row>
        <ShowSchool searchValue={this.state.searchValue}/>
      </ComLayout>
    )
  }
}
export default School;