//打字软件https://github.com/webzhd/react-code-game
import React, { Component } from 'react';
import { Input, Tag, Upload, Button, Icon, message } from 'antd';
import {
  WordWrapper, WordItem
} from './style';
class Word extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:['13','4'],
      word: ['先把每一个总单词在网页上显示在分组','34'],
    }
  }
  handleChange = (e)=>{
     this.setState({
       value: e.target.value,
     })
  }
  getFileContent = (fileInput, callback)=>{
    if (fileInput.file) {
        //下面这一句相当于JQuery的：var file =$("#upload").prop('files')[0];
        let file = fileInput.file;
        console.log(file);
        if (window.FileReader) {
            let reader = new FileReader();
            reader.onloadend = function (evt) {
                if (evt.target.readyState == FileReader.DONE) {
                    callback(evt.target.result);
                }
            };
            // 包含中文内容用gbk编码
            reader.readAsText(file, 'gbk');
        }
    }
  }
  render(){
    const props = {
      name: 'file',
      customRequest: (file)=>{
        this.getFileContent(file,(str)=>{
          if(str.length>0){
            message.success("上传成功");
          }
          this.setState({
            word: str,
          })
        })
      },
    };
    return <WordWrapper>
      <Upload {...props}  fileList={[]}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
      <WordItem>
        {
          this.state.word.map((item,wordIndex)=>{
           const checkwords = this.state.value[wordIndex].split('');
           return <div key={wordIndex} className='word' style={{marginTop:32}}>
              {
                item.split('').map((item,index)=>{
                  let typeClassName = '';
                  if(checkwords[index]===item){
                    typeClassName = 'right';
                  }else if(checkwords[index]!==item&&(checkwords.length)>index){
                    typeClassName = 'wrong';
                  } 
                  return <span key={index} className = {typeClassName} >
                    {item}
                  </span>
                })
              }
              <Input
                id={''+wordIndex}
                onChange={this.handleChange}
              ></Input>
            </div>
          })
        }
      </WordItem>
    </WordWrapper>
  }
}
export default Word;