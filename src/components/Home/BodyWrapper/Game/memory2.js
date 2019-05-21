import React,{ Component } from 'react';
import { Tag, message } from 'antd';
import {
  ImgWrapper, ImgItem, ImgBgItem
} from './style';
class Memory2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      bgcard:[],
      card:[],
    }
  }
  componentDidMount(){
    const cardArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const bgcard = new Array(13).fill(0);
    for (let i = 1; i < cardArr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [cardArr[i], cardArr[random]] = [cardArr[random], cardArr[i]];
    }
    //cardArr.sort(_=>.5-Math.random());
    this.setState({
      card: cardArr,
      time: 0,
      bgcard: bgcard
    })
  }
  componentWillUnmount(){
    clearInterval(this.timeInterval);
  }
  cardClick = (e)=>{
    if(!this.timeInterval){
      this.timeInterval = setInterval(() => {
        this.setState({
          time:this.state.time+1
        })
      }, 1000);
    }
    if(!this.showIng){
      this.showIng = true;
      const IndNum = Number.parseInt(e.target.id);
      const { card,bgcard} = this.state;
      const num = card[IndNum];
      if(bgcard[IndNum]>0) return ;
      const newBgcard = JSON.parse(JSON.stringify(bgcard));
      const newBgcard2 = JSON.parse(JSON.stringify(bgcard));
      newBgcard[IndNum] = num;
      this.setState({
        bgcard: newBgcard,
      })
      for(let i=1;i<num;i++){
        if(newBgcard.indexOf(i)<0){
          setTimeout(() => {
            this.setState({
              bgcard: newBgcard2,
            })
            this.showIng = false;
          }, 500);
          return;
        }
      }
      this.showIng = false;
      if(num===13){
        message.success(`你赢了,一共用了${this.state.time}S`);
        clearInterval(this.timeInterval);
      }
    }
  }
  render(){
    const { bgcard, card } = this.state;
    return <div>
       <Tag style={{marginTop:20,marginLeft:140}}  color="green">{` ${this.state.time} S `}</Tag>
       <ImgWrapper>
       {
         card.map((item,index)=>{
           if(bgcard[index]){
            return <ImgItem key={item+100}src={`https://zuoyecloud.com/img/${item}.jpg`}/>
           }else{
            return <ImgBgItem  style={{cursor:"pointer"}} id={index} onClick={this.cardClick} key={item}></ImgBgItem>
           }
         })
       }
       </ImgWrapper>
    </div>
  }
}
export default Memory2;