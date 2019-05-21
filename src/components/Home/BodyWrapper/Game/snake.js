import React,{ Component } from 'react';
import { Button, message } from 'antd';
import {
  SnakeWrapper
} from './style';
class SnakeItem {
  constructor(x, y, color="rgb(135, 208, 104)"){
    this.cx = x;
    this.cy = y;
    this.color = color;
    this.dirX = 1;
    this.dirY = 0;
  }
  move(dirArr,end){
    const [xIn, yIn] = [Math.floor((this.cx-10)/20), Math.floor((this.cy-10)/20)];
    if(dirArr[yIn][xIn]) {
      [this.dirX, this.dirY] = dirArr[yIn][xIn];
    }
    this.cx += 5 * this.dirX;
    this.cy += 5 * this.dirY;
    if(end){
      dirArr[yIn-this.dirX][xIn-this.dirY] = 0;
    }
  }
}
class Snake extends Component{
  constructor(props){
    super(props);
    this.snakeRef = React.createRef();
    let row = 25, col = 48;
    const arr = new Array(row*col).fill(0);
    const dirArr = [];
    for(let t=0;t<col;t++){
      dirArr.push(arr.slice(t*row,t*row+row));
    }
    this.canvasRef = React.createRef();
    this.canvasVal  = {
      row,
      col,
      snakeItem:null,
      divHeight: 20, // 25 * 48
      dirX: 0,
      dirY: 1,
      snakeArr:[],
      dirArr,
    };
  }
  componentDidMount(){
    this.ctx = this.canvasRef.current.getContext("2d");
    const a = new SnakeItem(10,10);
    const b = new SnakeItem(30,10);
    const newSnakeArr = [b,a];
    this.canvasVal.snakeArr  =  newSnakeArr;
    this.initCanvas(newSnakeArr);
    //this.canvasVal.dirArr[0][4] = [0,1];
    document.addEventListener("keydown",(e)=>{
      console.log(this.canvasVal);
      const first = this.canvasVal.snakeArr[0];
      const { cx, cy } = first;
      const { dirX, dirY } = first;
      const [xIn, yIn] = [Math.floor((cx-10)/20), Math.floor((cy-10)/20)];
      console.log(xIn, yIn);
      console.log(dirX, dirY);
      if(e.keyCode===37){
        this.canvasVal.dirArr[yIn+dirY][xIn+dirX] = [-1,0]; 
      }else if(e.keyCode==38){
        this.canvasVal.dirArr[yIn+dirY][xIn+dirX] = [0,-1]; 
      }else if(e.keyCode==39){
        this.canvasVal.dirArr[yIn+dirY][xIn+dirX] = [1,0];      
      }else if(e.keyCode==40){
        this.canvasVal.dirArr[yIn+dirY][xIn+dirX] = [0,1];         
      }else{
        //无作用
      }
      console.log(this.canvasVal.dirArr);
    })
    this.addOneSnakeItem();
    this.interval = setInterval(() => {
      const first = this.canvasVal.snakeArr[0];
      const snakeItem = this.canvasVal.snakeItem;
      if(snakeItem&&first.cx===snakeItem.cx&&first.cy===snakeItem.cy){
        this.addOneSnakeItem();
        this.addLastSnakeItem();
      }
      if(first.cx<10|first.cx>950|first.cy<10|first.cy>490){
        clearInterval(this.interval);
        message.error("撞墙了");
      }else{
        this.canvasVal.snakeArr.forEach((item,index)=>{
          item.move(this.canvasVal.dirArr,index===this.canvasVal.snakeArr.length);
        });
        this.initCanvas();
      }
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  addOneSnakeItem = ()=>{
    const x = Math.floor(Math.random()*this.canvasVal.col);
    const y = Math.floor(Math.random()*this.canvasVal.row);
    this.canvasVal.snakeItem = new SnakeItem(x*20+10,y*20+10);
  }
  addLastSnakeItem = ()=>{
    const snakeArr = this.canvasVal.snakeArr;
    const last = snakeArr[snakeArr.length-1];
    const {cx, cy, dirX, dirY } = last;
    const [newCx, newCy] = [cx-dirX*20, cy-dirY*20];
    const lastOne = new SnakeItem(newCx,newCy);
    lastOne.dirX = dirX;
    lastOne.dirY = dirY;
    this.canvasVal.snakeArr.push(lastOne);
  }
  initCanvas = (snakeArr = this.canvasVal.snakeArr )=>{
    this.ctx.clearRect(0,0,this.canvasRef.current.width,this.canvasRef.current.height);
    this.ctx.fillStyle="#0000FF";
    const drawPoint = (x,y) => {
      this.ctx.fillRect(x,y,1,1);
    }
    const drawSnakeItem = (x,y,color,r=10)=>{
      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, Math.PI*2, false);
      this.ctx.fill();
      this.ctx.closePath();
    }
    
    this.canvasVal.dirArr.forEach((rowItem, rowInd)=>{
      rowItem.forEach((colItem, colInd)=>{
        drawPoint(10+20*rowInd, 10+20*colInd);
      })
    })
    snakeArr.forEach((item,index)=>{
      drawSnakeItem(item.cx, item.cy, item.color);
    })
    if(this.canvasVal.snakeItem){
      const { cx, cy, color } = this.canvasVal.snakeItem;
      drawSnakeItem(cx, cy, color);
    }
  }
  render(){
    return (
      <React.Fragment>
        <SnakeWrapper>
          <canvas ref={this.canvasRef} width="960px" height="500px"></canvas>{/*使用div divshadow产生1200个div提高性能 最后选择画布*/}
        </SnakeWrapper>
      </React.Fragment>
    )
  }
}
export default Snake;