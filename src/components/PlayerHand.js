import React from 'react'
import back from "./CardSVG/back.svg"

class  PlayerHand extends React.Component {
  // const cardVar = 'Kd'
  constructor(props){  
    super(props);  
    this.state = {  
      count: 0,
      cards: [],
      split: false
      }  
    this.hit = this.hit.bind(this);  
  }
  hit(){
    const randomIndex = Math.floor(Math.random() * 52);
    this.state.count = this.state.count + randomIndex;
    this.state.cards = this.state.cards.concat([randomIndex]);
    console.log(this.state.count, this.state.cards);
  }

  render() {
  return (
    <div >
    <div id='dealer-hand'>
      <img src={back} alt="React Logo" />
      
    </div>
    <button onClick={this.hit}>Change Hand Values</button> 
    </div>

  );
  }
}
export default PlayerHand;
