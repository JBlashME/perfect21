
import "./App.css";
import CardsWrapper from "./components/CardsWrapper";
import DealerHand from "./components/DealerHand";
import PlayerHand from "./components/PlayerHand"
import Deck from "./components/Deck"


function App() {
  return (
    
    <div className="App">
      <DealerHand />
      <p> another break</p>
      {/* <PlayerHand /> */}
      <p>asdf</p>
      <Deck />
    </div>
  );
}

export default App;



// // import CardsWrapper from "./components/CardsWrapper";

// // function App() {
// //   return (
// //     <div className="App">
// //       <CardsWrapper cardsNumber="7" />
// //       <button onClick={() => window.location.reload()}>Reload Cards</button>
// //     </div>
// //   );
// // }

// import JsonDataDisplay from './table'
// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hello Geeks!!!</h1>
// //       <JsonDataDisplay/>
 
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';

// function HomePage() {
//   // state to store the current table index
//   const [tableIndex, setTableIndex] = useState(0);

//   // array of table data
//   const tables = [
//     {
//       id: 1,
//       title: 'Table 1',
//       rows: [
//         {
//           id: 1,
//           cells: ['Cell 1.1', 'Cell 1.2', 'Cell 1.3']
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Table 2',
//       rows: [
//         {
//           id: 1,
//           cells: ['Cell 2.1', 'Cell 2.2', 'Cell 2.3']
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Table 3',
//       rows: [
//         {
//           id: 1,
//           cells: ['Cell 3.1', 'Cell 3.2', 'Cell 3.3']
//         }
//       ]
//     }
//   ];

//   // handler for the button click event
//   function handleButtonClick() {
//     // increment the table index and wrap around if it reaches the end
//     setTableIndex((tableIndex + 1) % tables.length);
//   }

//   return (
//     <div className="home-page">
//       <h1>{tables[tableIndex].title}</h1>
//       <table>
//         <thead>
//           <tr>
//             {tables[tableIndex].rows[0].cells.map((cell, index) => (
//               <th style={{ backgroundColor: index % 2 === 0 ? 'lightgreen' : 'green' }}>
//                 {cell}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {tables[tableIndex].rows[0].cells.map((cell, index) => (
//               <td style={{ backgroundColor: index % 2 === 0 ? 'lightgreen' : 'green' }}>
//                 {cell}
//               </td>
//             ))}
//           </tr>
//         </tbody>
//       </table>
//       <button style={{ backgroundColor: 'green' }} onClick={handleButtonClick}>
//         Next Table
//       </button>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useState } from 'react';

// function DealCard() {
//   // state to store the deck of cards
//   const [deck, setDeck] = useState([
//     { suit: '♠️', value: 'A' },{ suit: '♠️', value: 2 },{ suit: '♠️', value: 3 },{ suit: '♠️', value: 4 },{ suit: '♠️', value: 5 },{ suit: '♠️', value: 6 },{ suit: '♠️', value: 7 },{ suit: '♠️', value: 8 },{ suit: '♠️', value: 9 },{ suit: '♠️', value: 10 },{ suit: '♠️', value: 'J' },{ suit: '♠️', value: 'Q' },{ suit: '♠️', value: 'k' },
//     { suit: '♥️', value: 'A' },{ suit: '♥️', value: 2 },{ suit: '♥️', value: 3 },{ suit: '♥️', value: 4 },{ suit: '♥️', value: 5 },{ suit: '♥️', value: 6 },{ suit: '♥️', value: 7 },{ suit: '♥️', value: 8 },{ suit: '♥️', value: 9 },{ suit: '♥️', value: 10 },{ suit: '♥️', value: 'J' },{ suit: '♥️', value: 'Q' },{ suit: '♥️', value: 'k' },
//     { suit: '♦️', value: 'A' },{ suit: '♦️', value: 2 },{ suit: '♦️', value: 3 },{ suit: '♦️', value: 4 },{ suit: '♦️', value: 5 },{ suit: '♦️', value: 6 },{ suit: '♦️', value: 7 },{ suit: '♦️', value: 8 },{ suit: '♦️', value: 9 },{ suit: '♦️', value: 10 },{ suit: '♦️', value: 'J' },{ suit: '♦️', value: 'Q' },{ suit: '♦️', value: 'k' },
//     { suit: '♣️', value: 'A' },{ suit: '♣️', value: 2 },{ suit: '♣️', value: 3 },{ suit: '♣️', value: 4 },{ suit: '♣️', value: 5 },{ suit: '♣️', value: 6 },{ suit: '♣️', value: 7 },{ suit: '♣️', value: 8 },{ suit: '♣️', value: 9 },{ suit: '♣️', value: 10 },{ suit: '♣️', value: 'J' },{ suit: '♣️', value: 'Q' },{ suit: '♣️', value: 'k' },
//   ]);

//   // state to store the cards that have already been dealt
//   const [dealtCards, setDealtCards] = useState([]);

//   // handler for the "Deal Card" button click event
//   function handleDealCard() {
//     // if there are no more cards in the deck, return
//     if (deck.length === 0) {
//       return;
//     }

//     // choose a random card from the deck
//     const randomIndex = Math.floor(Math.random() * deck.length);
//     const card = deck[randomIndex];

//     // remove the card from the deck and add it to the dealt cards
//     setDeck(deck.filter((_, i) => i !== randomIndex));
//     setDealtCards([...dealtCards, card]);
//   }

//   return (
//     <div className="deal-card">
//       <button class="button" onClick={handleDealCard} >Deal Card</button>
//       <div>
//         <strong>Cards Dealt:</strong>
//         {dealtCards.map((card, index) => (
//           <div class="card" style={{ color: card.suit  === '♥️' || card.suit  === '♦️' ? 'red' : 'black' }}key={index}>{card.value} {card.suit}</div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default DealCard;