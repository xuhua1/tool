import React, { Component } from 'react';
import {
  CubeWrapper, SqCube,CubeBox
} from './style';
class Cube extends Component {
  constructor(props){
    super(props);
    this.state = {
      positions:[],
      rotateX: 30,
      rotateY: 45,
    }
  }
  componentDidMount(){
    const positions = [];
    for (let x = 1; x < 4; x++) {
      for (let y = 1; y < 4; y++) {
        for (let z = 1; z < 4; z++) {
          positions.push([x, y, z])
        }
      }
    }
    this.setState({
      positions,
    })
  }
  handleMouseDown = (e) => {
    console.log(1);
    this.dragging = true;
    let firstX = e.clientX;
    let firstY = e.clientY;
    const handleMouseMove = (event) => {
      let { rotateY, rotateX } = this.state;
      rotateY += (event.clientX - firstX) * 0.5;
      rotateX -= (event.clientY - firstY) * 0.5;
      this.setState({
        rotateX,
        rotateY,
      })
      firstX = event.clientX;
      firstY = event.clientY;
    };
    const handleMouseUp = () => {
      if (this.dragging) {
        this.dragging = false;
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }
  render(){
    const { positions, rotateX, rotateY } = this.state;
    return <CubeWrapper onMouseDown = {this.handleMouseDown}>
      <CubeBox>
        <SqCube style={{ transformOrigin: 'center center',transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}>
          {
            positions.map((item,index)=>{
              const [x,y,z] = item;
              const color = {
                y1:y==1?'#0500c1':'',
                y3:y==3?'#138804':'',
                z1:z==1?'#f7f8f5':'',
                z3:z==3?'#f9fd0c':'',
                x1:x==1?'#f9640a':'',
                x3:x==3?'#c50209':'',
              }
              const YY = ['translateX(-44px)', 'translateX(-0px)', 'translateX(44px)'];
              const YYO = ['64px', '20px', '-24px'];

              const ZZ = [' translateY(44px)', ' translateY(-0px)', ' translateY(-44px)'];
              const ZZO = [' -24px', ' 40px', ' 64px'];

              const XX = [' translateZ(-44px)', ' translateZ(-0px)', ' translateZ(44px)'];
              const XXO = [' 44px', ' 0px', ' -64px'];
              let rotate = {
                X:0,
                Y:0,
                Z:0,
              }
              let transform = YY[y-1]+ZZ[z-1]+XX[x-1];
              transform += ` rotateX(${rotate.X * 90}deg) rotateY(${rotate.Y * 90}deg) rotateZ(${rotate.Z * 90}deg)`
              let transformOrigin = YYO[y-1]+ZZO[z-1]+XXO[x-1];
              
              
              return <div className="box" style={{transform, transformOrigin}} key={index}>
                  <div className="face" style={{background:color.x3}}></div>
                  <div className="face" style={{background:color.y3}}></div>
                  <div className="face" style={{background:color.z1}}></div>
                  <div className="face" style={{background:color.y1}}></div>
                  <div className="face" style={{background:color.z3}}></div>
                  <div className="face" style={{background:color.x1}}></div>
              </div>
            })
          }
        </SqCube>
      </CubeBox>
    </CubeWrapper>
  }
}
export default Cube;