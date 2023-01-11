import React from "react"

import Clubs2 from "./CardSVG/2OfClubs.svg";
import Clubs3 from "./CardSVG/3OfClubs.svg";
import Clubs4 from "./CardSVG/4OfClubs.svg";
import Clubs5 from "./CardSVG/5OfClubs.svg";
import Clubs6 from "./CardSVG/6OfClubs.svg";
import Clubs7 from "./CardSVG/7OfClubs.svg";
import Clubs8 from "./CardSVG/8OfClubs.svg";
import Clubs9 from "./CardSVG/9OfClubs.svg";
import Clubs10 from "./CardSVG/TOfClubs.svg";
import JOfClubs from "./CardSVG/JOfClubs.svg";
import QOfClubs from "./CardSVG/QOfClubs.svg";
import KOfClubs from "./CardSVG/KOfClubs.svg";
import AOfClubs from "./CardSVG/AOfClubs.svg";
import Diamonds2 from "./CardSVG/2OfDiamonds.svg";
import Diamonds3 from "./CardSVG/3OfDiamonds.svg";
import Diamonds4 from "./CardSVG/4OfDiamonds.svg";
import Diamonds5 from "./CardSVG/5OfDiamonds.svg";
import Diamonds6 from "./CardSVG/6OfDiamonds.svg";
import Diamonds7 from "./CardSVG/7OfDiamonds.svg";
import Diamonds8 from "./CardSVG/8OfDiamonds.svg";
import Diamonds9 from "./CardSVG/9OfDiamonds.svg";
import Diamonds10 from "./CardSVG/10OfDiamonds.svg";
import JackOfDiamonds from "./CardSVG/JackOfDiamonds.svg";
import QueenOfDiamonds from "./CardSVG/QueenOfDiamonds.svg";
import KingOfDiamonds from "./CardSVG/KingOfDiamonds.svg";
import AceOfDiamonds from "./CardSVG/AceOfDiamonds.svg";
import Hearts2 from "./CardSVG/2OfHearts.svg";
import Hearts3 from "./CardSVG/3OfHearts.svg";
import Hearts4 from "./CardSVG/4OfHearts.svg";
import Hearts5 from "./CardSVG/5OfHearts.svg";
import Hearts6 from "./CardSVG/6OfHearts.svg";
import Hearts7 from "./CardSVG/7OfHearts.svg";
import Hearts8 from "./CardSVG/8OfHearts.svg";
import Hearts9 from "./CardSVG/9OfHearts.svg";
import Hearts10 from "./CardSVG/10OfHearts.svg";
import JackOfHearts from "./CardSVG/JackOfHearts.svg";
import QueenOfHearts from "./CardSVG/QueenOfHearts.svg";
import KingOfHearts from "./CardSVG/KingOfHearts.svg";
import AceOfHearts from "./CardSVG/AceOfHearts.svg";
import Spades2 from "./CardSVG/2OfSpades.svg";
import Spades3 from "./CardSVG/3OfSpades.svg";
import Spades4 from "./CardSVG/4OfSpades.svg";
import Spades5 from "./CardSVG/5OfSpades.svg";
import Spades6 from "./CardSVG/6OfSpades.svg";
import Spades7 from "./CardSVG/7OfSpades.svg";
import Spades8 from "./CardSVG/8OfSpades.svg";
import Spades9 from "./CardSVG/9OfSpades.svg";
import Spades10 from "./CardSVG/10OfSpades.svg";
import JackOfSpades from "./CardSVG/JackOfSpades.svg";
import QueenOfSpades from "./CardSVG/QueenOfSpades.svg";
import KingOfSpades from "./CardSVG/KingOfSpades.svg";
import AceOfSpades from "./CardSVG/AceOfSpades.svg";


const cards = {
  '2c': [Clubs2,'2'],
  '3c': [Clubs3,'3'],
  '4c': [Clubs4,'4'],
  '5c': [Clubs5,'5'],
  '6c': [Clubs6,'6'],
  '7c': [Clubs7,'7'],
  '8c': [Clubs8,'8'],
  '9c': [Clubs9,'9'],
  'Tc': [Clubs10,'10'],
  'Jc': [JOfClubs,'10'],
  'Qc': [QOfClubs,'10'],
  'Kc': [KOfClubs,'10'],
  'Ac': [AOfClubs,'A'],
  '2d': [Diamonds2, '2'],
  '3d': [Diamonds3, '3'],
  '4d': [Diamonds4, '4'],
  '5d': [Diamonds5, '5'],
  '6d': [Diamonds6, '6'],
  '7d': [Diamonds7, '7'],
  '8d': [Diamonds8, '8'],
  '9d': [Diamonds9, '9'],
  'Td': [Diamonds10, '10'],
  'Jd': [JackOfDiamonds, '10'],
  'Qd': [QueenOfDiamonds, '10'],
  'Kd': [KingOfDiamonds, '10'],
  'Ad': [AceOfDiamonds, 'A'],
  '2h': [Hearts2,'2'],
  '3h': [Hearts3,'3'],
  '4h': [Hearts4,'4'],
  '5h': [Hearts5,'5'],
  '6h': [Hearts6,'6'],
  '7h': [Hearts7,'7'],
  '8h': [Hearts8,'8'],
  '9h': [Hearts9,'9'],
  'Th': [Hearts10,'10'],
  'Jh': [JackOfHearts,'10'],
  'Qh': [QueenOfHearts,'10'],
  'Kh': [KingOfHearts,'10'],
  'Ah': [AceOfHearts,'A'],
  '2s': [Spades2,'2'],
  '3s': [Spades3,'3'],
  '4s': [Spades4,'4'],
  '5s': [Spades5,'5'],
  '6s': [Spades6,'6'],
  '7s': [Spades7,'7'],
  '8s': [Spades8,'8'],
  '9s': [Spades9,'9'],
  'Ts': [Spades10,'10'],
  'Js': [JackOfSpades,'10'],
  'Qs': [QueenOfSpades,'10'],
  'Ks': [KingOfSpades,'10'],
  'As': [AceOfSpades,'A'],
}

const RetrieveCard = ({card,back}) => {

    if (back) {
      return (
        <img src={back} />
      )
    } else {
      console.log(cards[card][1])
      return (
        <img class="upcard" src={cards[card][0]} />
        
      )
    }
  }


export default RetrieveCard


