import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import getFullDeck from '../../utils/getFullDeck';

import './styles.scss';
import { suitsSymbols } from '../../utils/constants';

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

  const formattedRuleName = () => {
    let number = currCard[0];

    if (number === 'X') {
      return ruleName;
    }
    if (number === '0') {
      number = '10';
    } else {
      number = ' ' + number;
    }

    const suit = currCard[1];
    console.log(currCard);
    const prefix = number + suitsSymbols[suit];

    return `${prefix} ${ruleName}`;
  };

  return (
    <div className={`container mt-4 panel p-3 ${!isMobile ? 'w-50' : 'w-75'}`}>
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
      {!isMobile ? (
        <div className='row'>
          <div className='offset-2 col-4'>
            <img
              alt={imgAlt}
              className='playing-card'
              src={`./cards/${currCard}.png`}
              onClick={getRandomCard}
              style={!isDeckEmpty() ? { cursor: 'pointer' } : {}}
            />
          </div>
          <div className='col-6 mt-2'>
            <h3>{formattedRuleName()}</h3>
            <p>{ruleDescription}</p>
          </div>
        </div>
      ) : (
        <>
          <div className='row'>
            <div className='offset-2 col-8'>
              <img
                alt={imgAlt}
                className='playing-card'
                src={`./cards/${currCard}.png`}
                onClick={getRandomCard}
              />
            </div>
          </div>
          <div className='row'>
            <div className='offset-3 col-8 mt-3'>
              <h3>{formattedRuleName()}</h3>
              <p>{ruleDescription}</p>
            </div>
          </div>
        </>
      )}

      <div className='flexContainer mt-3'>
        <div className='ml-4 mr-0'>
          <figure>
            <figcaption>
              <b>Descarte</b>
            </figcaption>
            <img
              alt={discardPile[-1]}
              className='playing-card discarted ml-1'
              src={`./cards/${
                discardPile.length
                  ? discardPile[discardPile.length - 1]
                  : backCardFilename
              }.png`}
            />
          </figure>
        </div>

        <div className='align-self-center ml-0 mr-0 mt-3'>
          <button
            className='next-card-btn btn btn-secondary'
            onClick={resetDeck}
            disabled={isDeckFull()}
          >
            Reiniciar baralho
          </button>
          <div className='mt-2'>
            <KeepCurrCardSwitch onClick={toggleKeepCurrCard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
