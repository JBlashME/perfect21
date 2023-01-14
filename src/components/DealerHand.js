import React from 'react'
import back from "./CardSVG/back.svg"
import RetrieveCard from "./RetrieveCard"
import AceOfSpades from "./CardSVG/AceOfSpades.svg";


class  DealerHand extends React.Component {
  // const cardVar = 'Kd'
  constructor(props){  
    super(props);  
    this.state = {  
      index: 0,
      cardVar: ['2h','3h','4h','5h','6h','7h','8h','9h','Th','Jh','Qh','Kh','Ah','2c','3c','4c','5c','6c','7c','8c','9c','Tc','Jc','Qc','Kc','Ac','2d','3d','4d','5d','6d','7d','8d','9d','Td','Jd','Qd','Kd','Ad','2s','3s','4s','5s','6s','7s','8s','9s','Ts','Js','Qs','Ks','As']
      }  
    this.OnClickShow = this.OnClickShow.bind(this);  
  }
  OnClickShow(){
    if (this.state.index +1 === this.state.cardVar.length){
      this.setState({
        index:0 
      })
      // console.log(this.props,this.state.cardVar[this.state.index]);  
    } else {
      this.setState({
        index: this.state.index + 1
        })
      } 
      // console.log(this.props,this.state.cardVar[this.state.index]);  
    }

  render() {
  return (
    <div >
    <div id='dealer-hand'>
      <RetrieveCard card={this.state.cardVar[this.state.index]}/>
      {/* <img class="upcard" src={this.state.cardVar[this.state.index]} alt="React Logo"/> */}
      <img src={back} alt="React Logo" />
      
    </div>
    <button onClick={this.OnClickShow}>Change Value</button> 
    </div>

  );
  }
}
export default DealerHand;
