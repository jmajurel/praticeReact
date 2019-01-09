import React, { Component } from 'react';
import './GameBoard.css';
import Card from './Card';


const CardState = {
  HIDDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

class GameBoard extends Component {
/*
 * the GameBoard component  contains the game logic and 
 * the gameboard contains 16 cards which are initialy hidden
 *
 */
  constructor(props){

    super(props);

    let cards = [
      {id: 0, cardState: CardState.HIDDING, backgroundColor: 'BlueViolet'},
      {id: 1, cardState: CardState.HIDDING, backgroundColor: 'BlueViolet'},
      {id: 2, cardState: CardState.HIDDING, backgroundColor: 'Chocolate'},
      {id: 3, cardState: CardState.HIDDING, backgroundColor: 'Chocolate'},
      {id: 4, cardState: CardState.HIDDING, backgroundColor: 'LightSkyBlue'},
      {id: 5, cardState: CardState.HIDDING, backgroundColor: 'LightSkyBlue'},
      {id: 6, cardState: CardState.HIDDING, backgroundColor: 'Purple'},
      {id: 7, cardState: CardState.HIDDING, backgroundColor: 'Purple'},
      {id: 8, cardState: CardState.HIDDING, backgroundColor: 'Teal'},
      {id: 9, cardState: CardState.HIDDING, backgroundColor: 'Teal'},
      {id: 10, cardState: CardState.HIDDING, backgroundColor: 'Beige'},
      {id: 11, cardState: CardState.HIDDING, backgroundColor: 'Beige'},
      {id: 12, cardState: CardState.HIDDING, backgroundColor: 'Aqua'},
      {id: 13, cardState: CardState.HIDDING, backgroundColor: 'Aqua'},
      {id: 14, cardState: CardState.HIDDING, backgroundColor: 'arkSlateGray'},
      {id: 15, cardState: CardState.HIDDING, backgroundColor: 'arkSlateGray'}
    ]

    this.state = {cards: this.shuffle(cards)};

    this.getRandomCouple = this.getRandomCouple.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomColor(colors) {
    /* return a random color */
    const rndIdx = Math.floor(Math.random() * this.props.colors.length);
    return colors[rndIdx];
  }

  getRandomCard(cards) {
    /* return random card */
    const rndIdx = Math.floor(Math.random() * cards.length);
    return cards[rndIdx];
  }

  getRandomCouple(cards) {
    // return [cardA, CardB]
    let cardA = this.getRandomCard(cards);
    cards = cards.filter(cd => cd === cardA); //discard cardA from set 
    let cardB = this.getRandomCard(cards);

    return [cardA, cardB];
  }

  getNewGameSet(cards, colors) {
    /* return [[cardA, CardB], [cardC, CardD]]*/
    const nbOfCpl = cards.length / 2;
    let newCardSet = []; 

    for(let i = 0; i < nbOfCpl; i++) {

      let couple = this.getRandomCouple(cards);
      let [cardA, cardB] = couple;
      cards = cards.filter(card => card === cardA || card === cardB);

      let hiddenColor = this.getRandomColor(colors);
      colors = colors.filter(color => color === hiddenColor);

      newCardSet.push({
	cards: couple,
	hiddenColor
      });
    }
  }

  shuffle(cards) {
    /*
     * shuffle card 
     */
    const nbOfCards = cards.length;
    let shuffledCardSet = [];

    for(let i = 0; i < nbOfCards; i++){
      let randomCard = this.getRandomCard(cards);
      shuffledCardSet.push(randomCard);
      cards = cards.filter(card => card.id !== randomCard.id);
    }
    return shuffledCardSet;
  }

  handleClick(id) {

    let cards = [];
    const showingCard = this.state.cards.find(card => card.cardState === CardState.SHOWING);
    const clickedCard = this.state.cards.find(card => card.id === id);

    //show clicked card in any case
    cards = this.state.cards.map(card => {
      if(card.id === id) {
	card.cardState = CardState.SHOWING;
      } 
      return card;
    });

    if(showingCard) {
      if(showingCard.backgroundColor === clickedCard.backgroundColor) {
	cards = this.state.cards.map(card => {
	  if(card.id === showingCard.id || card.id === clickedCard.id ) {
	     card.cardState = CardState.MATCHING; 
	  }
	  return card;
	});
      } else {
        setTimeout(() => {
	  const cards = this.state.cards.map(card => {
	    if(card.id === showingCard.id  || card.id === clickedCard.id) {
	      card.cardState = CardState.HIDDING; 
	    }
	    return card;
	  });
          this.setState({cards: [...cards]});
        }, 1000);
      }
    }
    this.setState({cards: [...cards]});
  }

  render() {
    const cards = this.state.cards.map(card => (
      <Card 
        key={card.id}
        name={`card-${card.id}`} 
	handleClick={this.handleClick} 
	backgroundColor={card.cardState === CardState.SHOWING || card.cardState === CardState.MATCHING ? card.backgroundColor : 'grey'}
      />
    ));

    return (
      <div className="game-board">
        {cards}
      </div>
    );
  }
}

export default GameBoard;
