import styled from 'styled-components';
/**
 * 
 */
export const MinesWrapper = styled.div`

`;
export const Mines = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
  div{
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
  }
`;
export const SdokuWraper = styled.div`
  width: 360px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  position: relative;
  input{
    width: 38px;
    height: 38px;
    border: 0px;
    padding: 0px;
    outline:none;
    text-align: center;
    font-size: 20px;
    line-height: 38px;
    border: 1px solid #d3adf7;
  }
  span{
    width: 38px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: #13c2c2;
    background: #e6fffb;
    border: 1px solid #87e8de;
  }
`;
export const SnakeWrapper = styled.div`
  width: 962px;
  height: 502px;
  border: 1px solid red;
  position: absolute;
  top: 120px;
  bottom: 20px;
  left: 0;
`;
export const KlotskiWrapper = styled.div`
  width: 400px;
  height: 500px;
  margin: 20px auto;
  background: pink;
  position: relative;
  div{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 33px;
    text-align: center;
    cursor: pointer;
    user-select:none;
  }
  .s22{
    width: 200px;
    height: 200px;
    line-height: 200px;
  }
  .s21{
    width: 100px;
    height: 200px;
    line-height: 200px;
  }
  .s12{
    width: 200px;
    height: 100px;
    line-height: 100px;
  }
  .s11{
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
`;
export const TagWrapper = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 40px;
  letter-space: 20px;
  border-radius: 10px;
  color: #13c2c2;
  background: #e6fffb;
  border-color: #87e8de;
  white-space: nowrap;
`;
export const BtnWrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

/**
 * memory
 */
export const MemoryWrapper = styled.div`
  &>div{
    margin-top: 20px;
    text-align: center;
  }
`;
export const CardWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: 20px auto;
  background: rgb(135, 208, 104);
  display: flex;
  justify-content: space-around;
  align-item: ceter;
  flex-wrap: wrap;
  &>div{
    width: 125px;
    height: 125px;
    font-size: 40px;
    line-height: 125px;
    box-sizing: border-box;
    border: 1px solid #02ccba;
  }
  .hide{
    background: #2E3D49;
    z-index: 999;
  }
`;

/**
 * Memory2
 */
export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -20px;
  margin-right: -20px;
`;
export const ImgItem = styled.img`
  width: 100px;
  margin: 20px;
`;
export const ImgBgItem = styled.div`
  width: 100px;
  height: 150px;
  margin: 20px;
  background-color: #d3adf7;
`;
/**
 * Logic Wrapper
 */
export const LogicGameWrapper = styled.div`
  position: relative;
  &>div{
    margin: 20px 0;
  }
`;
export const RightWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  button{
    display: block;
    margin: 10px;
  }
`;
export const AlertWrapper = styled.div`

`;
export const BambooWrapper = styled.div`
  margin-top: 220px;
`;
export const BlockWrapper = styled.div`
  position: relative;
  &>div{
    position: absolute;
    left: 0;
    height: 150px;
    background: gray;
    display: inline-block;
    transition: transform .5s ease-in .5s;
    font-size: 0;
    &>div{
      width: 10px;
      position: absolute;
      left: 50%;
      margin-left: -5px;
      z-index: 999;
      background: green;
      transition: transform .5s ease-in .5s;
    }
  }
`;