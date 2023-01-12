import PlayerHand from "./PlayerHand"
import React, { useState } from 'react';

function Deck() {

  const [deck, setDeck] = useState([
    '2c','3c','4c','5c','6c','7c','8c','9c','Tc','Jc','Qc','Kc','Ac',
    '2d','3d','4d','5d','6d','7d','8d','9d','Td','Jd','Qd','Kd','Ad',
    '2h','3h','4h','5h','6h','7h','8h','9h','Th','Jh','Qh','Kh','Ah',
    '2s','3s','4s','5s','6s','7s','8s','9s','Ts','Js','Qs','Ks','As']);

  const [dealtCards, setDealtCards] = useState([]);
  const [currentCard, setCurrentCard] = useState('');

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
    setCurrentCard(card)
  }

  return (
    <div >
        {/* onClick={() => parentToChild()}>C */}
        <div> <button class="button" onClick={ () => handleDealCard()} >Deal Card</button></div>
        <div className="deal-card">
      <strong>Cards Dealt:</strong>
            <div class="card" >{currentCard} </div>
            <p> another break</p>
      <PlayerHand currentCard={currentCard}/>
        </div>
        </div>
  );
}
export default Deck;

