import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import getFullDeck from '../../utils/getFullDeck';
import GameBoard from './GameBoard';
import './styles.css';

function Game({ selectedRule }) {
  const [cards, setCards] = useState(getFullDeck());
  const [keepCurrCard, setKeepCurrCard] = useState(false);
  const [currCardIndex, setCurrCardIndex] = useState(null);
  const [discardPile, setDiscardPile] = useState([]);

  const getRandomCard = () => {
    let cardsLength = cards.length;

    if (currCardIndex != null && !keepCurrCard) {
      cardsLength--;

      const newCards = [...cards];
      const removedCard = newCards.splice(currCardIndex, 1).pop();

      const newDiscardPile = [...discardPile, removedCard];

      setCards(newCards);
      setDiscardPile(newDiscardPile);
    }

    const randomCurrCardIndex = Math.floor(Math.random() * cardsLength);
    setCurrCardIndex(randomCurrCardIndex);
  };

  const toggleKeepCurrCard = () => {
    setKeepCurrCard(!keepCurrCard);
  };

  const resetDeck = () => {
    setCards(getFullDeck());
    setDiscardPile([]);
    setCurrCardIndex(null);
  };

  const getCurrCard = () => {
    return currCardIndex && cards[currCardIndex];
  };

  const selectedCardRule = getCurrCard()
    ? selectedRule.content[getCurrCard()[0]]
    : null;

  return (
    <GameBoard
      cardKey={getCurrCard()}
      rule={selectedCardRule}
      keepCurrCard={keepCurrCard}
      numberOfCards={cards.length}
      onToggleKeepCurrCard={toggleKeepCurrCard}
      onResetDeck={resetDeck}
      onGetRandomCard={getRandomCard}
    />
  );
}

export default Game;
