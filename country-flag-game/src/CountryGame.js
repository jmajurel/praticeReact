import React, { Component } from 'react';
import './CountryGame.css';

const statusHelper = {
  INIT: 0,
  WON: 1,
  GAMEOVER: -1
};

class CountryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: statusHelper.INIT, 
      randomCountries: [],
      selectedCountry: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(countries => {
	const randomCountries = this.getFourRandomCountries(countries);
	this.setState({ 
	  randomCountries,
	  selectedCountry: this.getRandomCountry(randomCountries)
	});
      });
  }

  getRandomCountry(countries) {
    let rdIdx = Math.floor(Math.random() * countries.length);
    return countries[rdIdx];
  }

  getFourRandomCountries(countries){
    let randomCountries = [];

    for(let i = 0; i < 4; i++) {
      randomCountries.push(this.getRandomCountry(countries));
    }
    return randomCountries;
  }

  handleSubmit(e) {
    let gameState = '';
    const selectedOption = e.target.option.value;
    selectedOption === this.state.selectedCountry.name ?
      gameState = statusHelper.WON :
      gameState = statusHelper.GAMEOVER

    this.state((prevState) => ({
      ...prevState,
      gameState
    }))

    e.preventDefault();
  }

  render() {
    const options = this.state.randomCountries.map((country, idx) => (
      <div className="option" key={idx}>
	<label htmlFor={`${country.name}`}>{country.name}</label>
	<input 
          type='radio'
	  id={`${country.name}`}
	  name='option' 
	  value={`${country.name}`} />
      </div>
    ));

    const content = () => {
      let msg = '';

      if(this.state.gameState === statusHelper.INIT) {
        msg = <input type="submit" value='Guess!'/>
      } else if (this.state.gameState === statusHelper.WON) {
        msg = <p>You won!</p>
      } else {
        msg = <p>You are wrong, GameOver!</p>
      }
      return msg;
    }


    return (
      <div className="CountryGame">

        <header className="App-header">
          <h1>Guess the flag!</h1>
        </header>

	<form onSubmit={this.handleSubmit} method="PUT">
	  <fieldset>
	    {options}
	  </fieldset>
	  {content()}
	</form>

	<img className='flag' src={this.state.selectedCountry.flag} alt='flag'/>
      </div>
    );
  }
}

export default CountryGame;
