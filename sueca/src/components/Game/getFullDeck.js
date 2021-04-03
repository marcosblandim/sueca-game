export default function getFullDeck() {
    const suits = ['C','D','H','S'];
    const numbers = [...Array(10).keys(), 'J', 'Q', 'K'];
    numbers[1] = 'A';
    
    const fullDeck = [];

    numbers.forEach(number => {
        suits.forEach(suit => {
            const card = number + suit;
            fullDeck.push(card);
        });
    });
    
    return fullDeck;
}