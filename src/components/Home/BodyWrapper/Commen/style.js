import styled from 'styled-components';
import { Row } from 'antd';
/**
 * Home
 */
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/**
 * File
 */
export const CardButton = styled.div`
  width: 400px;
  text-align: left;
  margin: 10px auto;
  z-index: 99;
`;
export const UploadFile = styled.div`
  width: 100%;
`;
export const ComLayout = styled.div`
  position: absolute;
  width: 960px;
  left: 0;
  right: 0;
  top: 67px;
  bottom: 0;
`;
export const Content = styled.div`
  width: 560px;
  position: absolute;
  left: 0;
  top: 0;
  bottom:0;
  text-align: center;
`;
export const Sider = styled.div`
  width: 400px;
  position: absolute;
  right: 0;
  top: 0;
  bottom:0;
`;
/**
 * formula 
 */
export const FormulaWrap = styled.div`
  margin-top: 120px;
  .mjx-chtml {
    outline: 0;
  }
  .MJXc-display {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
export const BtnRow = styled(Row)`
  margin-top: 40px;
  position: absolute;
  width: 960px;
  z-index: 99;
`;
export const Titlediv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 220px;
  div{
    width: 20px;
    margin: 1px 2px;
    height: 20px;
    background:rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
`;

/**
 * relationship
 */
export const RelationWrapper = styled.div`
  &>div{
    margin-top: 20px;
  }
  button{
    width: 40px;
    padding: 0px;
    text-align: center;
  }
`;

/**
 * calculating
 */
export const ClatBtnWrapper = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  marginTop: 10px;
  span{
    display: inline-block;
    width: 100px;
    height: 80px;
    box-sizing: border-box;
    line-height: 80px;
    font-size: 30px;
    text-align: center;
  }
`;
export const FunWrapper  = styled.div`
  width: 400px;
  margin: auto;
  span{
    display: inline-block;
    width: 130px;
    height: 80px;
    box-sizing: border-box;
    line-height: 80px;
    font-size: 30px;
    text-align: center;
  }
`;
export const AlertWrapper = styled.div`
  text-align: right;
  input{
    text-align: right;
  }
`;

/**
 * write/marked.js
 */
export const Back = styled.div`
  cursor: pointer;
  display: block;
  width: 60;
  height: 30;
  font-size: 20px;
  letter-spacing: 4px;
  padding: 8px;
  border-radius: 4px;
  margin-top: 27px;
  background:pink;
  position: fixed;
  left: 50%;
  top: 5px;
  margin-left: -570px;
`;

export const Release = styled.div`
  display:block;
  cursor: pointer;
  width: 60;
  height: 30;
  font-size: 20px;
  letter-spacing: 4px;
  padding: 8px;
  border-radius: 4px;
  margin-top: 27px;
  margin-right:15px;
  background:pink;
  position: fixed;
  left: 50%;
  top: 5px;
  margin-left: 530px;
  span {
    font-size: 24px;
  }
`;

export const AllBox = styled.div`
  position: absolute;
  top: 69px;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(222,222,222,.5);
  overflow: hidden;
`;

export const MarkdownBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
`;
export const TextBox = styled.div`
  height: 100%;
  position: relative;
  flex: 1;
  width: 960px;
`;
export const ToolBar = styled(Row)`
  text-align: center;
  height: '30px';
  font-size: '20px';
  line-height: 30px;
  cursor: pointer;
`;
export const MarkdownText = styled.textarea`
  font-family: 'Consolas', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  position: absolute;
  top: 30px;
  bottom: 100px;
  padding: 8px 20px;
  font-family: inherit;
  display: block;
  height: 100%;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.65);
  background-color: rgb(255,255,255);
  line-height: inherit;
`;

export const ModalWrap = styled.div`
  p{
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;
export const ViewBox = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  width: 200px;
  height: 100%;
  overflow-y: scroll;
  flex: 1;
  &.unshow{
    display: none;
  }
  .for-markdown-preview {
    line-height: 2;
  
    p,
    blockquote,
    ul,
    ol,
    dl,
    pre {
      margin-top: 0;
      margin-bottom: .6em;
    }
  
    h1,
    h2 {
      border-bottom: 1px solid #e2e2e2;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0;
      margin: 0 0 .6em;
      font-weight: 600;
  
      text-indent: 0;
  
      &:target {
        padding-top: 4.5rem;
      }
    }
  
    a {
      color: #0366d6;
      text-decoration: none;
  
      &:hover {
        text-decoration: underline;
      }
    }
  
    
    ul,
    ol {
      padding: .2em .8em;
  
      > li {
        line-height: 2;
        padding-left: .2em;
        margin-left: .2em;
        list-style-type: disc;
  
        > p {
          text-indent: 0;
        }
  
        > ul {
          li {
            list-style-type: circle;
          }
  
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    
    > ul, ol {
      padding: 0 20px;
    }
  
    ol > li {
      list-style-type: decimal;
    }
  
    blockquote {
      margin: 0;
      margin-bottom: .6em;
      padding: 0 1em;
      color: #6a737d;
      border-left: 0.25em solid #dfe2e5;
  
      p {
        text-indent: 0;
  
        &:first-child {
          margin-top: 0;
        }
  
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  
    pre {
      padding: .6em;
      overflow: auto;
      line-height: 1.6;
      background-color: #aaa;
      border-radius: 3px;
  
      code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        background: transparent;
      }
    }
  
    code {
      padding: 0.2em 0.4em;
      margin: 0;
      background-color: #f0f0f0;
      border-radius: 3px;
    }
  
    hr {
      margin-bottom: .6em;
      height: 1px;
      background: #dadada;
      border: none;
    }
  
    table {
      width: 100%;
      border: 1px solid #ddd;
      margin-bottom: .6em;
      border-collapse: collapse;
      text-align: left;
      th, td {
        padding: .1em .4em;
        border: 1px solid #ddd;
      }
    }
  
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      margin-bottom: .6em;
    }
  }
`;

export const WordWrapper = styled.div`
  input{
    outline: none;
    border: none;
    overflow: hidden;
  }
  input:focus { 
    outline: none; 
    box-shadow: none;
  }
`;
export const WordItem = styled.div`
  .word{
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
  }
  .right{
    color:#0f0;
  }
  .wrong{
    color:red;
  }
`;