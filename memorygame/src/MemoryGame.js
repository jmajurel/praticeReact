import React, { Component } from 'react';
import './MemoryGame.css';

import shuffle from 'shuffle-array';
import NavBar from './NavBar';
import Card from './Card';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

class MemoryGame extends Component {
  constructor(props) {
    super(props);

    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'orange'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'orange'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];
    cards = shuffle(cards);
    this.state = {cards, noClick: false}
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClick(id) {

    //Helper function
    //this function set the state of a brunch of cards using their ids
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
	if(idsToChange.includes(c.id)) {
	  return {
	    ...c,
	    cardState: newCardState
	  };
	}
	return c;
      })
    };

    //find card in the dataset from its id
    const foundCard = this.state.cards.find(c => c.id === id);

    if(this.state.noClick || foundCard.cardState !== CardState.HIDING){
      //condition where noclick is one meaning the operation are lock due to the async setTimeout function coming 
      // or when the card is not hidding (showing or matching)
      return;
    }

    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

    const showingCards = cards.filter((c) => c.cardState === CardState.SHOWING);
    const ids = showingCards.map(c => c.id);

    if(showingCards.length === 2 &&
	showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      //condition where two cards are showing and matching
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if(showingCards.length === 2) { 
      //condition where two cards are showing but doesn't match
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      noClick = true;
      this.setState({cards, noClick}, () => {
	setTimeout(() => {
	  this.setState({cards: hidingCards, noClick: false});
	}, 1300);
      });
      return;
    }
    this.setState({cards, noClick}); //executed when first card is clicked and when two cards are matching
  }

  handleNewGame() {
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState: CardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }

  render() {

    const cards = this.state.cards.map((card) => (
      <Card 
        key={card.id} 
	showing={card.cardState !== CardState.HIDING}
	backgroundColor={card.backgroundColor}
	onClick={() => {this.handleClick(card.id)}}
      />
    ));

    return (
      <div className="MemoryGame">
        <NavBar onNewGame={this.handleNewGame}/>
	{cards}
      </div>
    );
  }
}

export default MemoryGame;
