import PlayerHand from "./PlayerHand";
import {cardValue} from "./RetrieveCard";
import React, { useState } from 'react';
import DisplayCount from "./DisplayCount";
import Bust from "./Bust.js";

function Deck() {

  const [deck, setDeck] = useState([
    '2c','3c','4c','5c','6c','7c','8c','9c','Tc','Jc','Qc','Kc','Ac',
    '2d','3d','4d','5d','6d','7d','8d','9d','Td','Jd','Qd','Kd','Ad',
    '2h','3h','4h','5h','6h','7h','8h','9h','Th','Jh','Qh','Kh','Ah',
    '2s','3s','4s','5s','6s','7s','8s','9s','Ts','Js','Qs','Ks','As']);

  const [dealtCards, setDealtCards] = useState([]);
  const [currentCard, setCurrentCard] = useState('back');
  const playerhand = { 'count': 0,'hand':[],'split': false,'hasAce': 0, 'aceCount': [0,0]}
  const [playerHand, setupdatePlayerHand] = useState(playerhand) //,cards:['empty'],split: false,hasAce: 0,aceCount: [0,0]
  const [bust, setkBust] = useState(0);

  function updatePlayerHand(playerHand, deltCard){
    let currentCardValue = cardValue(deltCard);
    let count = playerHand['count'];
    let hand = playerHand['hand'];
    let hasAce = playerHand['hasAce'];
    let aceCount = playerHand['aceCount'];

    if (currentCardValue !== 'A'){
        count = count + parseInt(currentCardValue);
        hand = hand.concat([deltCard]);
    } else {
        count = count + 1;
        hand = hand.concat([deltCard]);
        hasAce++;
        aceCount[0] = aceCount[0] + 1;
    }
    return (
        { 'count':count,'hand':hand,'split': false,'hasAce': hasAce, 'aceCount': aceCount}
    )
  }

  function checkBusted(playerHand,deltCard){
    const currentCardValue = cardValue(deltCard);
    console.log(playerHand['count']+ parseInt(currentCardValue), 'Check Bust count')
    if (playerHand['count'] + parseInt(currentCardValue) >21){
        return 1
    } else {
        return 0
    }
  }
  
  function handleDealCard() {
    // if there are no more cards in the deck, return
    if (deck.length === 0) {
        return;
    }
    // if they busted reset the hand PICK UP HERE!!!!!!!!!
    if (bust ===1 ){
        setkBust(0)
        console.log('reset teh players hand')
        setupdatePlayerHand({ 'count': 0,'hand':[],'split': false,'hasAce': 0, 'aceCount': [0,0]})
    }

    

    // choose a random card from the deck
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];

    // remove the card from the deck and add it to the dealt cards
    setDeck(deck.filter((_, i) => i !== randomIndex));
    setDealtCards([...dealtCards, card]);
    setCurrentCard(card)
    let updatedPlayerHand = updatePlayerHand(playerHand,card)
    
    setupdatePlayerHand(updatedPlayerHand)
    setkBust(checkBusted(playerHand,card))
    console.log(playerHand['split'],updatedPlayerHand, bust, 'updated state') ;
  }

  return (
    <div >
        {/* onClick={() => parentToChild()}>C */}
        <div> <button class="button" onClick={ () => handleDealCard()} >Deal Card</button></div>
        <div className="deal-card">
      <strong>Cards Dealt:</strong>
            <div class="card" >{bust} Count </div>
            <DisplayCount count={playerHand['count']} aceCount={playerHand['aceCount']} handPosition={0} />
            <div class="card" >{playerHand['hand']} </div>
            <p> another break</p>
            <Bust bust={bust} />
      <PlayerHand currentCard={currentCard}/>
        </div>
        </div>
  );
}
export default Deck;

