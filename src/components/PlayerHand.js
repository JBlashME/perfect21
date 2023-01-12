import React from 'react'
import back from "./CardSVG/back.svg"
import RetrieveCard from "./RetrieveCard"

class  PlayerHand extends React.Component {
  // const cardVar = 'Kd'
  constructor(props){  
    super(props);  
    this.state = {  
      count: 0,
      cards: [],
      split: false,
      hasAce: 0,
      aceCount: [0,0]
      }  
    this.hit = this.hit.bind(this);  
  }
  hit(){
    this.state.count = this.state.count + 1;
    this.state.cards = this.state.cards.concat([this.props.currentCard]);
    console.log(this.state.count, this.state.cards, this.props.currentCard);
  }

  render() {
  return (
    <div >
    <div id='dealer-hand'>
      {/* <img src={back} alt="React Logo" /> */}
      <RetrieveCard card={this.props.currentCard}/>
      
    </div>
    <p> {this.props.currentCard} adsf</p>
    <button onClick={this.hit()}>HIT</button> 
    </div>

  );
  }
}
export default PlayerHand;
