import React from 'react'
import back from "./CardSVG/back.svg"
// import RetrieveCard from "./RetrieveCard"
import AceOfSpades from "./CardSVG/AceOfSpades.svg";
import Js from "./CardSVG/JackOfSpades.svg";
import Qs from "./CardSVG/QueenOfSpades.svg";
import Ks from "./CardSVG/KingOfSpades.svg";
import As from "./CardSVG/AceOfSpades.svg";

class  DealerHand extends React.Component {
  // const cardVar = 'Kd'
  constructor(props){  
    super(props);  
    this.state = {  
      index: 0,
      cardVar: [back,Js,Qs,Ks,As]
      }  
    this.handleEvent = this.OnClickShow.bind(this);  
  }
  OnClickShow(){
    if (this.state.index +1 === this.state.cardVar.length){
      this.setState({
        index:0 
      })
      console.log(this.props,this.state.cardVar);
    } else {
      this.setState({
        index: this.state.index + 1
        })
      } 
      console.log(this.props,this.state.cardVar);
    }
  handleEvent(){  
    console.log(this.props,this.state.cardVar);  
  }  
  render() {
  return (
    <div >
    <div id='dealer-hand'>
      <img class="upcard" src={this.state.cardVar[this.state.index]} alt="React Logo"/>
      <img src={Js} alt="React Logo" />
      
      
     
      {/* <button onClick={this.OnClickShow}>Change Value</button>   */}
    </div>
    <button onClick={this.handleEvent}>Class Click</button>  
    </div>

  );
  }
}
export default DealerHand;


// import React, { Component } from 'react';  
  
// class App extends Component {  
//   constructor(props){  
//     super(props);  
//     this.state = {  
//          data: 'www.javatpoint.com'  
//       }  
//     this.handleEvent = this.handleEvent.bind(this);  
//   }  
//   handleEvent(){  
//     console.log(this.props);  
//   }  
//   render() {  
//     return (  
//       <div className="App">  
//     <h2>React Constructor Example</h2>  
//     <input type ="text" value={this.state.data} />  
//         <button onClick={this.handleEvent}>Please Click</button>  
//       </div>  
//     );  
//   }  
// }  
// export default App;  