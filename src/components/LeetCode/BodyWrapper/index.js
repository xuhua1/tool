import React, { Component } from 'react';
import {
  Algo, Solution
} from './style';
import { Input } from 'antd';
const placehole = `

请使用main为主函数,返回结果数组
main(nums,target);
`
class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      solution:'',
      solutiondata:[
        {args:[[2, 7, 11, 15],9],retrn:[0,1]}
      ],
    }
  }
  solute = ()=>{
    let main;
    eval('main = (a)=>{alert(a)};');
    main(1);
  }
  render(){
    return<div>
      <Algo>
      <p>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p>
      <p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>
      <p> 给定 nums = [2, 7, 11, 15], target = 9 </p>

      <p> 因为 nums[0] + nums[1] = 2 + 7 = 9 </p>
      <p> 所以返回 [0, 1] </p>
      </Algo>
      <Solution>
        <Input.TextArea placeholder = {placehole} autosize={{minRows: 10,maxRows:10}}></Input.TextArea>
      </Solution>
    </div>
  }
}
export default Body;