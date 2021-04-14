import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import getFullDeck from '../../utils/getFullDeck';

import './styles.scss';

function Game({ selectedRule }) {
  const backCardFilename = 'XX';

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
    if (isDeckEmpty() || confirm('Deseja reiniciar o baralho?')) {
      setCards(getFullDeck());
      setDiscardPile([]);
      setCurrCardIndex(null);
    }
  };

  const getCurrCard = () => {
    return (
      currCardIndex !== null &&
      (cards.length || undefined) &&
      cards[currCardIndex]
    );
  };

  const isDeckFull = () => {
    return cards.length === getFullDeck().length && currCardIndex === null;
  };

  const isDeckEmpty = () => {
    return cards.length === 0;
  };

  const currCard = getCurrCard() || backCardFilename;

  const cardKey =
    currCard !== backCardFilename ? currCard[0] : backCardFilename;

  const deckIsEmpty = isDeckEmpty();
  const deckIsFull = isDeckFull();

  const imgAlt = !(deckIsEmpty || deckIsFull)
    ? `${currCard} card`
    : deckIsEmpty
    ? 'Baralho vazio 🕸️'
    : 'Nenhuma carta  🃏';

  const ruleName = !(deckIsEmpty || deckIsFull)
    ? selectedRule.content[cardKey].name
    : deckIsEmpty
    ? 'Baralho vazio 🕸️'
    : 'Nenhuma carta  🃏';

  const ruleDescription = !(deckIsEmpty || deckIsFull)
    ? selectedRule.content[cardKey].description
    : deckIsEmpty
    ? 'Reinicie o baralho'
    : 'Compre a próxima carta';

  const KeepCurrCardSwitch = () => (
    <div className='custom-control custom-switch'>
      <input
        type='checkbox'
        className='custom-control-input'
        id='customSwitch1'
        onChange={toggleKeepCurrCard}
        checked={keepCurrCard}
      />
      <label className='custom-control-label ' htmlFor='customSwitch1'>
        Manter cartas
      </label>
    </div>
  );

  return (
    <div className='container mt-4 panel p-3 w-50'>
      <div className='row'>
        <div className='offset-2 col'>
          <Link to='/'>{'<'} Back</Link>
        </div>
        <div className='offset-1 col'>
          <p>Cartas restantes: {cards.length}</p>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='mb-4 mt-2'>
          <button
            className='next-card-btn btn btn-primary'
            onClick={getRandomCard}
            disabled={isDeckEmpty()}
          >
            Próxima carta
          </button>
        </div>
      </div>

      <div className='row '>
        <div className='offset-2 col-4'>
          <img
            alt={imgAlt}
            className='playing-card'
            src={`./cards/${currCard}.png`}
          />
        </div>
        <div className='col-6'>
          <h3>{ruleName}</h3>
          <p>{ruleDescription}</p>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='m-4'>
          <button
            className='next-card-btn btn btn-secondary'
            onClick={resetDeck}
            disabled={isDeckFull()}
          >
            Reiniciar baralho
          </button>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='mb-2'>
          <KeepCurrCardSwitch onClick={toggleKeepCurrCard} />
        </div>
      </div>
    </div>
  );
}

export default Game;
