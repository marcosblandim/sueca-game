/*
props
- cardKey
- rule name and description
*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCardImg = styled.img`
  height: 220px;
  margin-left: 40px;
  margin-top: 5px;
  background-color: inherit;
  border: none;
`;

const GameBoard = ({
  cardKey,
  rule,
  keepCurrCard,
  numberOfCards,
  onToggleKeepCurrCard,
  onResetDeck,
  onGetRandomCard,
}) => {
  const ConditionalCard = () => {
    if (numberOfCards === 0) {
      return <p>Deck is empty</p>;
    }
    if (cardKey === null) {
      return <p>No card drawn</p>;
    }
    return <Card />;
  };

  const Card = () => {
    const { name: ruleName, description: ruleDescription } = rule;
    return (
      <React.Fragment>
        <p>
          <StyledCardImg
            src={`./cards/${cardKey}.png`}
            alt={`${cardKey} card`}
            className='card'
          />
        </p>
        <h3 style={{ marginLeft: '40px' }}>{ruleName}</h3>
        <p style={{ marginLeft: '40px' }}>{ruleDescription}</p>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <h1>Game</h1>
      <p>
        <Link to='/'>{'<'} Back</Link>
      </p>
      <p>Keep card: {keepCurrCard ? 'true' : 'false'}</p>
      <p>Number of cards: {numberOfCards}</p>

      <button type='button' onClick={onToggleKeepCurrCard}>
        Toggle keep card
      </button>
      <br />
      <button type='button' onClick={onResetDeck}>
        Reset deck
      </button>
      <br />
      <button type='button' onClick={onGetRandomCard}>
        Next card
      </button>

      <ConditionalCard />
    </React.Fragment>
  );
};

export default GameBoard;
