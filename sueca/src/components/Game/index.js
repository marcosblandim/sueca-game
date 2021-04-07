import { useState } from 'react';
import { Link } from 'react-router-dom';
import getFullDeck from './getFullDeck';
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
    return cards[currCardIndex];
  };

  const ConditionalCard = () => {
    if (!cards.length) {
      return <p>Deck is empty</p>;
    } else if (currCardIndex != null) {
      return <Card />;
    } else {
      return <p>No card drawn</p>;
    }
  };

  const Card = () => {
    const cardKey = getCurrCard()[0];
    const {
      name: ruleName,
      description: ruleDescription,
    } = selectedRule.content[cardKey];
    return (
      <>
        <p>
          <img
            alt={`${getCurrCard()} card`}
            className='card'
            // src={`./cards/${getCurrCard()}.png`}
            src={`https://deckofcardsapi.com/static/img/${getCurrCard()}.png`}
          />
        </p>
        <h3 style={{ marginLeft: '40px' }}>{ruleName}</h3>
        <p style={{ marginLeft: '40px' }}>{ruleDescription}</p>
      </>
    );
  };

  return (
    <>
      <h1>Game</h1>
      <p>
        <Link to='/'>{'<'} Back</Link>
      </p>
      <p>Keep card: {keepCurrCard ? 'true' : 'false'}</p>
      <p>Number of cards: {cards.length}</p>

      <button type='button' onClick={toggleKeepCurrCard}>
        Toggle keep card
      </button>
      <br />
      <button type='button' onClick={resetDeck}>
        Reset deck
      </button>
      <br />
      <button type='button' onClick={getRandomCard}>
        Next card
      </button>

      <ConditionalCard />
    </>
  );
}

export default Game;
