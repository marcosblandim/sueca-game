export default () => {
    const suits = ['C','D','H','S'];
    const numbers = [...Array(11).keys(), 'J', 'Q', 'K'];
    numbers.shift();
    numbers[0] = 'A';
    
    const fullDeck = [];

    numbers.forEach(number => {
        suits.forEach(suit => {
            const card = number + suit;
            fullDeck.push(card);
        });
    });
    
    return fullDeck;
}