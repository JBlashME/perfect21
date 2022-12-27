
import "./App.css";

import React, { useState } from 'react';

const deckState = [
  { suit: '♠️', value: 'A' },{ suit: '♠️', value: 2 },{ suit: '♠️', value: 3 },{ suit: '♠️', value: 4 },{ suit: '♠️', value: 5 },{ suit: '♠️', value: 6 },{ suit: '♠️', value: 7 },{ suit: '♠️', value: 8 },{ suit: '♠️', value: 9 },{ suit: '♠️', value: 10 },{ suit: '♠️', value: 'J' },{ suit: '♠️', value: 'Q' },{ suit: '♠️', value: 'k' },
  { suit: '♥️', value: 'A' },{ suit: '♥️', value: 2 },{ suit: '♥️', value: 3 },{ suit: '♥️', value: 4 },{ suit: '♥️', value: 5 },{ suit: '♥️', value: 6 },{ suit: '♥️', value: 7 },{ suit: '♥️', value: 8 },{ suit: '♥️', value: 9 },{ suit: '♥️', value: 10 },{ suit: '♥️', value: 'J' },{ suit: '♥️', value: 'Q' },{ suit: '♥️', value: 'k' },
  { suit: '♦️', value: 'A' },{ suit: '♦️', value: 2 },{ suit: '♦️', value: 3 },{ suit: '♦️', value: 4 },{ suit: '♦️', value: 5 },{ suit: '♦️', value: 6 },{ suit: '♦️', value: 7 },{ suit: '♦️', value: 8 },{ suit: '♦️', value: 9 },{ suit: '♦️', value: 10 },{ suit: '♦️', value: 'J' },{ suit: '♦️', value: 'Q' },{ suit: '♦️', value: 'k' },
  { suit: '♣️', value: 'A' },{ suit: '♣️', value: 2 },{ suit: '♣️', value: 3 },{ suit: '♣️', value: 4 },{ suit: '♣️', value: 5 },{ suit: '♣️', value: 6 },{ suit: '♣️', value: 7 },{ suit: '♣️', value: 8 },{ suit: '♣️', value: 9 },{ suit: '♣️', value: 10 },{ suit: '♣️', value: 'J' },{ suit: '♣️', value: 'Q' },{ suit: '♣️', value: 'k' },
]

function DealCard() {
  // state to store the deck of cards
  const [deck, setDeck] = useState(deckState);

  // state to store the cards that have already been dealt
  const [dealtCards, setDealtCards] = useState([]);

  // handler for the "Deal Card" button click event
  function handleDealCard() {
    // if there are no more cards in the deck, return
    if (deck.length === 0) {
      return;
    }
    // choose a random card from the deck
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];

    // remove the card from the deck and add it to the dealt cards
    setDeck(deck.filter((_, i) => i !== randomIndex));
    setDealtCards([...dealtCards, card]);
  }
  // reset the deck and the delt deck.
  const resetState = () => {
    setDeck(deckState);
    setDealtCards([])
  };

// function Welcome(props) {
//   var card_color = 'black'
//   if (props.suit === '♥️' || props.suit === '♦️'){
//     card_color = 'red'
//   }
//   return  <div class="card" style= {card_color} key={prop.index}>{props.value} {props.suit}</div>
// }

  return (

    <div class="container">
    <div>
        <div class="row" >
            <div class="col_top" >
              <button class="btn btn-primary btn_game" onClick={handleDealCard} type="button" >Deal Card</button>
              <button class="btn btn-primary btn_game" onClick={resetState} type="button" >Reset Deck</button>
            </div>
        </div>
        <div class="row row_game" >
            <div class="col text-center"></div>
            <div class="col text-center">
                <div>
                <strong>Cards Dealt:</strong>
        {dealtCards.map((card, index) => (
          <div class="card" style={{ color: card.suit  === '♥️' || card.suit  === '♦️' ? 'red' : 'black' }}key={index}>{card.value} {card.suit}</div>
        ))}
                </div>
            </div>
            <div class="col text-center">
                <div>
                <strong>Cards Dealt:</strong>
                {deck.map((card, index) => (
                  <div class="card" style={{ color: card.suit  === '♥️' || card.suit  === '♦️' ? 'red' : 'black' }}key={index}>{card.value} {card.suit}</div>
                ))}
                </div>
            </div>
            <div class="col text-center"></div>
        </div>
    </div>
</div>

  );
}
export default DealCard;

