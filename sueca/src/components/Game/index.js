import {useState} from 'react';
import getFullDeck from '../../utils/getFullDeck';
import './styles.css';

function Game() {

    const [cards, setCards] = useState(getFullDeck());
    const [keepCurrCard, setKeepCurrCard] = useState(false);
    const [currCardIndex, setCurrCardIndex] = useState(null);
    const [discardPile, setDiscardPile] = useState([]);

    const getRandomCard = () => {
        let cardsLength = cards.length;

        if (currCardIndex && !keepCurrCard) {
            cardsLength--;
            
            const newCards = [...cards];
            const removedCard = newCards.splice(currCardIndex, 1).pop();

            const newDiscardPile = [...discardPile, removedCard];

            setCards(newCards);
            setDiscardPile(newDiscardPile);
        }
        
        const randomCurrCardIndex =  Math.floor(Math.random() * cardsLength);
        setCurrCardIndex(randomCurrCardIndex);
    }

    const toggleKeepCurrCard = () => {
        setKeepCurrCard(!keepCurrCard);
    }
    
    const resetDeck = () => {
        setCards(getFullDeck());
        setDiscardPile([]);
        setCurrCardIndex(null);
    }

    const getCurrCard = () => {
        return cards[currCardIndex];
    }

    return (
    <>
        <p>Keep card: {keepCurrCard ? 'true' : 'false'}</p>
        <p>Number of cards: {cards.length}</p>

        <button type="button" onClick={toggleKeepCurrCard}>Toggle keep card</button>
        <button type="button" onClick={getRandomCard}>Next card</button>
        <button type="button" onClick={resetDeck}>Reset deck</button>

        <p>{currCardIndex != null ? <img alt={`${getCurrCard()} card`} className="card" src={`./cards/${getCurrCard()}.png`} /> : 'No card drawn'}</p>
    </>
    )
}

export default Game;