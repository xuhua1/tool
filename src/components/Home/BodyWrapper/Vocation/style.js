import styled from 'styled-components';
export const ApiWrapper = styled.div`
  
`;
export const RegexpWrapper = styled.div`
  width: 80%;
  float: left;
  padding-top: 20px;
  input {
    margin: 20px 0;
  }
`;
export const Canvas = styled.div`
  width: 960px;
  overflow: auto;
  display: flex;
  &>span{
    display: inline-block;
    border: 1px solid red;
    margin: 0 20px;
  }
  .afterSearch{
    border: 1px solid red;
  }
  .small{
    border: 1px solid green;
  }
  .large{
    border: 1px solid purple;
  }
  .second{
    border: 1px solid blue;
  }
  .content
  
`;
export const Wrapper = styled.div`
  padding: 20px 0;
`;
export const AhItemWrapper = styled.div`
  position: absolute;
  margin: 20px 0;
  display: flex;
  justify-content: left;
  align-items: flex-end;
  height: 400px;
  width: 100%;
  .ahWrapper{
    position: absolute;
    left: 0;
    bottom: 0;
    .ahItem{
      width: 20px;
      margin: 0 10px;
      background: red;
    }
    .ahName{
      width: 30px;
      height: 20px;
      margin: 0 5px;
      background: green;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    }
  }
`;
export const QRCodeWrapper = styled.div`
  &>div{
    margin: 20px;
  }
  img{
    margin: auto;
  }
`;

export const CipherWrapper = styled.div`
  &>div{
    margin-top: 20px;
  }
`;
export const ReferWrapper = styled.div`
  width: 80%;
  margin: auto;
  &>div{
    margin-top: 20px;
  }
`;


















/*
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
}*/