import getFullDeck from './getFullDeck';

class Deck {
    constructor(){
        this.cards = getFullDeck();
        this.keepCurrCard = false;
        this.currCardIndex = null;
        this.discardPile = [];
    }

    getRandomCard() {
        if (this.currCardIndex && !this.keepCurrCard) {
            const removedCard = this.cards.splice(this.currCardIndex, 1).pop();
            this.discardPile.push(removedCard);
        }
        
        this.currCardIndex =  Math.floor(Math.random() * this.cards);
    }

    toggleKeepCurrCard() {
        this.keepCurrCard = !this.keepCurrCard;
    }
    
    resetDeck() {
        this.cards = getFullDeck();
        this.discardCard = [];
    }
}