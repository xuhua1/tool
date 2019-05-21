import styled from 'styled-components';
export const CubeWrapper = styled.div`
  border: 2px solid green;
  overflow: hidden;
`;
export const CubeBox = styled.div`
  width: 200px;
  height: 350px;
  float: right;
  border: 1px solid blue;
`;
export const SqCube = styled.div`
  width:160px;
  height:160px;
  position: relative;
  margin: 100px auto;
  transform-style: preserve-3d;
  .box{
    position: absolute;
    top: 60px;
    left: 60px;
    width: 40px;
    height: 40px;
    transform-style: preserve-3d;
    .face {
      position: absolute;
      border-radius: 3.14px;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, .1);
      line-height: 40px;
      background: rgba(158,158,158,.5);
      font-size: 40px;
      text-align: center;
    }
    
    .face:nth-child(1) {
      transform: translateZ(20px);
    }
    
    .face:nth-child(2) {
      transform: translateX(20px) rotateY(90deg);
    }
    
    .face:nth-child(3) {
      transform: translateY(20px) rotateX(90deg);
    }
    
    .face:nth-child(4) {
      transform: translateX(-20px) rotateY(90deg);
    }
    
    .face:nth-child(5) {
      transform: translateY(-20px) rotateX(90deg);
    }
    
    .face:nth-child(6) {
      transform: translateZ(-20px);
    }
  }
`;